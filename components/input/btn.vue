<template>
  <button :disabled="props.disabled" :class="styles">
    <spinner
      size="base"
      color="secodnary"
      v-if="props.loading"
      class="absolute"
    />

    <span class="transition-all" :class="[props.loading && 'invisible']">
      <slot />
    </span>

    <component v-if="!props.loading" :is="props.icon" class="h-6" />
  </button>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const props = defineProps<{
  type?: 'primary' | 'secondary'
  fullwidth?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: object | (() => void)
}>()

const styles = computed(() => {
  return cva('flex items-center gap-2 px-6 btn relative h-14 transition-all', {
    variants: {
      type: {
        primary: 'btn-primary text-white shadow-xl shadow-primary/40',
        secondary: 'btn-secondary text-primary hover:bg-secondary',
      },
      fullwidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      disabled: {
        true: '!text-gray-700 !bg-gray-300 !shadow-none',
      },
    },
    defaultVariants: {
      type: 'primary',
      disabled: false,
    },
  })({
    fullwidth: props.fullwidth,
    type: props.type,
    disabled: props.disabled,
  })
})
</script>
