<template>
  <div :class="parentStyles">
    <select
      :name="props.name"
      :id="props.name"
      :label="props.label"
      class="w-full pb-2 placeholder-transparent border-0 rounded-lg pt-6 px-0 peer focus:!ring-0 focus:!outline-0"
      placeholder="..."
    >
      <option class="" v-for="(item, index) in data" :key="index" value="item">
        {{ item }}
      </option>
    </select>
    <label
      :for="props.name"
      class="text-slate-400 absolute transition-all text-xs top-2 left-3 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-400 origin-[0px] z-20"
      >{{ props.label }}</label
    >
  </div>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";

// component props
const props = defineProps<{
  label: string;
  name: string;
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  data?: string[];
}>();

const parentStyles = computed(() => {
  return cva(
    "relative px-3 border border-slate-300 rounded-lg transition-all isolate text-black",
    {
      variants: {
        fullWidth: {
          true: "w-full min-w-full",
          false: "w-[350px]",
        },
      },
      defaultVariants: {
        fullWidth: false,
      },
    }
  )({ fullWidth: props.fullWidth });
});
</script>
