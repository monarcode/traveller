<script lang="ts" setup>
import { cva } from 'class-variance-authority'

// component props
const props = defineProps<{
  label: string
  name: string
  isError?: boolean
  errorMessage?: string
  fullWidth?: boolean
  modelValue?: string
}>()

// component emits
const emit = defineEmits(['update:modelValue'])

const parentStyles = computed(() => {
  return cva(
    'relative px-3 border border-slate-250 rounded-lg transition-all isolate text-black',
    {
      variants: {
        fullWidth: {
          true: 'w-full min-w-full',
          false: 'w-[350px]',
        },
        isError: {
          true: 'border-red-500 [&:has(input:focus)]:border-red-500',
          false: 'border-slate-400 [&:has(input:focus)]:border-primary',
        },
      },
      defaultVariants: {
        fullWidth: false,
        isError: false,
      },
    }
  )({ fullWidth: props.fullWidth, isError: props.isError })
})

const handleChange = (e: any) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div :class="parentStyles">
    <input
      type="password"
      :name="props.name"
      :id="props.name"
      @input="handleChange"
      class="w-full pb-2 placeholder-transparent border-0 rounded-lg pt-6 px-0 peer focus:!ring-0 focus:!outline-0"
      placeholder="..."
    />
    <label
      :for="props.name"
      class="text-slate-400 absolute transition-all text-xs top-2 left-3 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-400 origin-[0px] z-20"
      >{{ props.label }}</label
    >
  </div>
</template>
