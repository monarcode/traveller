<template>
  <teleport to="body">
    <div
      class="modal filter backdrop-blur-sm"
      :class="[props.opened ? 'modal-open' : '']"
    >
      <div :class="modalStyles" style="background-color: white">
        <label
          :for="props.name"
          class="absolute btn btn-sm btn-circle right-2 top-2"
          @click="closeModal"
          >✕</label
        >
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";

const props = defineProps<{
  opened: boolean;
  closeModal: () => void;
  size?: "base" | "large";
  name: string;
}>();

const modalStyles = computed(() => {
  return cva("modal-box modal-bottom md:modal-middle relative p-0", {
    variants: {
      size: {
        base: "",
        large: "w-11/12 max-w-6xl",
      },
    },
    defaultVariants: {
      size: "base",
    },
  })({ size: props.size });
});
</script>

<style scoped></style>
