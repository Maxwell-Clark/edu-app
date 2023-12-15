<template>
  <TransitionFade :easing="{
        enter: 'ease-in',
        leave: 'ease-out'
      }" :duration="{ enter: 100, leave: 100 }" >
    <div v-if="store.show" class="toast" :class="`toast-${store.type}`">
      {{ store.message }}
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
const store = useToastStore()
</script>

<style scoped>
.toast {
  @apply fixed top-5 right-5 px-4 py-2 border rounded shadow-lg;
}

.toast-info {
  @apply bg-blue-200 border-blue-400;
}

.toast-success {
  @apply bg-green-200 border-green-400;
}

.toast-warning {
  @apply bg-yellow-200 border-yellow-400;
}

.toast-error {
  @apply bg-red-200 border-red-400;
}
</style>

<!-- how to use

<template>
  <div>
    <button @click="showToast">Show Toast</button>
    <ToastNotification
      v-if="toast.show"
      :message="toast.message"
      :type="toast.type"
      :duration="toast.duration"
    />
  </div>
</template>

<script setup lang="ts">
import ToastNotification from './ToastNotification.vue';
import { ref } from 'vue';

const toast = ref({
  show: false,
  message: '',
  type: 'info', // Can be 'info', 'success', 'warning', 'error'
  duration: 3000
});

const showToast = () => {
  toast.value = {
    show: true,
    message: 'This is a toast message!',
    type: 'success', // Change as needed
    duration: 3000 // Change as needed
  };

  // Hide toast after duration
  setTimeout(() => {
    toast.value.show = false;
  }, toast.value.duration);
};
</script>

-->