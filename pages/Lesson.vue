<script setup lang="ts">
import {useToast} from "maz-ui";

const LessonName = ref('Test Lesson Name') // todo this needs to be a prop
let showLoader = ref(false) // todo this will be changed to false when the lesson content is loaded

const returnToCourse = async() => {
  // todo add return to course functionality
  useToast().success(`Returning to Course`);
}
const markComplete = async() => {
  // todo add mark complete functionality
  useToast().success(`Lesson ${LessonName} Marked Complete`);
}

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
              class="flex w-250 justify-center flex-col md:flex-row items-center"
          >
            <div class="w-screen m-24">

              <h1 class="my-4 text-6xl font-bold leading-tight">
                {{LessonName}}
              </h1>

            </div>
          </div>
        </div>
      </Hero>
      <div class="center-container bg-white flex justify-center flex-col items-center">
        <div>
          <maz-btn @click="returnToCourse" class="mt-20 mr-2">Return to Course</maz-btn>
          <maz-btn @click="markComplete" class="mt-20">Mark Lesson Complete</maz-btn>
        </div>
        <div class="center-container bg-white  flex justify-center flex-col items-center max-w-[100rem]">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Description
          </h1>
          <maz-card class="text-black max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in. Elit eget gravida cum sociis natoque penatibus et. Sit amet mauris commodo quis imperdiet massa tincidunt. Euismod elementum nisi quis eleifend quam adipiscing. Faucibus vitae aliquet nec ullamcorper sit amet. Egestas congue quisque egestas diam in arcu cursus euismod quis. Interdum posuere lorem ipsum dolor sit amet consectetur. Amet facilisis magna etiam tempor orci eu. Mi bibendum neque egestas congue quisque egestas diam in.
          </maz-card>
        </div>
        <div class="center-container bg-white  flex justify-center flex-col items-center">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Video
          </h1>
          <maz-card  class="text-black w-[100rem] h-[35rem]">
            video placeholder
          </maz-card>
        </div>
        <div class="center-container bg-white   flex justify-center flex-col items-center">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Text
          </h1>
          <maz-card  class="text-black w-[100rem]">
            instructional text placeholder
          </maz-card>
        </div>
        <maz-btn @click="markComplete" class="m-10">Mark Lesson Complete</maz-btn>
      </div>
  </div>
  </div>

</template>

<style scoped>

</style>