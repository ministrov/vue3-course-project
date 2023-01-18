<template>
  <div class="blog-item">
    <h3 class="blog-item__title">Заголовок</h3>
    <p class="blog-item__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur debitis a soluta aut tempora sequi maxime minus repudiandae vel, impedit, illum nemo excepturi, ipsa animi recusandae! Id, repellendus amet?
    </p>
    <span class="blog-item__slogan">WWooozz</span>
    <button class="blog-item__button" @click="increment">
      <!-- {{ state.count }} -->
      {{ count }}
    </button>
  </div>

</template>

<script setup>
import { ref } from 'vue';
// import { reactive } from 'vue';

// const state = reactive({ count: 0 });
const count = ref(0);

function increment() {
  count.value++;
}

// function increment() {
//   state.count++;
// }
</script>

<style>
.blog-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 20px;
  border: 1px solid teal;
}

.blog-item__button {
  align-self: center;
  min-width: 350px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background-color: teal;
}
</style>