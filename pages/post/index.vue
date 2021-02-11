<template>
<div class="post-page">
<PostList :posts="loadedPost" />
</div>
</template>
<script>
import PostList from '@/components/Posts/PostList';

export default {
    components: {
        PostList
    },
      data() {
    return {
      loadedPost: [],
    }
  },
    //   fetch(context) {
    //     //   if(context.state.loadedPosts.length > 0) {
    //     //       return null;
    //     //   }
    // return new Promise((resolve, reject) => {
    //     resolve({
    //         loadedPost: [
    //         {
    //             id: "1",
    //             title: 'My First Post',
    //             author: 'Maximilan',
    //             previewText: 'Supar amazing! that is amazing of first post!',
    //             thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
    //             isAdmin: false
    //         },
    //         {
    //             id: "2",
    //             title: 'My Second Post',
    //             author: 'Schamralauzer',
    //             previewText: 'Supar amazing! that is amazing of second post!',
    //             thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
    //             isAdmin: false
    //         }
    //     ]

    //       })
    //       }).then(data => {
    //           //console.log(data);
    //           context.store.commit('setPosts', data.loadedPost);
    //       })
    //       .catch(e => {
    //           context.error(e)
    //       })

    //  },
        mounted() {
            this.$store.dispatch('setPosts')
            .then(() => {
                this.loadedPost = this.$store.getters.loadedPosts;
                console.log(this.loadedPost);
            })
        },
//         computed: {
//             loadedPosts() {
//                 return this.$store.getters.loadedPosts;
//             }
//   }

//   created() {
//       this.$store.dispatch('setPosts', loadedPost);
//   },


}
</script>
<style scoped>

.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>