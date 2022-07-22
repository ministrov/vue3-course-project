<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  font-family: 'Roboto', sans-serif;
  border: none;
  outline: none;
  border: 1px solid teal;
  border-radius: 6px;
}
.input:hover,
.input:focus {
  border-color: aqua;
}
</style>