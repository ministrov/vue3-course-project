<template>
  <textarea>{{ props.modelValue }}</textarea>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  modelValue: String
});
</script>

<style scoped>
textarea {
  resize: none;
}
</style>