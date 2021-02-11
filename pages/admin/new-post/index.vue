<template>
<div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm />
    </section>
</div>
</template>

<script>

import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
         editedPost: {
            author: '',
            title: '',
            thumbnailLink: '',
            content: ''                
         }   
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