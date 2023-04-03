<template>
  <nav class="z-50 flex w-full h-24 text-white bg-primary">
    <div
      class="container flex items-center justify-between gap-4 my-auto h-fit"
    >
      <!-- bookings modal -->
      <modal
        :opened="bookingsModalOpened"
        :close-modal="toggleModal"
        name="manage-bookings"
      >
        <modals-manage-bookings />
      </modal>

      <!-- logo -->
      <div>
        <nuxt-link to="/" class="text-3xl">LOGO</nuxt-link>
      </div>

      <div class="flex items-center gap-12">
        <nuxt-link
          class="text-white transition-all hover:text-black/40"
          to="/about"
          >About</nuxt-link
        >
        <nuxt-link
          class="text-white transition-all hover:text-black/40"
          to="/about"
          >FAQs</nuxt-link
        >
        <nuxt-link
          class="text-white transition-all hover:text-black/40"
          to="/about"
          >Terms & Condition</nuxt-link
        >
        <button
          class="text-white transition-all hover:text-black/40"
          @click="toggleModal"
        >
          Manage Booking
        </button>

        <user-bubble />
      </div>
    </div>
  </nav>
</template>

<script setup>
const bookingsModalOpened = ref(false)

function toggleModal() {
  bookingsModalOpened.value = bookingsModalOpened.value === true ? false : true
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
