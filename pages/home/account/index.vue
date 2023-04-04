<template>
  <div>
    <div class="flex flex-col space-y-4 md:w-1/2">
      <div class="flex gap-4">
        <input-text :label="'First name'" :name="'first-name'" />
        <input-text :label="'Last name'" :name="'last-name'" />
      </div>
      <input-text label="Email address" name="email" full-width />
      <input-text label="Phone number" name="phone" full-width />
    </div>

    <div class="mt-8">
      <div class="mb-4">
        <p class="text-lg font-medium">Change password</p>
        <p class="text-gray-400">
          Neque porro quisquam est qui <br />
          dolorem ipsum quia dolor sit amet,
        </p>
      </div>

      <div class="flex gap-4">
        <input-btn type="secondary">Change password</input-btn>
        <input-btn
          @click="doLogout"
          class="bg-red-500 border-0 !shadow-none hover:bg-red-600"
          >Sign out</input-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { signOut } = useSession()
const { $toast } = useNuxtApp()

function doLogout() {
  signOut({ callbackUrl: '/' })
  $toast.success('See ya later!')
}
</script>
