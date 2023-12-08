<template>
  <div>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :class="[
        'my-input',
        {
          'border': !borderless,
          'border-b': borderless,
          'rounded-full': shape === 'round',
          'rounded-md': shape === 'rounded',
          'px-2 py-1': size === 'small',
          'px-3 py-2': size === 'medium',
          'px-4 py-3': size === 'large',
        },
      ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text', // Input type, e.g., 'text', 'password', 'email'
    },
    placeholder: {
      type: String,
      default: 'Enter text', // Placeholder text
    },
    value: {
      type: String,
      default: '', // Initial input value
    },
    borderless: {
      type: Boolean,
      default: false, // Remove input border (useful for underlined text input)
    },
    shape: {
      type: String,
      default: 'rounded', // Options: 'rounded', 'round'
    },
    size: {
      type: String,
      default: 'medium', // Options: 'small', 'medium', 'large'
    },
  },
};
</script>

<style scoped>
.my-input {
  /* Customize your input's default styles here */
}
</style>