
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Você pode exportar "supabase" ou um nome que preferir.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
