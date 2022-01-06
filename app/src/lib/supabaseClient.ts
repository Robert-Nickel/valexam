import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl.toString(), supabaseAnonKey.toString())
export const challengePoolsTable = 'challenge_pools';
export const openQuestionsTable = 'open_questions';
