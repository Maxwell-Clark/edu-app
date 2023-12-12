<template>
  <transition name="fade">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <header class="modal-header">
          <slot name="header">
            Default Header
          </slot>
          <button class="close-button" @click="closeModal">&times;</button>
        </header>
        <main class="modal-body">
          <slot>
            Default content.
          </slot>
        </main>
        <footer class="modal-footer">
          <slot name="footer">
            <!-- Default footer content can go here -->
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: Boolean
});

const emit = defineEmits(['update:showModal']);

const closeModal = () => {
  emit('update:showModal', false);
};
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center;
}

.modal-content {
  @apply bg-white p-4 rounded-lg shadow-lg;
}

.modal-header {
  @apply flex justify-between items-center;
}

.close-button {
  @apply text-3xl;
}

.modal-body {
  @apply p-4;
}

.modal-footer {
  @apply flex justify-end p-4;
}
</style>
