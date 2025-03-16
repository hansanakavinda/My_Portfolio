import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


// console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
// console.log("Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase credentials are missing. Check your .env.local file.");
  }

export const supabase = createClient(supabaseUrl, supabaseKey);

