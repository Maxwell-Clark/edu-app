<template>
<!--  <button-->
<!--      :class="[-->
<!--      'my-button',-->
<!--      {-->
<!--        'hover:underline': underlineOnHover,-->
<!--        'bg-white text-gray-800 font-bold': style === 'default',-->
<!--        'bg-blue-500 text-white font-semibold': style === 'primary',-->
<!--        'bg-red-500 text-white font-semibold': style === 'danger',-->
<!--        'rounded-full': shape === 'round',-->
<!--        'rounded-md': shape === 'rounded',-->
<!--        'py-2 px-4 text-sm': size === 'small',-->
<!--        'py-4 px-8': size === 'medium',-->
<!--        'py-6 px-12 text-lg': size === 'large',-->
<!--        'shadow-lg': hasShadow,-->
<!--      },-->
<!--    ]"-->
<!--      @click="$emit('click')"-->
<!--  >-->
<!--    <slot>Button</slot>-->
<!--  </button>-->
  <MazBtn :color="'primary'">
    <slot>
      Button
    </slot>
  </MazBtn>
</template>

<script>
export default {
  props: {
    style: {
      type: String,
      default: 'default', // Options: 'default', 'primary', 'danger'
    },
    shape: {
      type: String,
      default: 'rounded', // Options: 'rounded', 'round'
    },
    size: {
      type: String,
      default: 'medium', // Options: 'small', 'medium', 'large'
    },
    underlineOnHover: {
      type: Boolean,
      default: false,
    },
    hasShadow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.my-button {
  /* Customize your button's default styles here */
  cursor: pointer;
}
</style>