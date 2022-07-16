import axios from 'axios'
import { ref, onMounted } from 'vue'

export function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostsLoading = ref(true)
  const fetching = async () => {
    try {
      setTimeout(async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: 1,
            _limit: limit
          }
        });
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
        posts.value = response.data;
        isPostsLoading.value = false;
      }, 1800)
    } catch(e) {
      console.log(e)
    } finally {
    }
  }

  onMounted(fetching)

  return {
    posts,
    isPostsLoading,
    totalPages
  }
}