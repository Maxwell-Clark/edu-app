
import supabaseClient from "~/scripts/supabaseClient.js";

export default defineEventHandler(async (event) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

    const courseId = getRouterParam(event, 'id')

    const supabase = supabaseClient.getInstance();

    let { data: Courses, error } = await supabase
        .from('Courses')
        .select(`
            course_name,
            course_description,
            Instructors (
                instructor_id,
                instructor_name
            ),
            Lessons (
                course_id,
                lesson_name,
                lesson_id,
                lesson_complete,
                lesson_description,
                lesson_order
            )`
        )
        .eq('course_id', courseId)


    console.log('Course', Courses)
    console.log('error', error)
    if(error) {
        // console.error('There was an error retrieving course data', error)
        return 'Error ' + error
    }
    return {Courses}
})