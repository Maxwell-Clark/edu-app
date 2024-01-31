<script setup lang="ts">
import {useToast} from "maz-ui";

const route = useRoute()
console.log(route.params.lessonid)

const { data } = await useFetch(`/api/lessons/${route.params.lessonid}`)
let lesson = data.value.Lessons[0]
console.log('fetch data', data.value.Lessons[0])
const LessonName = ref(lesson.lesson_name)
const LessonDescription = ref(lesson.lesson_description)


console.log(data)

const checkDataWasFetched = async () => {
  return lesson != null;
}

const returnToCourse = async() => {
  // todo add return to course functionality
  const router = useRouter()
  await router.push({path: `/courses/${lesson.course_id}`})
}
const markComplete = async() => {
  // todo add mark complete functionality
  useToast().success(`Lesson ${LessonName} Marked Complete`);
}

</script>

<template>
  <div>
<!--    <MazFullscreenLoader v-if="checkDataWasFetched">-->
<!--      <p>-->
<!--        Loading...-->
<!--      </p>-->
<!--      <p>-->
<!--        (click to hide loader)-->
<!--      </p>-->
<!--    </MazFullscreenLoader>-->
    <div class=" leading-normal tracking-normal text-white gradient ">
      <Hero fill_color="white">
        <div class="pt-24">
          <div
              class="flex w-250 justify-center flex-col md:flex-row items-center"
          >
            <div class="w-screen m-24">

              <h1 class="my-4 text-6xl font-bold leading-tight">
                Lesson {{lesson.lesson_order}}: {{LessonName}}
              </h1>

            </div>
          </div>
        </div>
      </Hero>
      <div class="center-container bg-white flex justify-center flex-col items-center">
        <div class="flex justify-between w-[40rem]">
          <maz-btn @click="returnToCourse" class="mt-20 mr-2">Return to Course</maz-btn>
          <maz-btn @click="markComplete" class="mt-20">Mark Lesson Complete</maz-btn>
        </div>
        <div class="center-container bg-white  flex justify-center flex-col items-center max-w-[100rem]">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Description
          </h1>
          <maz-card class="text-black w-[80rem] min-w-80">
          {{LessonDescription}}
          </maz-card>
        </div>
        <div class="center-container bg-white  flex justify-center flex-col items-center">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Video
          </h1>
          <maz-card  class="text-black w-[80rem] h-[35rem]">
            video placeholder
          </maz-card>
        </div>
        <div class="center-container bg-white   flex justify-center flex-col items-center">
          <h1 class="my-4 text-6xl font-bold leading-tight text-black">
            Text
          </h1>
          <maz-card  class="text-black w-[80rem]">
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