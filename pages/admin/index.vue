<template>
    <div class="admin-page">
        <section class="new-post">
        <!-- Programatically route -->
        <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
        <section class="existing-posts">
        <PostList :posts="loadedPost" isAdmin />
        </section>
    </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import PostList from '~/components/Posts/PostList'
export default {
    layout: 'admin',
    middleware: ['auth','check-auth'],
    components: {
        PostList,
        AppButton
    },
    data() {
      return {
        loadedPost: [],
        isAdmin: true,
      }
    },
    mounted() {
      this.$store.dispatch('nuxtServerInit')
      .then(() => {
          this.loadedPost = this.$store.getters.loadedPosts;
          console.log(this.loadedPost);
            })
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>