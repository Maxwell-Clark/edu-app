<template>
  <div class=" leading-normal tracking-normal text-white gradient ">
    <Hero fill_color="white" >
      <div class="pt-24">
        <div
            class="flex w-250 justify-center flex-col md:flex-row items-center"
        >
          <div class="w-screen m-24">

            <h1 class="my-4 text-6xl font-bold leading-tight">
              Explore illuminara!
            </h1>
            <p class="leading-normal text-2xl mb-8">
              Search for instructors, courses, topics and more!
            </p>

          </div>
        </div>
      </div>

    </Hero>
    <div class="center-container bg-white h-screen flex justify-center flex-col items-center">
      <!-- Search Bar -->
      <div class="search-bar flex justify-center items-center flex-col">
<!--        <TextInput-->
<!--            v-model="searchQuery"-->
<!--            placeholder="Search for topics or instructors"-->
<!--            size="large"-->
<!--            class="search-input"-->
<!--        />-->
        <MazInput
            v-model="searchValue"
            label="Search Topics"
            debounce
            :debounce-delay="3000"
            placeholder="Search..."
            :color="'primary'"
            class="mb-5 w-[500px]"
        />

        <Button @click="search"  size="medium">Search</Button>
      </div>

      <!-- Card Lists -->
      <div class="w-[800px]">
        <MazCarousel class="max-w-10 mb-5">
          <template #title>
            <h2 class="text-Black">Popular Courses</h2>
          </template>
          <nuxt-link
              v-for="(item, i) in Array(8)"
              :key="i"
              to="/course"
          >
            <MazCard
                :images="['https://placekitten.com/250/300']"
                style="min-width: 250px;"
            >

                <template #title>
                  <h4 class="maz-m-0">
                    Steven Seagal
                  </h4>
                </template>
                <template #content>
                  <p class="maz-text-muted" style="margin-bottom: 0;">
                    You're awesome! You're awesome!
                  </p>
                </template>

            </MazCard>
          </nuxt-link>
        </MazCarousel>
        <h2 class="leading-normal text-2xl mt-5 text-black font-bold justify-self-center flex">Top Instructors</h2>
        <MazCarousel class="max-w-10">
          <template #title>
            <h2 class="text-Black">Top Instructors</h2>
          </template>
          <MazCard
              v-for="(item, i) in Array(8)"
              :key="i"
              :images="['https://placekitten.com/250/300']"
              style="min-width: 250px;"
          >
            <template #title>
              <h4 class="maz-m-0">
                Steven Seagal
              </h4>
            </template>
            <template #content>
              <p class="maz-text-muted" style="margin-bottom: 0;">
                You're awesome! You're awesome!
              </p>
            </template>
          </MazCard>
        </MazCarousel>

      </div>

<!--      <CardList :cardData="popularTopics" />-->
<!--        </div>-->
<!--        <div class="card-list">-->
<!--          <h2>Featured Instructors</h2>-->
<!--          <CardList :cardData="featuredInstructors" />-->
<!--        </div>-->
<!--        <div class="card-list">-->
<!--          <h2>New Arrivals</h2>-->
<!--          <CardList :cardData="newArrivals" />-->
        </div>
      </div>
</template>

<style scoped>


/* Add your other styles here */

</style>
<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});
  const searchValue = ref('')
  async function search() {

  }
</script>