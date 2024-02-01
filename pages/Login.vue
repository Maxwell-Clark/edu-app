<template class="bg-[#1f2937]">
  <div class="bg-[#1f2937] h-screen flex justify-center align-bottom">
    <div class="align-baseline flex flex-col justify-center items-center">
      <MazCard>
        <template class="flex flex-col justify-center items-center" #title>
        </template>
        <template #content>
          <form @submit.prevent="handleSignUp" class="flex flex-col justify-center items-center">
            <MazInput v-model="email" label="Email" type="email" placeholder="example@gmail.com" auto-focus size='lg' class="mb-4" />
            <MazInput v-model="password" label="Password" type="password" placeholder="..."  size='lg' class="mb-4" />
            <Button v-if="needToLogin" :type="needToLogin? 'submit': ''" @click="handleSignIn" >Sign In</Button>
            <Button v-else :type="!needToLogin? 'submit': ''" @click="handleSignUp" >Sign Up</Button>
          </form>
          <div class="mt-5 flex justify-center">
            <h3 v-if="needToLogin" >
              Don't have an account? <UButton size="sm" @click="needToLogin=false">Sign Up!</UButton>
            </h3>
            <h3 v-else>
              Have an account? <MazBtn size="xs" @click="needToLogin=true">Sign In!</MazBtn>
            </h3>
          </div>
        </template>
      </MazCard>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import { useToastStore } from "../stores/toastStore.js";
import {useUserStore} from "~/stores/userStore.js";
import supabaseClient from "~/scripts/supabaseClient.js";

const supabase = supabaseClient.getInstance()

const email = ref('');
const password = ref('');
const userStore = useUserStore();
const needToLogin = ref(true)


const handleSignIn = async () => {
  if(needToLogin.value !== true) {
    return
  }
  try {
    //console.log(supabase)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    // store.newToast(true, 'successful login', 'success')
    useToast().success('Successful Login')
    console.log(data)
    userStore.setAcctName('Max Clark') // need to set the account name here
    await navigateTo('/explore')
    // Handle success
  } catch (error) {
    // store.newToast(true, 'unsuccessful login', 'error')
    useToast().error('Unsuccessful Login', {
      position: "top-right"
    })
    // Handle error
  }
};

const checkSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  console.log(data, error)
}

const handleSignUp = async () => {
  if(needToLogin.value === true) {
    return
  }
  try {
  // call the store
  // let res = await userStore.signup(email.value, password.value)
    console.log('email ' + email.value)
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: 'localhost:3001/'
      }
    })

    // const { body } = await $fetch('/api/users/register', {
    //   method: 'post',
    //   body: {
    //     username: email.value,
    //     password: password.value
    //   }
    // })
    console.log(data, error)
    useToast().success('Successful sign up')
  } catch(error) {
    useToast().error('Unsuccessful signup')
  }
}
</script>
