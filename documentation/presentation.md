# Demonstration of application functionality [N]
1. login with existing account with existing challenge pool, open questions and open answers
   - lldemo@tempr.email
   - 123456789
2. create group to show async workload

# Presentation of the system architecture [N]
[Schaubild](https://app.diagrams.net/#G1YkT9ysZctfkS0ghIzVGWcQuxlOMpDJRh)

# Demonstration of the cloud resources in the cloud provider UI [R]
- Amplify Apps
- von da aus zu
  - Cognito
  - AppSync
  - DynamoDB

# Review of the cloud setup script [K]
instrastructure-stack.ts zeigen
deploy.sh zeigen
create_amplify_app.sh zeigen
[Build-Konfiguration in Vercel](https://vercel.com/lightbulb-learning/lightbulb-learning-cad/settings/general)
- builds SvelteKit App
- Umgebungsvariablen
- Domainmanagement
- Preview-Deployments für Branches

# Creation of the different tenant types [K]
create_amplify_app.sh ausführen (10-15 Minuten)

# Demonstration of the CI/CD Pipeline [R]
Änderung machen (Limit von 50 für standard auf 2 setzen, um Limitation zeigen zu können) und pushen
GitHub Actions beobachten (7-8 Minuten)

# Commercial model of the application [N]
[Google Spreadsheet zeigen](https://docs.google.com/spreadsheets/d/1TFKLW81obnl-8ExXepsOn40TfKWki4uK3HHkYUYxock/edit?usp=sharing)

# Special highlights the team want to show
- Ablauf mit JWT handling [K]
- Monorepo [R]
- Pair & Mob Programming [R]
- (teilweise) Wechsel von Amplify zu Vercel wegen Qualitätsproblemen [R]
- AWS Dokumentation oft in schlechtem Zustand [K,N]
- SvelteKit unterstützt SPA & SSR (via Hydration) [R]
- Programmiersprachen (Scala -> JVM in Lambda bad, NodeJS good) [KNR]
- CDK (imperativ) compiles to CloudFormation (deklarativ)  [R]