<template >
  <NuxtLayout :name="layout">
  <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import {useSupabaseStore} from "~/stores/supabaseStore.js";
const layout = "default"

</script>

<style>
/* Customizing the scrollbar for Webkit browsers */
::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: #888; /* color of the scroll thumb */
  border-radius: 10px; /* roundness of the scroll thumb */
  border: 3px solid #f1f1f1; /* creates padding around scroll thumb */
}

/* Hover effect for the scrollbar thumb */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* color when hovering over the scrollbar thumb */
}

/* Customizing the scrollbar for Firefox */
* {
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: #888 #f1f1f1; /* thumb and track color */
}
</style>