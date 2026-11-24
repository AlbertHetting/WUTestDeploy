import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env");
}

// Token rules
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false}
})

export async function requireAuth(req, res, next) {

    // Get token from header: "Bearer ey....."
    const header = req.headers.authorization ?? "";
    if (!header) {
        return res.status(401).json({
            error: "Authentication required. Please provide a valid token."
        })
    }

    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if(!token) {
        return res.status(401).json({ error: "Not logged in"})
    }

    // Is token real and who does it belong to
    const { data: { user }, error, } = await supabase.auth.getUser(token);

    if (error || !user) {
        return res.status(401).json({ 
            error: "Invalid or expired token, please login again"
        })
    }

    // Saves info on req, so route can use it
    req.userId = user.id;
    req.isGuest = user.is_anonymous === true;

    next();
}

export function requireRegistered(req, res, next) {
    if (req.isGuest) {
        return res.status(403).json({ 
            error: "Create an account to use this feature"
        })
    }
    next();
}