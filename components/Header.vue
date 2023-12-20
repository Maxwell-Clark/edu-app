<template>
  <div :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <button
            class="flex items-center p-1 text-orange-800 hover:text-gray-900"
            @click.prevent.stop="onToggleClick"
        >
          <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
          :class="navActionClassList"
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <nuxt-link
                class="inline-block py-2 px-4 font-bold no-underline"
                to="/explore">Explore</nuxt-link>
          </li>
<!--          <li class="mr-3">-->
<!--            <a-->
<!--                class="inline-block text-white no-underline  hover:text-underline py-2 px-4"-->
<!--                href="#"-->
<!--            >Sign up</a-->
<!--            >-->
<!--          </li>-->
        </ul>
          <nuxt-link
              v-if="userIsLoggedIn == null"
              @click="userIsLoggedIn"
              class="inline-block py-2 px-4 text-white font-bold no-underline"
              to="/login"><Button>Login / Sign up</Button></nuxt-link>
          <MazAvatar
              v-else
              caption="Max Clark"
              size="1rem"
          />
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Logo from '@/components/Logo';
const supabase = useSupabaseClient()

async function userIsLoggedIn() {
  const res = await supabase.auth.getUser()
  console.log(user)
  return res.data.user
}

const user = computed (() => supabase.auth.user())

// Refs for reactive data
const scrollY = ref(0);
const isOpen = ref(false);

// Computed properties
const isSticky = computed(() => scrollY.value > 10);

const headerClassList = computed(() => {
  return isSticky.value ? 'bg-white shadow' : '';
});

const navActionClassList = computed(() => {
  return isSticky.value ? 'bg-white text-gray-800' : 'bg-white text-white';
});

const navContentClassList = computed(() => {
  let classList = isSticky.value ? 'bg-white' : 'bg-gray-800';
  if (!isOpen.value) {
    classList += ` hidden`;
  }
  return classList;
});

// Methods
const onClick = () => {
  isOpen.value = false;
};

const onScroll = () => {
  scrollY.value = window.scrollY;
};

const onToggleClick = () => {
  isOpen.value = !isOpen.value;
};

// Lifecycle hooks
onMounted(() => {
  scrollY.value = window.scrollY;
  document.addEventListener('click', onClick);
  document.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  document.removeEventListener('click', onClick, true);
  document.removeEventListener('scroll', onScroll, true);
  user.value = supabase.auth.user();
});
</script>
