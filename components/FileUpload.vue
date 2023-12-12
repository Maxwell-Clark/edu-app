<template>
  <div class="file-upload">
    <label for="file-upload" class="upload-label">
      <input
          type="file"
          id="file-upload"
          hidden
          @change="handleFileChange"
      />
      <span class="upload-button">{{ buttonText }}</span>
    </label>
    <div v-if="fileName" class="file-name">{{ fileName }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref(null);
const fileName = ref('');

const buttonText = 'Choose a file';

const handleFileChange = (event: { target: { files: null[]; }; }) => {
  file.value = event.target.files[0];
  fileName.value = file.value ? file.value.name : '';
  // You can emit an event or perform actions with the file here
};
</script>

<style scoped>
.file-upload {
  @apply flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg;
}

.upload-label {
  @apply cursor-pointer;
}

.upload-button {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}

.file-name {
  @apply mt-2 text-gray-700;
}
</style>
