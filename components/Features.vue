<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Title
      </h1>
      <div class="w-full mb-4">
        <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-right
          headline="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/travel-booking.svg?inline" alt slot="svg" />
      </feature-right>
      <feature-left
          headline="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>