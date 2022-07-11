<template>
  <div>
    <button @click="addLike">Likes</button>
    <button @click="addDislike">Dislikes</button>
  </div>

  <div>Cout like: <strong>{{ likes }}</strong></div>
  <div>Cout dislikes: <strong>{{ dislikes }}</strong></div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5
    }
  },
  methods: {
    addLike() {
      this.likes++
    },
    addDislike() {
      this.dislikes++
    }
  }
}
</script>

<style>

</style>