import { supabase } from "./supabase.js";

export async function continueAsGuest() {
    // Check if session exists
    const { data: { session }} = await supabase.auth.getSession();
    if (session) return session.user;

    // If no session - opret anonym bruger
    const  { data, error } = await supabase.auth.signInAnonymously();
    if (error) throw error;

    return data.user;
}

export function isGuest(user) {
    return user?.is_anonynous === true;
}