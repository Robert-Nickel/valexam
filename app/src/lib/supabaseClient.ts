import { createClient } from '@supabase/supabase-js'
import type { definitions } from '$lib/models/supabase';
import { CamelCasedPropertiesDeep, keysToCamelCase } from 'object-key-convert';

const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl.toString(), supabaseAnonKey.toString())

export async function fetchOpenAnswer(id: string): Promise<OpenAnswerType> {
    const { data, error } = await supabase.from<OpenAnswerTypeDB>(openAnswersTable).select().eq('id', id).maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchOpenQuestion(id: string): Promise<OpenQuestionType> {
    const { data, error } =
        await supabase
            .from<OpenQuestionTypeDB>(openQuestionsTable)
            .select()
            .eq('id', id)
            .maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchMyOpenFeedbackDraft(openAnswerId: string): Promise<OpenFeedbackDraftType> {
    const { data, error } =
        await supabase
            .from<OpenFeedbackDraftTypeDB>(openFeedbackDraftsTable)
            .select()
            .eq('owner', supabase.auth.user().id)
            .eq('open_answer', openAnswerId)
            .maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchMyOpenFeedback(openAnswerId: string): Promise<OpenFeedbackType> {
    const { data, error } =
        await supabase
            .from<OpenFeedbackTypeDB>(openFeedbackTable)
            .select()
            .eq('owner', supabase.auth.user().id)
            .eq('open_answer', openAnswerId)
            .maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchOpenFeedbackOfOthers(openAnswerId: string): Promise<OpenFeedbackType[]> {
    const { data, error } =
        await supabase
            .from<OpenFeedbackTypeDB>(openFeedbackTable)
            .select()
            .eq('open_answer', openAnswerId)
            .neq('owner', supabase.auth.user().id)
    printIf(error)
    return keysToCamelCase(data)
}

export async function saveMyOpenFeedbackDraft(openFeedbackDraftText: string, openAnswerId: string) {
    const { error } = await supabase.from<OpenFeedbackDraftTypeDB>(openFeedbackDraftsTable).insert({
        feedback_text: openFeedbackDraftText,
        open_answer: openAnswerId,
        owner: supabase.auth.user().id
    })
    printIf(error)
}

export async function saveChallengePool(description) {
    const { error } = await supabase
        .from<ChallengePoolTypeDB>(challengePoolsTable)
        .insert([{ description, owner: supabase.auth.user().id }]);
    printIf(error)
}

export async function deleteMyFeedbackDraft(id) {
    const { error } = await supabase
        .from<OpenFeedbackDraftTypeDB>(openFeedbackDraftsTable)
        .delete()
        .eq('id', id)
    printIf(error)
}

export async function saveMyOpenFeedback(feedbackText: string, openAnswerId: string) {
    const { error } = await supabase.from<OpenFeedbackTypeDB>(openFeedbackTable).insert({
        feedback_text: feedbackText,
        open_answer: openAnswerId,
        owner: supabase.auth.user().id
    })
    printIf(error)
}

export async function fetchChallengePool(id: string): Promise<ChallengePoolType> {
    const { data, error } = await supabase.from<ChallengePoolTypeDB>(challengePoolsTable).select().eq('id', id).maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchOpenQuestions(challengePoolId): Promise<OpenQuestionType[]> {
    const { data, error } =
        await supabase.from<OpenQuestionTypeDB>(openQuestionsTable).select().eq('challenge_pool', challengePoolId)
    printIf(error)
    return keysToCamelCase(data)
}

export async function deleteChallengePool(id: string) {
    const { error } = await supabase.from<ChallengePoolTypeDB>(challengePoolsTable).delete().eq('id', id)
    printIf(error)
}

export async function fetchMyOpenAnswerDraft(openQuestionId: string): Promise<OpenAnswerDraftType> {
    const { data, error } =
        await supabase
            .from<OpenAnswerDraftTypeDB>(openAnswerDraftsTable)
            .select()
            .eq('open_question', openQuestionId)
            .eq('owner', supabase.auth.user().id)
            .maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchMyOpenAnswer(openQuestionId): Promise<OpenAnswerType> {
    const { data, error } =
        await supabase
            .from<OpenAnswerTypeDB>(openAnswersTable)
            .select()
            .eq('open_question', openQuestionId)
            .eq('owner', supabase.auth.user().id)
            .maybeSingle()
    printIf(error)
    return keysToCamelCase(data)
}

export async function fetchOpenAnswersOfOthers(openQuestionId): Promise<OpenAnswerType[]> {
    const { data, error } = await supabase
        .from<OpenAnswerTypeDB>(openAnswersTable)
        .select()
        .eq('open_question', openQuestionId)
        .neq('owner', supabase.auth.user().id)
    printIf(error)
    return keysToCamelCase(data)
}

export async function saveOpenAnswerDraft(openAnswerDraftText: string, openQuestionId: string) {
    const { error } = await supabase.from<OpenAnswerDraftTypeDB>(openAnswerDraftsTable).insert({
        answer_text: openAnswerDraftText,
        open_question: openQuestionId,
        owner: supabase.auth.user().id
    })
    printIf(error)
}

export async function deleteMyOpenAnswerDraft(id) {
    const { error } = await supabase.from<OpenAnswerDraftTypeDB>(openAnswerDraftsTable).delete().eq('id', id)
    printIf(error)

}

export async function saveOpenAnswer(answerText: string, openQuestionId: string, version = 1) {
    const { error } = await supabase.from<OpenAnswerTypeDB>(openAnswersTable).insert({
        answer_text: answerText,
        open_question: openQuestionId,
        owner: supabase.auth.user().id,
        version
    })
    printIf(error)
}

export async function fetchChallengePools(): Promise<ChallengePoolType[]> {
    const { data, error } = await supabase.from<ChallengePoolTypeDB>(challengePoolsTable).select()
    printIf(error)
    return keysToCamelCase(data)
}

function printIf(error) {
    if (error) console.error(error)
}

export const challengePoolsTable = 'challenge_pools';
export const openQuestionDraftsTable = 'open_question_drafts';
export const openQuestionsTable = 'open_questions';
export const openAnswerDraftsTable = 'open_answer_drafts';
export const openAnswersTable = 'open_answers';
export const openFeedbackDraftsTable = 'open_feedback_drafts';
export const openFeedbackTable = 'open_feedback';

export type ChallengePoolType = CamelCasedPropertiesDeep<definitions['challenge_pools']>;
export type OpenQuestionDraftType = CamelCasedPropertiesDeep<definitions['open_question_drafts']>;
export type OpenQuestionType = CamelCasedPropertiesDeep<definitions['open_questions']>;
export type OpenAnswerDraftType = CamelCasedPropertiesDeep<definitions['open_answer_drafts']>;
export type OpenAnswerType = CamelCasedPropertiesDeep<definitions['open_answers']>;
export type OpenFeedbackDraftType = CamelCasedPropertiesDeep<definitions['open_feedback_drafts']>;
export type OpenFeedbackType = CamelCasedPropertiesDeep<definitions['open_feedback']>;

export type ChallengePoolTypeDB = definitions['challenge_pools'];
export type OpenQuestionDraftTypeDB = definitions['open_question_drafts'];
export type OpenQuestionTypeDB = definitions['open_questions'];
export type OpenAnswerDraftTypeDB = definitions['open_answer_drafts'];
export type OpenAnswerTypeDB = definitions['open_answers'];
export type OpenFeedbackDraftTypeDB = definitions['open_feedback_drafts'];
export type OpenFeedbackTypeDB = definitions['open_feedback'];