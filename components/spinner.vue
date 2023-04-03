<script setup>
import { cva } from 'class-variance-authority'

const props = defineProps({
  size: {
    type: String,
    validator: (s) => {
      return ['base', 'medium', 'large'].includes(s)
    },
  },
  color: {
    type: String,
    validator: (s) => {
      return ['primary', 'secodnary']
    },
    default: 'primary',
  },
})

const styles = computed(() =>
  cva('animate-spin', {
    variants: {
      size: {
        base: 'h-5 w-5',
        medium: 'h-7 w-7',
        large: 'h-9 w-9',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-white',
      },
    },
    defaultVariants: {
      size: 'base',
      color: 'secondary',
    },
  })({ size: props.size, color: props.color })
)
</script>

<template>
  <svg
    :class="styles"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
</template>
