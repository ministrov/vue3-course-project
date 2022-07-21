<template>
  <div>
    <textarea ref="el"></textarea>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import autosize from 'autosize'

const el = ref();

onMounted(() => autosize(el.value));

console.log(el);

</script>

<style scoped>
div {
  margin-top: 25px;
}
textarea {
  display: block;
  width: 100%;
  font-size: small;
  border: none;
  outline: none;
  resize: none;
  border: 1px solid #8080803b;
  border-radius: 5px;
}
</style>