<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="handleSignIn">
      <TextInput v-model="email" type="email" placeholder="Email" size="large" class="mb-4" />
      <TextInput v-model="password" type="password" placeholder="Password" size="large" class="mb-4" />
      <Button type="submit" size="large">Sign In</Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSignIn = async () => {
  try {
    const res = await $fetch('/api/submit', {
      method: 'post',
      body: { username: email.value, password: password.value }
    });
    // Handle success
  } catch (error) {
    // Handle error
  }
};
</script>
