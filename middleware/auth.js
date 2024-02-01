import supabaseClient from "~/scripts/supabaseClient.js";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = supabaseClient.getInstance()
    // console.log('supabase', supabase)
    let authSession
    try {
        authSession = await supabase.auth.getSession();
    } catch (error) {
        console.error('Error fetching session:', error);
        // Handle error appropriately
    }
    console.log('session', authSession)

    // if (to.params.id === '1') {
    //     return abortNavigation()
    // }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    console.log('path', to.path, 'session', authSession)
    if (to.path === '/profile' && authSession.data.session == null) {
        return navigateTo('/login')
    }
    if (authSession.data.session == null) {
        return navigateTo('/')
    }
})