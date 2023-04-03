<template>
  <!-- sign in modal -->
  <modal :opened="showModal" :close-modal="toggleModal" name="loginmodal">
    <sign-in />
  </modal>

  <!-- sign up modal -->
  <modal
    :opened="showRegModal"
    :close-modal="toggleRegModal"
    size="large"
    name="regmodal"
  >
    <sign-up @close="toggleRegModal" />
  </modal>

  <!-- manage bookings -->
  <modal
    :opened="showManageBookings"
    name="manage-bookings"
    :close-modal="() => (showManageBookings = !showManageBookings)"
  >
    <modals-manage-bookings />
  </modal>

  <nav
    class="sticky top-0 left-0 right-0 z-50 flex w-full h-24 bg-white shadow-lg shadow-black/5"
  >
    <div
      class="container flex items-center justify-between gap-4 my-auto h-fit"
    >
      <!-- logo -->
      <div>
        <p class="text-3xl">LOGO</p>
      </div>

      <div class="flex items-center gap-12">
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/about">FAQs</nuxt-link>
        <nuxt-link to="/about">Blog</nuxt-link>
        <nuxt-link to="/about">Terms & Condition</nuxt-link>
        <button @click="() => (showManageBookings = !showManageBookings)">
          Manage Booking
        </button>

        <div
          v-if="status === 'unauthenticated'"
          class="flex items-center gap-4"
        >
          <input-btn @click="toggleModal" type="secondary">Log in</input-btn>
          <input-btn @click="toggleRegModal" type="primary"
            >Create account</input-btn
          >
        </div>

        <user-bubble v-else-if="status === 'authenticated'" />
      </div>
    </div>
  </nav>
</template>

<script setup>
const router = useRouter()
const showModal = ref(false)
const showRegModal = ref(false)
const showManageBookings = ref(false)
const user = useUserData()
const { status, signOut } = useSession()

function toggleModal() {
  showModal.value = !showModal.value
}

function toggleRegModal() {
  showRegModal.value = !showRegModal.value
}
</script>
