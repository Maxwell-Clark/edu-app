import supabaseClient from "~/scripts/supabaseClient.js";


export default defineEventHandler(async (event) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

    const instructorId = getRouterParam(event, 'id')
    console.log('instructor id', JSON.stringify(instructorId))

    const supabase = supabaseClient.getInstance();

    let { data: Instructor, error } = await supabase
        .from('Instructors')
        .select(
            `
            instructor_name,
            Courses (
                course_name,
                course_id
            ),
            Lessons (
                course_id,
                lesson_name,
                lesson_id,
                lesson_complete,
                lesson_description,
                lesson_order
            )`
        ).eq('instructor_id', instructorId)


    console.log('Lessons', Instructor)
    console.log('error', error)
    if(error) {
        // console.error('There was an error retrieving course data', error)
        return 'Error ' + error
    }
    return {Instructor}
})