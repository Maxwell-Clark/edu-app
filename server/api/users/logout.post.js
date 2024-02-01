
import supabaseClient from "~/scripts/supabaseClient.js";

export default defineEventHandler(async (event) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

    const supabase = supabaseClient.getInstance();
    const dat = await supabase.auth.signOut()
    console.log('signout', dat)
})