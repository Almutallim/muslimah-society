// js/supabaseClient.js
// Remplace par tes clés Supabase (Project Settings > API)
const SUPABASE_URL = "TON_SUPABASE_URL";
const SUPABASE_ANON_KEY = "TON_SUPABASE_ANON_KEY";

// Client Supabase (supabase-js v2)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
