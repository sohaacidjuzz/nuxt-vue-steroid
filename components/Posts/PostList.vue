<template>
        <section class="posts-list">
      <PostPreview 
      :is-admin="isAdmin" 
      id="1"
      title="Hello first"
      thumbNail="https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg"
      previewText="This is my first post!"
      />
      <PostPreview 
      :is-admin="isAdmin"
      id="2"
      title="Hello second"
      thumbNail="https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg"
      previewText="This is my second post!"
      />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
    components: {
        PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style scoped>

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>