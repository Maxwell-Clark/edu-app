<template>
  <div>
    <button @click="showToast('this is a test', false)">Show Toast</button>
    <Toast
      v-if="toast.show"
      :message="toast.message"
      :type="toast.type"
      :duration="toast.duration"
    />
  <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import Home from "~/pages/Home.vue";
const toast = ref({
  show: false,
  message: '',
  type: 'info', // Can be 'info', 'success', 'warning', 'error'
  duration: 3000
});
</script>