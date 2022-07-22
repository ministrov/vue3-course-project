<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3 Crash Course</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
      <MyButton @click="$router.push('/about')" style="margin-left: 20px;">О сайте</MyButton>
      <MyButton @click="$router.push('/composition')" style="margin-left: 20px;">Composition Api</MyButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  font-family: 'Roboto', sans-serif;
  padding: 0 15px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
}
.navbar__btns {
  margin-left: auto;
}
</style>