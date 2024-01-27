<script setup lang="ts">
const CourseName = ref('Test Course') // this needs to be a prop
const course_description = ref('course description for what you will learn here')

const lessons = ref([
  {
    'id': 1,
    'name': 'Lesson 1',
    'complete': true
  },
  {
    'id': 2,
    'name': 'Lesson 2',
    'complete': false
  },
  {
    'id': 3,
    'name': 'Lesson 3',
    'complete': false
  },
])
</script>

<template>
  <div class=" leading-normal tracking-normal text-white gradient ">
    <Hero fill_color="white" >
      <div class="pt-24">
        <div
            class="flex w-250 justify-center flex-col md:flex-row items-center"
        >
          <div class="w-screen m-24">

            <h1 class="my-4 text-6xl font-bold leading-tight">
              {{CourseName}}
            </h1>
            <p class="leading-normal text-2xl mb-2">
              {{course_description}}
            </p>

          </div>
        </div>
      </div>

    </Hero>
    <div class="center-container bg-white h-screen flex justify-center flex-col items-center">
      <!-- Card Lists -->
      <div class="w-[800px] flex justify-center flex-col">
        <!-- this needs tobe a list of lessons with a checkbox next to them -->

          <MazCard
              v-for="(item, i) in lessons"
              :key="i"
              :images="['https://placekitten.com/250/300']"
              style="min-width: 400px;"
              class="m-8 text-black"
          >
            <h3 class="m-2 font-bold">
              {{ item.name }}
            </h3>

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
            <div class="flex justify-between">
              <nuxt-link
                  to="/lesson"
              >
                <maz-btn size="sm">
                  Begin Lesson
                </maz-btn>
            </nuxt-link>
              <MazCheckbox v-model="item.complete">
                {{ item.complete ? 'Marked Complete' : 'Not Completed' }}
              </MazCheckbox>
            </div>
          </MazCard>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>