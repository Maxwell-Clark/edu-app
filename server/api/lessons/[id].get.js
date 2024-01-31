import supabaseClient from "~/scripts/supabaseClient.js";


export default defineEventHandler(async (event) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

    const lessonId = getRouterParam(event, 'id')
    console.log('lesson id', JSON.stringify(lessonId))

    const supabase = supabaseClient.getInstance();

    let { data: Lessons, error } = await supabase
        .from('Lessons')
        .select().eq('lesson_id', lessonId)


    console.log('Lessons', Lessons)
    console.log('error', error)
    if(error) {
        // console.error('There was an error retrieving course data', error)
        return 'Error ' + error
    }
    return {Lessons}
})