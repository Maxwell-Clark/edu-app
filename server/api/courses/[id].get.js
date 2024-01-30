// to view details of a specific course
import fetch from 'node-fetch';

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}


// import supabaseClient from "~/scripts/supabaseClient.js";
import { createClient } from '@supabase/supabase-js';
import {initializeApp, applicationDefault, cert, getApps} from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import serviceAccount from '../../../service-account.json' assert { type: 'json' };


export default defineEventHandler(async (event) => {
    const supabaseUrl = 'https://gynoiozksxkoburmvlpe.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bm9pb3prc3hrb2J1cm12bHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NTQ5ODksImV4cCI6MjAxODUzMDk4OX0.evauuapAfcPXvdEnZUrrHF3t-pHVRvxmSt23bioFi00';

    const courseId = getRouterParam(event, 'id')

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { signin_data, signinerror } = await supabase.auth.signInWithPassword({
        email: 'maxwell6636@gmail.com',
        password: '123456789'
    })
    if(signinerror) {
        console.log('sign in error', signinerror)
    }
    console.log('client', signin_data)
    console.log('course id', courseId)
    const table = supabase.from('Courses')
    const session = await supabase.auth.getSession()
    console.log('session ', session)
    let { data: Courses, error } = await supabase.from('courses').select('*')

    // const db = getDatabase()
    // console.log('courses: ', Courses)


    if(error) {
        // console.error('There was an error retrieving course data', error)
        return 'Error ' + error
    }
    return {Courses}
})