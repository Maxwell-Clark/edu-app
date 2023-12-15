<template>
  <nuxt-link
      :class="classList"
      class="no-underline hover:no-underline font-bold text-2xl flex justify-center items-end lg:text-4xl"
      to="/"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
<!--    <svg-->
<!--        class="h-8 fill-current inline"-->
<!--        xmlns="http://www.w3.org/2000/svg"-->
<!--        viewBox="0 0 512.005 512.005"-->
<!--    >-->
<!--      <rect-->
<!--          x="16.539"-->
<!--          y="425.626"-->
<!--          width="479.767"-->
<!--          height="50.502"-->
<!--          transform="matrix(1,0,0,1,0,0)"-->
<!--      />-->
<!--      <path-->
<!--          class="book-open"-->
<!--          d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "-->
<!--      /></svg>-->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 fill-current " viewBox="0 0 512.005 512.005">
      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
      <rect
          x="16.539"
          y="425.626"
          width="479.767"
          height="50.502"
          transform="matrix(1,0,0,1,0,0)"
      />
      <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
    </svg>

    <p class="pl-2">
      illuminara
    </p>

  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-gray-800'
      }
      return classList
    }
  }
}
</script>