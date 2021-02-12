<template>
    <div class="single-post-page">
        <section class="post">
        <h1>{{ loadedPost.title }}</h1>
        <div class="post-details">
            <div>Last Update On XXXX</div>
            <div>Written By Name {{ loadedPost.author }}</div>
        </div>
        <p>Content of the post!</p>
         <p>{{ loadedPost.previewText }}</p>
        </section>

        <section class="post-feedback">
        <p>Let me know about what you 🤔 Give me feedback through mail</p>
        </section>
    </div> 
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      loadedPost: []
    }
  },
 asyncData(context) {
   //console.log(context.params.id);
  // return axios.get('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts/' + context.params.id + '.json')
  // .then(res => {
  //   return {
  //     loadedPost: res.data
  //   }
  // }).catch(e => context.error(e))
  

},

mounted() {
  this.$store.dispatch('getPostById', { id: this.$route.params.id })
  .then(() => {
    this.loadedPost = this.$store.getters.getpost;
    console.log(this.loadedPost);
  })
}
  // created() {
  //   const postId = this.$route.params.id;
  //   this.loadedPost = this.$store.getters.getPostById(postId);
  //   console.log(this.loadedPost); 
  // }

}
</script>
<style scoped>
/** @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'); */
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>