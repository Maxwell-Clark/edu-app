import {defineStore} from "pinia";
import {useSupabaseStore} from "~/stores/supabaseStore.js";

import {createClient} from "@supabase/supabase-js";
export const useUserStore = defineStore('toastStore', () => {
    // we need to be able to login, store a login token, and logout
    const supabaseStore = useSupabaseStore()
    const { supabase, getSupabaseClient } = supabaseStore
    const auth_token = ref('')

    const name = ref('')


    function login(username, password) {

    }

    function logout() {
        this.name = ''
    }

    async function signup(username, password) {
        console.log('SIGNING UP ' + username.value + " " + password.value)
        const { body } = await $fetch('/api/users/register', {
            method: 'post',
            body: {
                supabase: supabase,
                username: username,
                password: password
            }
        })
        console.log(body)
        return body
    }

    function setAcctName(acctName) {
        this.name = acctName
    }



    return { auth_token, login, setAcctName, name, logout }

})
