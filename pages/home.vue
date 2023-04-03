<template>
  <NuxtLayout name="home">
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
definePageMeta({
  middleware: 'auth',
})
</script>
