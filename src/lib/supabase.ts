import { createClient } from '@supabase/supabase-js';

//supabase url
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
//publishable key
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
// VITE_SUPABASE_URL=the_url and put the VITE_SUPABASE_PUBLISHABLE_KEY=the_key and they re inside .env.local  currently in gitignore, do not publish keys online
//security, reasons, if anyone sees this or learns from my project, we don t publish the db keys online always keep them in separate file and add that file to gi ignore




export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);




