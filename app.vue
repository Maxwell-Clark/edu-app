<template>
  <NuxtLayout :name="layout">
  <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import {useSupabaseStore} from "~/stores/supabaseStore.js";

const supabaseStore = useSupabaseStore();
supabaseStore.getSupabaseClient()
const layout = "default"

</script>