<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPosts"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
cmponents: {
    AdminPostForm
},  
data() {
    return {
        loadedPosts: {
            author: 'Maximilian',
            title: 'My awesome post',
            content: 'Supar amazing! that is amazing!',
            thumbnaillink: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg'
        }
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