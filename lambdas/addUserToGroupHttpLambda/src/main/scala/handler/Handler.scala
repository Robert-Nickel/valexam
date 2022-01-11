package handler

import java.util.HashMap;
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.events.{
  APIGatewayV2HTTPEvent,
  APIGatewayV2HTTPResponse
}
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import scala.language.implicitConversions
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.http.SdkHttpClient;

import software.amazon.awssdk.services.lambda.LambdaClient;
import software.amazon.awssdk.services.lambda.model.{InvokeRequest, ListFunctionsRequest};
import software.amazon.awssdk.core.SdkBytes;

import little.json.*
import little.json.Implicits.{*, given}
import java.nio.charset.Charset;

import scala.collection.JavaConverters._
import scala.jdk.CollectionConverters.MapHasAsJava

class Handler {
  def handle(
      apiGatewayEvent: APIGatewayV2HTTPEvent,
      context: Context
  ): APIGatewayV2HTTPResponse = {
    if (apiGatewayEvent != null && apiGatewayEvent.getBody() != null) {
      val eventInfoBody = apiGatewayEvent.getBody()
      val eventInfo = Json.parse(eventInfoBody).as[EventInfo]
      // pass this JWT token to JS function which return the decoded token
      // get userPoolID & userID from JWTToken

      println("eventInfo:")
      println(eventInfo)

      val lambdaClient = LambdaClient
      .builder()
      .region(Region.EU_CENTRAL_1)
      .httpClient(ApacheHttpClient.builder().build())
      .build()
      
      val jwtLambdaName = findFunctionName(lambdaClient, "InfrastructureStack-jwtHandler")
      val jwtLambdaRequest = (
        InvokeRequest.builder()
          .functionName(jwtLambdaName)
          .payload(SdkBytes.fromUtf8String(Json.toJson(eventInfoBody)))
          .build()
      )

      val jwtResponse = lambdaClient.invoke(jwtLambdaRequest)
      // TODO: somehow not working... wrong encoding / charset maybe?
      val myString = jwtResponse.payload().asUtf8String()
      println("myString: " + myString)
      val parsedResponseJson = Json.parse(myString)
      val parsedResponse = parsedResponseJson.as[JWTResponse]

      val addUserLambdaName = findFunctionName(lambdaClient, "InfrastructureStack-addUserToGroupLambda")

      val groupInfo = GroupInfo(eventInfo.groupName, parsedResponse.usermail, parsedResponse.userpool)

      val lambdaRequest = (
        InvokeRequest.builder()
          .functionName(addUserLambdaName)
          .payload(SdkBytes.fromUtf8String(Json.toJson(groupInfo)))
          .build()
      )
      
      val response = lambdaClient.invoke(lambdaRequest)
      val customHttpResponseJSON = response.payload.asUtf8String()
      println("customHttpResponseJSON:")
      println(customHttpResponseJSON)

      val customHttpResponse = customHttpResponseJSON.as[CustomHttpResponse]

      // val reponseStatus = customHttpResponse.statusCode

      return APIGatewayV2HTTPResponse
        .builder()
        .withStatusCode(customHttpResponse.statusCode.toInt)
        .withBody("{statusText: " + customHttpResponse.statusText + "}")
        .build()
    } else {
      /* For OPTIONS call*/
      println(
        "Handling request with apiGatewayEvent == null or apiGatewayEvent.body == null"
      )
      return APIGatewayV2HTTPResponse
        .builder()
        .withStatusCode(200)
        .withBody(s"${apiGatewayEvent.getBody()}")
        .build()
    }
  }

  def findFunctionName(lambdaClient: LambdaClient, findFunctionName: String): String = { 
      val lambdaListFunctionsRequest = (ListFunctionsRequest.builder().build())
      val lambdaListFunctions = lambdaClient.listFunctions(lambdaListFunctionsRequest).functions()

      val validInvokeFunctions = lambdaListFunctions
        .asScala
        .filter(x => x.functionName().startsWith(findFunctionName))
        .toArray

      var lambdaName = ""
      if(validInvokeFunctions.length > 0) {
        lambdaName = validInvokeFunctions(0).functionName()
      } else {
        println("No valid invoke function found!" +  findFunctionName )
      }
      lambdaName
  }
}
