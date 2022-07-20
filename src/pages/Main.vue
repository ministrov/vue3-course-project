<template>
  <div>
    <h1>Добро пожаловать на курс по Vue 3</h1>
    <!-- <router-link to="/posts">Посты</router-link>
    <router-link to="/about">О сайте</router-link> -->
    <TextareaAutosize />
  </div>
</template>

<script>
import TextareaAutosize from '@/components/TextareaAutosize.vue';
export default { components: { TextareaAutosize } }
</script>

<style scoped>

</style>