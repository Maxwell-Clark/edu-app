<script setup>

// before this is mounted we need to get the course data from the db.
// that means we need to put in a fetch request and pass the course id.
// this will respond with the lesson ids, names, as well as any other course data that we may need for this page.
const route = useRoute()
console.log(route.params.courseid)
const { data } = await useFetch(`/api/courses/${route.params.courseid}`)

console.log('fetch data', data.value.Courses[0])
const course_data = data.value ? data.value.Courses[0]  : 0
console.log(course_data)

const CourseName = ref(course_data.course_name)
const course_description = ref(course_data.course_description)
const Instructor_Id = ref(course_data.Instructors.instructor_id)
const InstructorName = ref(course_data.Instructors.instructor_name)

const lessons = ref(course_data.Lessons.sort((a,b) => a.lesson_order - b.lesson_order))
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
            <nuxt-link :to="'/instructors/'+Instructor_Id" class="leading-normal text-2xl mb-2">
              Created By: {{InstructorName}}
            </nuxt-link>

          </div>
        </div>
      </div>

    </Hero>
    <div class="center-container bg-white pt-20 flex justify-center flex-col items-center">
      <!-- Card Lists -->
      <div class="w-[800px] flex justify-center flex-col">
        <!-- this needs tobe a list of lessons with a checkbox next to them -->

        <MazCardSpotlight
            v-for="(item, i) in lessons"
            :key="i"
            :images="['https://placekitten.com/250/300']"
            style="min-width: 400px;"
            class="m-8 text-black p-8"
        >
          <h3 class="m-2 ml-10 mt-5 font-bold">
            {{ item.lesson_name }}
          </h3>
          <div class="flex justify-center p-1" v-if="item.lesson_description">
            <p class="flex justify-self-center max-w-80" >
              {{item.lesson_description}}
            </p>
          </div>
          <div class="flex justify-around m-5">
            <nuxt-link
                :to="'/lessons/'+item.lesson_id"
            >
              <maz-btn size="sm">
                Go To Lesson
              </maz-btn>
            </nuxt-link>
            <MazCheckbox v-model="item.complete">
              {{ item.lesson_complete ? 'Marked Complete' : 'Not Completed' }}
            </MazCheckbox>
          </div>
        </MazCardSpotlight>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>