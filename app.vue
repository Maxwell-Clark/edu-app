<template >
  <NuxtLayout :name="layout">
  <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import {useSupabaseStore} from "~/stores/supabaseStore.js";
import {createClient} from "@supabase/supabase-js";
import {useStore} from "~/stores/store.js";
let supabase = createClient('https://gynoiozksxkoburmvlpe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bm9pb3prc3hrb2J1cm12bHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NTQ5ODksImV4cCI6MjAxODUzMDk4OX0.evauuapAfcPXvdEnZUrrHF3t-pHVRvxmSt23bioFi00')
const supaStore = useSupabaseStore()
const store = useStore()
// store.setSupabaseStore(supaStore)
const layout = "default"
console.log('home app page')

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