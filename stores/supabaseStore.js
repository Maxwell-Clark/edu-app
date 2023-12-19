import {defineStore} from "pinia";
import {createClient} from "@supabase/supabase-js";

export const useSupabaseStore = defineStore('toastStore', () => {
    // we need to be able to login, store a login token, and logout

    let supabase = createClient('https://gynoiozksxkoburmvlpe.supabase.co', 'XmHmiYivOt16bJQdbnPvAKku4HBa0lHMIjNLiLdXZ/XIGhSKa497lxdvVLp1Hc0KImtQOBuVteQUwVUUO5G49g==')

    function getSupabaseClient() {
        supabase = createClient('https://gynoiozksxkoburmvlpe.supabase.co', 'XmHmiYivOt16bJQdbnPvAKku4HBa0lHMIjNLiLdXZ/XIGhSKa497lxdvVLp1Hc0KImtQOBuVteQUwVUUO5G49g==')
        return supabase
    }
    return { supabase, getSupabaseClient }
})