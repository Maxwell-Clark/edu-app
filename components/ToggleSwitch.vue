<template>
  <div class="toggle-switch" @click="toggle">
    <div class="switch" :class="{ 'switch-on': isOn }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOn = ref(false);

const toggle = () => {
  isOn.value = !isOn.value;
  // Emit an event or perform an action based on the toggle state
};
</script>

<style scoped>
.toggle-switch {
  @apply w-12 h-6 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer;
}

.switch {
  @apply h-4 w-4 bg-white rounded-full shadow-md transition-transform;
}

.switch-on {
  @apply translate-x-6;
}
</style>
