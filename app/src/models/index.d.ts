import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OpenAnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OpenQuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengePoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OpenQuestionDraftMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OpenAnswer {
  readonly id: string;
  readonly answerText?: string;
  readonly openquestionID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OpenAnswer, OpenAnswerMetaData>);
  static copyOf(source: OpenAnswer, mutator: (draft: MutableModel<OpenAnswer, OpenAnswerMetaData>) => MutableModel<OpenAnswer, OpenAnswerMetaData> | void): OpenAnswer;
}

export declare class OpenQuestion {
  readonly id: string;
  readonly questionText?: string;
  readonly challengepoolID?: string;
  readonly OpenAnswers?: (OpenAnswer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OpenQuestion, OpenQuestionMetaData>);
  static copyOf(source: OpenQuestion, mutator: (draft: MutableModel<OpenQuestion, OpenQuestionMetaData>) => MutableModel<OpenQuestion, OpenQuestionMetaData> | void): OpenQuestion;
}

export declare class ChallengePool {
  readonly id: string;
  readonly description?: string;
  readonly OpenQuestions?: (OpenQuestion | null)[];
  readonly OpenQuestionDrafts?: (OpenQuestionDraft | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChallengePool, ChallengePoolMetaData>);
  static copyOf(source: ChallengePool, mutator: (draft: MutableModel<ChallengePool, ChallengePoolMetaData>) => MutableModel<ChallengePool, ChallengePoolMetaData> | void): ChallengePool;
}

export declare class OpenQuestionDraft {
  readonly id: string;
  readonly questionText?: string;
  readonly answerText?: string;
  readonly challengepoolID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OpenQuestionDraft, OpenQuestionDraftMetaData>);
  static copyOf(source: OpenQuestionDraft, mutator: (draft: MutableModel<OpenQuestionDraft, OpenQuestionDraftMetaData>) => MutableModel<OpenQuestionDraft, OpenQuestionDraftMetaData> | void): OpenQuestionDraft;
}