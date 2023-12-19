<template class="bg-[#1f2937]">
  <div class="bg-[#1f2937] h-screen flex justify-center align-bottom">
    <div class="align-baseline flex flex-col justify-center items-center">
      <MazCard>
        <template class="flex flex-col justify-center items-center" #title>
          <h3 class="flex flex-col justify-center items-center">Login</h3>
        </template>
        <template #content>
          <form @submit.prevent="handleSignUp" class="flex flex-col justify-center items-center">
            <TextInput v-model="email" type="email" placeholder="Email" size="large" class="mb-4" />
            <TextInput v-model="password" type="password" placeholder="Password" size="large" class="mb-4" />
            <Button type="submit" size="large">Sign In</Button>
          </form>
        </template>
      </MazCard>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import { useToastStore } from "../stores/toastStore.js";
import {useUserStore} from "~/stores/userStore.js";
// import { useToast } from 'maz-ui'

const email = ref('');
const password = ref('');
const userStore = useUserStore();


const handleSignIn = async () => {
  try {
    const res = await $fetch('/api/users/login', {
      method: 'post',
      body: { username: email.value, password: password.value }
    });
    console.log(res);
    // store.newToast(true, 'successful login', 'success')
    useToast().success('Successful Login')
    // Handle success
  } catch (error) {
    // store.newToast(true, 'unsuccessful login', 'error')
    useToast().error('Unsuccessful Login', {
      position: "top-right"
    })
    // Handle error
  }
};

const handleSignUp = async () => {
  console.log('sign up email' + email.value + " password " +  password.value)
  try {
  // call the store

  let res = userStore.signup(email.value, password.value)
  console.log(res)
  useToast().success('Successful sign up')
  } catch(error) {
    useToast().error('Unsuccessful signup')
  }
}
</script>
