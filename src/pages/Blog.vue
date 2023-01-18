<template>
  <h2>Blog</h2>

  <div class="wrapper">
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>
    <BlogItem/>

    <div class="users">
      <ul v-for="user in users" key="user.name" class="users__list">
        <li class="users__item">
        {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import BlogItem from '@/components/BlogItem.vue';

const users = [
  { name: 'Alex', age: 28 , job: 'developer' },
  { name: 'Billy', age: 48 , job: 'driver' },
  { name: 'John', age: 38 , job: 'pilot' },
  { name: 'Megan', age: 18 , job: 'student' },
  { name: 'Bob', age: 22 , job: 'policeofficer' }
];
</script>

<style>
h2 {
  font-size: 24px;
  color: teal;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
}
</style>