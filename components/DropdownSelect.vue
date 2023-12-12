<template>
  <div class="dropdown">
    <button
        class="dropdown-button"
        @click="toggleDropdown"
    >
      {{ selectedOption || placeholder }}
    </button>

    <div v-if="isOpen" class="dropdown-menu">
      <div
          v-for="option in options"
          :key="option.value"
          class="dropdown-item"
          @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  options: Array,
  placeholder: String
});

const isOpen = ref(false);
const selectedOption = ref('');

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option.label;
  isOpen.value = false;
  // Emit an event or perform an action
};
</script>

<style scoped>
.dropdown {
  @apply relative;
}

.dropdown-button {
  @apply px-4 py-2 bg-white border border-gray-300 rounded w-full text-left;
}

.dropdown-menu {
  @apply absolute w-full bg-white border border-gray-300 rounded mt-1 z-10;
}

.dropdown-item {
  @apply px-4 py-2 hover:bg-gray-100 cursor-pointer;
}
</style>
