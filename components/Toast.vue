<template>
  <transition name="fade">
    <div v-if="isVisible" class="toast" :class="`toast-${type}`">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'info' // Types could be 'info', 'success', 'warning', 'error'
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration);
});

onUnmounted(() => {
  isVisible.value = false;
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.toast {
  @apply fixed bottom-5 right-5 px-4 py-2 border rounded shadow-lg;
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