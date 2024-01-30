import {defineStore} from "pinia";
import {createClient} from "@supabase/supabase-js";
import  supabaseClient from '../scripts/supabaseClient.js'
export const useSupabaseStore = defineStore('supabaseStore', {
    state: () => {
        return {  }
    },
    actions: {
        getSupabaseClient() {
            return supabaseClient.getInstance()
        },
    },
})