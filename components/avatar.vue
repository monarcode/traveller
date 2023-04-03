<template>
  <div
    class="grid w-10 h-10 bg-black rounded-full group-hover:bg-white place-items-center"
  >
    <span class="text-base text-white group-hover:text-black">{{
      initials
    }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  firstName: string | null
  lastName: string | null
}>()

const initials = computed(() => {
  const f = props?.firstName?.charAt(0) ?? '-'
  const l = props?.lastName?.charAt(0) ?? '-'

  return `${f} ${l}`
})
</script>
