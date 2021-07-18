<template>
<div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm @submit="onSubmitted"/>
    </section>
</div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    middleware: ['check-auth','auth'],
    data() {
        return {
            
        }
    },
    methods: {
        onSave() {
            //Save the form
            console.log(editedPost);
        },
        onCancel() {
            // Navigate Back
            this.$router.push('/admin');
        },
        onSubmitted(postData) {

            this.$store.dispatch('addPost', postData)
            .then(() => {
                this.$router.push('/admin');
            })
        }
    }
}
</script>

<style scoped>
.admin-new-post-page {
  padding: 20px;
}

.new-post-form {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>