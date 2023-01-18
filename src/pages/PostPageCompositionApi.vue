<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
      v-focus
      v-model="searchQuery"
      placeholder="Поиск...."
    />
    <div class="app__btns">
      <MyButton
        @click="showDialog"
      >
        Создать пост
      </MyButton>

      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
       />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка....</div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
      {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyInput from '@/components/UI/MyInput.vue'
import {usePosts} from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyInput
},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup(props) {
    const { posts, isPostsLoading, totalPages } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      isPostsLoading,
      isPostsLoading,
      totalPages,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid teal;
}
.current-page {
  border: 2px solid black;
}
</style>