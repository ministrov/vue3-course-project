<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  padding: 10px 15px;
  font-family: 'Roboto', sans-serif;
  color: teal;
  border: none;
  background: transparent;
  border: 1px solid teal;
  border-radius: 6px;
}

select:focus {
  border: 1px solid blue
}
</style>