<script setup lang="ts">
import {useToast} from "maz-ui";

const InstructorName = ref('Test Instructor Name') // todo this needs to be a prop
const instructor_description = ref('instructor description for what you will learn here')
const instructor_courses = ref([
  {
    'id': 1,
    'name': 'Course 1',
    'complete': true,
    'lessons': [
      {
        'id': 1,
        'name': 'Lesson 1',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 2,
        'name': 'Lesson 2',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 3,
        'name': 'Lesson 3',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 4,
        'name': 'Lesson 4',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 5,
        'name': 'Lesson 5',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 6,
        'name': 'Lesson 6',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 7,
        'name': 'Lesson 7',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 8,
        'name': 'Lesson 8',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 9,
        'name': 'Lesson 9',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      }
    ]
  },
  {
    'id': 2,
    'name': 'Course 2',
    'complete': false,
    'lessons': [
      {
        'id': 1,
        'name': 'Lesson 1',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 2,
        'name': 'Lesson 2',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 3,
        'name': 'Lesson 3',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      }
    ]
  },
  {
    'id': 3,
    'name': 'Course 3',
    'complete': false,
    'lessons': [
      {
        'id': 1,
        'name': 'Lesson 1',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 2,
        'name': 'Lesson 2',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      },
      {
        'id': 3,
        'name': 'Lesson 3',
        'complete': true,
        'content': 'https://www.youtube.com/embed/3tmd-ClpJxA'
      }
    ]
  },
])
const instructor_pic = ref('https://placekitten.com/250/300')
let showLoader = ref(false) // todo this will be changed to false when the lesson content is loaded


</script>

<template>
  <div>
    <MazFullscreenLoader v-if="showLoader">
      <p>
        Loading...
      </p>
      <p>
        (click to hide loader)
      </p>
    </MazFullscreenLoader>
    <div class=" leading-normal tracking-normal text-white gradient ">
      <Hero fill_color="white">
        <div class="pt-24">
          <div
              class="flex w-250 justify-center flex flex-row items-center"
          >
            <div class="w-screen m-24">
              <h1 class="my-4 text-6xl font-bold leading-tight">
                {{InstructorName}}
              </h1>
              <p class="leading-normal text-2xl mb-2">
                {{instructor_description}}
              </p>

              </div>
            <div class="w-screen m-24">
              <h1 class="my-4 text-6xl font-bold flex justify-center leading-tight">
                <maz-avatar
                    :src="instructor_pic"
                    :size="200"
                    class="m-2 p-8"/>
              </h1>
            </div>
          </div>
        </div>
      </Hero>
      <div class="center-container bg-white flex justify-center flex-col items-center">
        <div class="center-container bg-white  flex justify-center flex-col items-center max-w-[100rem]">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Courses
          </h1>
          <maz-carousel  class="max-w-10 mb-5" v-for="item in instructor_courses">
            <template #title>
              <h2 class="text-black flex justify-self-center font-bold">{{item.name}}</h2>
            </template>
            <maz-card class="text-black max-w-full" v-for="(lesson, i) in item.lessons">
              <h3 class="m-2 font-bold">
                {{ lesson.name }}
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
            </maz-card>
          </maz-carousel>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>