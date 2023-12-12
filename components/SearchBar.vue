<template>
  <div class="search-bar">
    <input
        type="text"
        v-model="searchQuery"
        @keyup.enter="onSearch"
        class="search-input"
        placeholder="Search..."
    />
    <Button @click="onSearch" class="search-button">
      Search
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');

const onSearch = () => {
  console.log('Searching for:', searchQuery.value);
  // You can emit an event or call a method to handle the search
}
</script>

<style scoped>
.search-bar {
  @apply flex items-center space-x-2;
}

.search-input {
  @apply flex-1 p-2 border rounded border-gray-300;
}

.search-button {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
}
</style>
