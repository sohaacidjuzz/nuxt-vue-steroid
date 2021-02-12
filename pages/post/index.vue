<template>
<div class="post-page">
<PostList :posts="loadedPost" />
</div>
</template>
<script>
import PostList from '~/components/Posts/PostList';

export default {
    components: {
        PostList
    },
      data() {
    return {
      loadedPost: [],
    }
  },
  mounted() {
      this.$store.dispatch('setPosts')
      .then(() => {
          this.loadedPost = this.$store.getters.loadedPosts;
          console.log(this.loadedPost);
            })
  },
//         
//   

}
</script>
<style scoped>

.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>