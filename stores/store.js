import {defineStore} from "pinia";
import {createClient} from "@supabase/supabase-js";

export const useStore = defineStore('storemanager', () => {
    // we need to be able to login, store a login token, and logout
    let supabaseStore = null

    function setSupabaseStore(store) {
        if(supabaseStore == null && store != null) {
            supabaseStore = store
        }
        // console.log()
        // console.log(supabaseStore)
    }

    return{supabaseStore, setSupabaseStore}
})