<script setup>
const route = useRoute();
const path = computed(() => route.path);
</script>

<template>
  <div class="flex flex-col">
    <div class="bg-primary h-[300px]"></div>
    <div
      v-auto-animate
      class="container relative -translate-y-[200px] bg-white rounded-3xl p-12 z-20 min-h-[600px] shadow-2xl shadow-black/10"
    >
      <h1 class="text-5xl">Welcome, Omolola</h1>

      <div class="tabs gap-8 min-w-full my-8 border-b">
        <nuxt-link
          to="/home/dashboard"
          class="tab tab-bordered text-black tab-md transition-all focus:outline-0 focus:ring-0"
          :class="
            path.includes('dashboard') ? 'border-primary' : 'border-transparent'
          "
          >Dashboard</nuxt-link
        >
        <nuxt-link
          to="/home/account"
          class="tab tab-bordered text-black tab-md transition-all focus:outline-0 focus:ring-0"
          :class="
            path.includes('account') ? 'border-primary' : 'border-transparent'
          "
          >Account</nuxt-link
        >
        <nuxt-link
          to="/home/notifications"
          class="tab tab-bordered text-black tab-md transition-all focus:outline-0 focus:ring-0"
          :class="
            path.includes('notifications')
              ? 'border-primary'
              : 'border-transparent'
          "
          >Notfications</nuxt-link
        >
      </div>

      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
