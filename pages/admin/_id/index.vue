<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
components: {
    AdminPostForm
},  
data() {
        return {
        loadedPost: []
        }
    },
     asyncData(context) {
         console.log(context.params.id);
    return axios.get('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
            
            return {
                loadedPost: res.data
            }
        }).catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {
           this.$store.dispatch('editPost', editedPost)
           .then(() => {
               this.$router.push("/admin");
           })
        }
    }  
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>