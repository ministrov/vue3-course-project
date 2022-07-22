<template>
  <div>
    <form class="form">
      <h2 class="form__title">Login Form</h2>

      <MyInput type="text" placeholder="Add name" />

      <MyInput type="password"/>

      <MyButton style="margin-top: 45px;">Submit</MyButton>
    </form>
  </div>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'

export default {
  components: {
    MyButton,
    MyInput
  }
}
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 25vh auto;
  padding: 35px;
  border: 2px solid teal;
  border-radius: 6px;
}
.form {
  display: flex;
  flex-direction: column;
}
</style>