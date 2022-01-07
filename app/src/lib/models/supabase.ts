/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/challenge_pools": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.challenge_pools.id"];
          description?: parameters["rowFilter.challenge_pools.description"];
          owner?: parameters["rowFilter.challenge_pools.owner"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["challenge_pools"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** challenge_pools */
          challenge_pools?: definitions["challenge_pools"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.challenge_pools.id"];
          description?: parameters["rowFilter.challenge_pools.description"];
          owner?: parameters["rowFilter.challenge_pools.owner"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.challenge_pools.id"];
          description?: parameters["rowFilter.challenge_pools.description"];
          owner?: parameters["rowFilter.challenge_pools.owner"];
        };
        body: {
          /** challenge_pools */
          challenge_pools?: definitions["challenge_pools"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_answer_drafts": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answer_drafts.id"];
          answerText?: parameters["rowFilter.open_answer_drafts.answerText"];
          openQuestion?: parameters["rowFilter.open_answer_drafts.openQuestion"];
          owner?: parameters["rowFilter.open_answer_drafts.owner"];
          originalOpenAnswer?: parameters["rowFilter.open_answer_drafts.originalOpenAnswer"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_answer_drafts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_answer_drafts */
          open_answer_drafts?: definitions["open_answer_drafts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answer_drafts.id"];
          answerText?: parameters["rowFilter.open_answer_drafts.answerText"];
          openQuestion?: parameters["rowFilter.open_answer_drafts.openQuestion"];
          owner?: parameters["rowFilter.open_answer_drafts.owner"];
          originalOpenAnswer?: parameters["rowFilter.open_answer_drafts.originalOpenAnswer"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answer_drafts.id"];
          answerText?: parameters["rowFilter.open_answer_drafts.answerText"];
          openQuestion?: parameters["rowFilter.open_answer_drafts.openQuestion"];
          owner?: parameters["rowFilter.open_answer_drafts.owner"];
          originalOpenAnswer?: parameters["rowFilter.open_answer_drafts.originalOpenAnswer"];
        };
        body: {
          /** open_answer_drafts */
          open_answer_drafts?: definitions["open_answer_drafts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_answers": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answers.id"];
          answerText?: parameters["rowFilter.open_answers.answerText"];
          /** Incremented for the new row if the user improves his answer. */
          version?: parameters["rowFilter.open_answers.version"];
          openQuestion?: parameters["rowFilter.open_answers.openQuestion"];
          /** If this is an improvement, the original answer (version 1, not current version-1) is stored here. */
          originalOpenAnswer?: parameters["rowFilter.open_answers.originalOpenAnswer"];
          owner?: parameters["rowFilter.open_answers.owner"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_answers"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_answers */
          open_answers?: definitions["open_answers"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answers.id"];
          answerText?: parameters["rowFilter.open_answers.answerText"];
          /** Incremented for the new row if the user improves his answer. */
          version?: parameters["rowFilter.open_answers.version"];
          openQuestion?: parameters["rowFilter.open_answers.openQuestion"];
          /** If this is an improvement, the original answer (version 1, not current version-1) is stored here. */
          originalOpenAnswer?: parameters["rowFilter.open_answers.originalOpenAnswer"];
          owner?: parameters["rowFilter.open_answers.owner"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_answers.id"];
          answerText?: parameters["rowFilter.open_answers.answerText"];
          /** Incremented for the new row if the user improves his answer. */
          version?: parameters["rowFilter.open_answers.version"];
          openQuestion?: parameters["rowFilter.open_answers.openQuestion"];
          /** If this is an improvement, the original answer (version 1, not current version-1) is stored here. */
          originalOpenAnswer?: parameters["rowFilter.open_answers.originalOpenAnswer"];
          owner?: parameters["rowFilter.open_answers.owner"];
        };
        body: {
          /** open_answers */
          open_answers?: definitions["open_answers"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_feedback": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback.id"];
          feedbackText?: parameters["rowFilter.open_feedback.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback.openAnswer"];
          owner?: parameters["rowFilter.open_feedback.owner"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_feedback"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_feedback */
          open_feedback?: definitions["open_feedback"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback.id"];
          feedbackText?: parameters["rowFilter.open_feedback.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback.openAnswer"];
          owner?: parameters["rowFilter.open_feedback.owner"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback.id"];
          feedbackText?: parameters["rowFilter.open_feedback.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback.openAnswer"];
          owner?: parameters["rowFilter.open_feedback.owner"];
        };
        body: {
          /** open_feedback */
          open_feedback?: definitions["open_feedback"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_feedback_drafts": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback_drafts.id"];
          feedbackText?: parameters["rowFilter.open_feedback_drafts.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback_drafts.openAnswer"];
          owner?: parameters["rowFilter.open_feedback_drafts.owner"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_feedback_drafts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_feedback_drafts */
          open_feedback_drafts?: definitions["open_feedback_drafts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback_drafts.id"];
          feedbackText?: parameters["rowFilter.open_feedback_drafts.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback_drafts.openAnswer"];
          owner?: parameters["rowFilter.open_feedback_drafts.owner"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_feedback_drafts.id"];
          feedbackText?: parameters["rowFilter.open_feedback_drafts.feedbackText"];
          openAnswer?: parameters["rowFilter.open_feedback_drafts.openAnswer"];
          owner?: parameters["rowFilter.open_feedback_drafts.owner"];
        };
        body: {
          /** open_feedback_drafts */
          open_feedback_drafts?: definitions["open_feedback_drafts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_question_drafts": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_question_drafts.id"];
          questionText?: parameters["rowFilter.open_question_drafts.questionText"];
          answerText?: parameters["rowFilter.open_question_drafts.answerText"];
          owner?: parameters["rowFilter.open_question_drafts.owner"];
          challengePool?: parameters["rowFilter.open_question_drafts.challengePool"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_question_drafts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_question_drafts */
          open_question_drafts?: definitions["open_question_drafts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_question_drafts.id"];
          questionText?: parameters["rowFilter.open_question_drafts.questionText"];
          answerText?: parameters["rowFilter.open_question_drafts.answerText"];
          owner?: parameters["rowFilter.open_question_drafts.owner"];
          challengePool?: parameters["rowFilter.open_question_drafts.challengePool"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_question_drafts.id"];
          questionText?: parameters["rowFilter.open_question_drafts.questionText"];
          answerText?: parameters["rowFilter.open_question_drafts.answerText"];
          owner?: parameters["rowFilter.open_question_drafts.owner"];
          challengePool?: parameters["rowFilter.open_question_drafts.challengePool"];
        };
        body: {
          /** open_question_drafts */
          open_question_drafts?: definitions["open_question_drafts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/open_questions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_questions.id"];
          questionText?: parameters["rowFilter.open_questions.questionText"];
          challengePool?: parameters["rowFilter.open_questions.challengePool"];
          owner?: parameters["rowFilter.open_questions.owner"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["open_questions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** open_questions */
          open_questions?: definitions["open_questions"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_questions.id"];
          questionText?: parameters["rowFilter.open_questions.questionText"];
          challengePool?: parameters["rowFilter.open_questions.challengePool"];
          owner?: parameters["rowFilter.open_questions.owner"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.open_questions.id"];
          questionText?: parameters["rowFilter.open_questions.questionText"];
          challengePool?: parameters["rowFilter.open_questions.challengePool"];
          owner?: parameters["rowFilter.open_questions.owner"];
        };
        body: {
          /** open_questions */
          open_questions?: definitions["open_questions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  challenge_pools: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    description: string;
    /** Format: uuid */
    owner: string;
  };
  open_answer_drafts: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    answerText: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `open_questions.id`.<fk table='open_questions' column='id'/>
     */
    openQuestion: string;
    /** Format: uuid */
    owner: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `open_answers.id`.<fk table='open_answers' column='id'/>
     */
    originalOpenAnswer?: string;
  };
  open_answers: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    answerText: string;
    /**
     * Format: bigint
     * @description Incremented for the new row if the user improves his answer.
     */
    version: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `open_questions.id`.<fk table='open_questions' column='id'/>
     */
    openQuestion: string;
    /**
     * Format: uuid
     * @description If this is an improvement, the original answer (version 1, not current version-1) is stored here.
     *
     * Note:
     * This is a Foreign Key to `open_answers.id`.<fk table='open_answers' column='id'/>
     */
    originalOpenAnswer?: string;
    /** Format: uuid */
    owner: string;
  };
  open_feedback: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    feedbackText: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `open_answers.id`.<fk table='open_answers' column='id'/>
     */
    openAnswer: string;
    /** Format: uuid */
    owner: string;
  };
  open_feedback_drafts: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    feedbackText: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `open_answers.id`.<fk table='open_answers' column='id'/>
     */
    openAnswer: string;
    /** Format: uuid */
    owner: string;
  };
  open_question_drafts: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    questionText: string;
    /** Format: text */
    answerText?: string;
    /** Format: uuid */
    owner: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `challenge_pools.id`.<fk table='challenge_pools' column='id'/>
     */
    challengePool: string;
  };
  open_questions: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    questionText: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `challenge_pools.id`.<fk table='challenge_pools' column='id'/>
     */
    challengePool: string;
    /** Format: uuid */
    owner: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: timestamp with time zone */
    updated_at?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    website?: string;
  };
}

export interface parameters {
  /** @description Preference */
  preferParams: "params=single-object";
  /** @description Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** @description Preference */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description challenge_pools */
  "body.challenge_pools": definitions["challenge_pools"];
  /** Format: uuid */
  "rowFilter.challenge_pools.id": string;
  /** Format: text */
  "rowFilter.challenge_pools.description": string;
  /** Format: uuid */
  "rowFilter.challenge_pools.owner": string;
  /** @description open_answer_drafts */
  "body.open_answer_drafts": definitions["open_answer_drafts"];
  /** Format: uuid */
  "rowFilter.open_answer_drafts.id": string;
  /** Format: text */
  "rowFilter.open_answer_drafts.answerText": string;
  /** Format: uuid */
  "rowFilter.open_answer_drafts.openQuestion": string;
  /** Format: uuid */
  "rowFilter.open_answer_drafts.owner": string;
  /** Format: uuid */
  "rowFilter.open_answer_drafts.originalOpenAnswer": string;
  /** @description open_answers */
  "body.open_answers": definitions["open_answers"];
  /** Format: uuid */
  "rowFilter.open_answers.id": string;
  /** Format: text */
  "rowFilter.open_answers.answerText": string;
  /**
   * Format: bigint
   * @description Incremented for the new row if the user improves his answer.
   */
  "rowFilter.open_answers.version": string;
  /** Format: uuid */
  "rowFilter.open_answers.openQuestion": string;
  /**
   * Format: uuid
   * @description If this is an improvement, the original answer (version 1, not current version-1) is stored here.
   */
  "rowFilter.open_answers.originalOpenAnswer": string;
  /** Format: uuid */
  "rowFilter.open_answers.owner": string;
  /** @description open_feedback */
  "body.open_feedback": definitions["open_feedback"];
  /** Format: uuid */
  "rowFilter.open_feedback.id": string;
  /** Format: text */
  "rowFilter.open_feedback.feedbackText": string;
  /** Format: uuid */
  "rowFilter.open_feedback.openAnswer": string;
  /** Format: uuid */
  "rowFilter.open_feedback.owner": string;
  /** @description open_feedback_drafts */
  "body.open_feedback_drafts": definitions["open_feedback_drafts"];
  /** Format: uuid */
  "rowFilter.open_feedback_drafts.id": string;
  /** Format: text */
  "rowFilter.open_feedback_drafts.feedbackText": string;
  /** Format: uuid */
  "rowFilter.open_feedback_drafts.openAnswer": string;
  /** Format: uuid */
  "rowFilter.open_feedback_drafts.owner": string;
  /** @description open_question_drafts */
  "body.open_question_drafts": definitions["open_question_drafts"];
  /** Format: uuid */
  "rowFilter.open_question_drafts.id": string;
  /** Format: text */
  "rowFilter.open_question_drafts.questionText": string;
  /** Format: text */
  "rowFilter.open_question_drafts.answerText": string;
  /** Format: uuid */
  "rowFilter.open_question_drafts.owner": string;
  /** Format: uuid */
  "rowFilter.open_question_drafts.challengePool": string;
  /** @description open_questions */
  "body.open_questions": definitions["open_questions"];
  /** Format: uuid */
  "rowFilter.open_questions.id": string;
  /** Format: text */
  "rowFilter.open_questions.questionText": string;
  /** Format: uuid */
  "rowFilter.open_questions.challengePool": string;
  /** Format: uuid */
  "rowFilter.open_questions.owner": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.website": string;
}

export interface operations {}

export interface external {}
