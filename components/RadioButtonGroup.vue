<template>
  <div class="radio-buttons">
    <div
        v-for="option in options"
        :key="option.value"
        class="radio-option"
    >
      <input
          type="radio"
          :value="option.value"
          :id="option.value"
          v-model="selectedOption"
          class="hidden"
      />
      <label
          :for="option.value"
          class="label"
          :class="{ 'label-selected': selectedOption === option.value }"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
  options: Array
});

const selectedOption = ref('');

// Emit an event or perform an action when the selection changes
const watchEffect = (effect) => {
  // Implement your logic here
};
</script>

<style scoped>
.radio-buttons {
  @apply flex flex-col;
}

.radio-option {
  @apply mb-2;
}

.label {
  @apply cursor-pointer px-4 py-2 border border-gray-300 rounded hover:bg-gray-100;
}

.label-selected {
  @apply bg-blue-100 border-blue-500;
}
</style>

<!--how to use

<template>
  <div>
    <h1>Select an Option</h1>
    <RadioButtonGroup :options="radioOptions" @change="handleRadioChange"/>
  </div>
</template>

<script setup lang="ts">
import RadioButtonGroup from './RadioButtonGroup.vue';
import { ref } from 'vue';

const radioOptions = ref([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]);

const handleRadioChange = (selectedValue) => {
  console.log('Selected option:', selectedValue);
};
</script>

-->