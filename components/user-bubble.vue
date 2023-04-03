<template>
  <nuxt-link
    to="/home/dashboard"
    class="flex items-center gap-4 py-2 pl-2 pr-4 transition-all border rounded-full hover:bg-black hover:text-white hover:border-transparent group"
  >
    <avatar :first-name="user?.first_name" :last-name="user?.last_name" />
    <p>{{ user?.first_name ?? '..' }} {{ user?.last_name ?? '..' }}</p>
  </nuxt-link>
</template>

<script setup>
const user = useUserData()
</script>
