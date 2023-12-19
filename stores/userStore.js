import {defineStore} from "pinia";
import {useSupabaseStore} from "~/stores/supabaseStore.js";

import {createClient} from "@supabase/supabase-js";
export const useUserStore = defineStore('toastStore', () => {
    // we need to be able to login, store a login token, and logout
    const supabaseStore = useSupabaseStore()
    const { supabase, getSupabaseClient } = supabaseStore
    const auth_token = ref('')


    function login(username, password) {

    }

    function logout() {

    }

    async function signup(username, password) {
        console.log('supabase ' + supabase)
        console.log('username ' + username + ' password ' + password)
        const { body } = await $fetch('/api/users/register', {
            method: 'post',
            body: {
                supabase: supabase,
                username: username,
                password: password
            }
        })
        console.log(body)
    }


    return { auth_token, login, logout, signup }

})
