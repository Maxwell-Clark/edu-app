<template class="bg-[#1f2937]">
  <div class="bg-[#1f2937] h-screen flex justify-center align-bottom">
    <div class="align-baseline flex flex-col justify-center items-center">
      <MazCard>
        <template class="flex flex-col justify-center items-center" #title>
          <h3 class="flex flex-col justify-center items-center">Login</h3>
        </template>
        <template #content>
          <form @submit.prevent="handleSignIn" class="flex flex-col justify-center items-center">
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
// import { useToast } from 'maz-ui'

const email = ref('');
const password = ref('');
const store = useToastStore();

const toast = useToast()

const handleSignIn = async () => {
  try {
    const res = await $fetch('/api/users/login', {
      method: 'post',
      body: { username: email.value, password: password.value }
    });
    console.log(res);
    // store.newToast(true, 'successful login', 'success')
    toast.success('Successful Login')
    // Handle success
  } catch (error) {
    // store.newToast(true, 'unsuccessful login', 'error')
    useToast().error('Unsuccessful Login', {
      position: "top-right"
    })
    // Handle error
  }
};
</script>
