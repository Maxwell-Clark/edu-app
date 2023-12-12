<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb-list">
      <li
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
      >
        <a
            v-if="breadcrumb.link"
            :href="breadcrumb.link"
            class="breadcrumb-link"
        >
          {{ breadcrumb.text }}
        </a>
        <span v-else>{{ breadcrumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  breadcrumbs: Array
});
</script>

<style scoped>
.breadcrumb-list {
  @apply flex list-none p-0;
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  @apply mx-2;
}

.breadcrumb-link {
  @apply text-blue-600 hover:text-blue-700;
}
</style>
