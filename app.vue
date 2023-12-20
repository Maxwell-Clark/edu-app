<template >
  <NuxtLayout :name="layout">
  <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import {useSupabaseStore} from "~/stores/supabaseStore.js";
const layout = "default"

</script>