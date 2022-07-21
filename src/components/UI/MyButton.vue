<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  font-family: 'Roboto', sans-serif;
  color: teal;
  border: none;
  background: transparent;
  border: 1px solid teal;
  border-radius: 6px;
}
</style>