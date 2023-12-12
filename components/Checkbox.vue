<template>
  <div class="checkbox-container">
    <input
        type="checkbox"
        :id="checkboxId"
        v-model="isChecked"
        class="hidden"
    />
    <label
        :for="checkboxId"
        class="checkbox-label"
        :class="{ 'checkbox-checked': isChecked }"
    >
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
  label: String,
  checkboxId: String
});

const isChecked = ref(false);

// You can watch for changes or emit events based on isChecked here
</script>

<style scoped>
.checkbox-container {
  @apply flex items-center;
}

.checkbox-label {
  @apply cursor-pointer flex items-center;
}

.checkbox-label span {
  @apply ml-2;
}

.checkbox-checked {
  @apply text-blue-500;
  /* Add additional styles or icons to indicate the checked state */
}
</style>
