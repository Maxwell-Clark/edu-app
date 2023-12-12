<template>
  <icon-button class="icon-button" @click="onClick" :icon="icon" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// Define props if needed
const props = defineProps({
  icon: String
})

// Define emits if needed
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<style scoped>
.icon-button {
  @apply p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600;
  /* Add more Tailwind classes as needed */
}
</style>
