<template>
  <div class="home-page">
    <section class="intro">
      <h1>First Vue/Nuxt App!</h1>
    </section>
    <PostList :posts="loadedPost" />

  <nuxt-link to="/users">Users</nuxt-link>
  </div>

</template>

<script>
import PostList from '~/components/Posts/PostList.vue'

export default {
components: { 
    PostList 
  },
computed: {

  },  
  asyncData(context, callback) {
        setTimeout(() => {
          callback(null, {
            loadedPost: [
        {
            id: "1",
            title: 'My First Post',
            author: 'Maximilan',
            previewText: 'Supar amazing! that is amazing of first post!',
            thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
            isAdmin: false
        },
        {
            id: "2",
            title: 'My Second Post',
            author: 'Schamralauzer',
            previewText: 'Supar amazing! that is amazing of second post!',
            thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
            isAdmin: false
        }
      ]

          })

      
    },1500)
  },
  data() {
    return {
      loadedPost: [],
    }
  },

  created() {

  }

  
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>