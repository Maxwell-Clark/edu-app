<script setup>
import {useToast} from "maz-ui";

const route = useRoute()
console.log(route.params.instructorid)

const { data } = await useFetch(`/api/instructors/${route.params.instructorid}`)
const instructor = data.value.Instructor[0]
const InstructorName = ref(instructor.instructor_name) // todo this needs to be a prop
const instructorDescription = ref('instructor description for what you will learn here')
const instructorCourses = ref(instructor.Courses.map(course => {
  return {
    ...course,
    lessons: instructor.Lessons.filter(lesson => lesson.course_id === course.course_id)
  }
}))
console.log('courses', instructorCourses)
const instructor_pic = ref('https://placekitten.com/250/300')
let showLoader = ref(false) // todo this will be changed to false when the lesson content is loaded

const goToCourse = async(course_id) => {
  const router = useRouter()
  await router.push({path: `/courses/${course_id}`})
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
          <maz-carousel @click="goToCourse(course.course_id)"  class="max-w-10 mb-5" v-for="course in instructorCourses">
            <template #title>
              <h2 class="text-black flex justify-self-center font-bold">{{course.course_name}}</h2>
            </template>
            <maz-card class="text-black max-w-full" v-for="(lesson, i) in course.lessons">
              <h3 class="m-2 font-bold">
                {{ lesson.lesson_name }}
              </h3>
            </maz-card>
          </maz-carousel>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>