<script setup>
const router = useRouter();

onBeforeMount(() => {
  router.push("/home/dashboard");
});
</script>

<template>
  <div>
    <p>home - index</p>
  </div>
</template>
