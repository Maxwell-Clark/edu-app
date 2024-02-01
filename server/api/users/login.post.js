
import supabaseClient from "~/scripts/supabaseClient.js";

export default defineEventHandler(async (event) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

    const supabase = supabaseClient.getInstance();
    const {email, password} = await readBody(event)

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })


    console.log('login', data)

    if(error) {
        console.error('There was an error logging in', error)
        throw new Error('Error ' + error)
    }
    return {data, error}
})