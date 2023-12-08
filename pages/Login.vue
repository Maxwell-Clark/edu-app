<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="handleSignIn">
      <TextInput
          v-model="email"
          type="email"
          placeholder="Email"
          size="large"
          class="mb-4"
      />

      <TextInput
          v-model="password"
          type="password"
          placeholder="Password"
          size="large"
          class="mb-4"
      />

      <Button type="submit" size="large">
        Sign In
      </Button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSignIn() {
      // You can add your authentication logic here, e.g., sending the login request
      // using Axios, Fetch, or your preferred method.
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // After successful login, you can navigate to another page or perform other actions.
    },
  },
};
</script>
