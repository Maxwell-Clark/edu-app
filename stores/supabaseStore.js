import {defineStore} from "pinia";
import {createClient} from "@supabase/supabase-js";

export const useSupabaseStore = defineStore('toastStore', () => {
    // we need to be able to login, store a login token, and logout

    let supabase = createClient('https://gynoiozksxkoburmvlpe.supabase.co', 'XmHmiYivOt16bJQdbnPvAKku4HBa0lHMIjNLiLdXZ/XIGhSKa497lxdvVLp1Hc0KImtQOBuVteQUwVUUO5G49g==')

    function getSupabaseClient() {
        console.log(process.env)
        supabase = createClient('https://gynoiozksxkoburmvlpe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bm9pb3prc3hrb2J1cm12bHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NTQ5ODksImV4cCI6MjAxODUzMDk4OX0.evauuapAfcPXvdEnZUrrHF3t-pHVRvxmSt23bioFi00')
        return supabase
    }
    return { supabase, getSupabaseClient }
})