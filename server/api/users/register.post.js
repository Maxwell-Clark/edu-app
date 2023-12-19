// for new users to create an account

export default defineEventHandler(async (event)=> {

    const body = await readBody(event);
    const { supabase, username, password } = body;
    console.log('supabase ' + supabase)

    const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password,
        options: {
            emailRedirectTo: 'localhost:3000/'
        }
    })
    if(!error){
        return 'User Signed Up!'
    }
    return 'Error Signing Up ' + JSON.stringify(error)
})