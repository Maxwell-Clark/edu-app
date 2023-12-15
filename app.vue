<template>
  <NuxtLayout :name="layout">
    <Toast
      v-if="store.show"
      :message="store.message"
      :type="store.type"
      :duration="store.duration"
    />
  <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import {useToastStore} from "~/stores/toastStore";
const store = useToastStore()
const layout = "default"

</script>