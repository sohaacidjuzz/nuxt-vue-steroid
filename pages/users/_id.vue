<template>
    <h1>A Single User! with Id: {{ $route.params.id }}</h1>
</template>

<script>
export default {
     validate(data) {
        // return data.params.id == 1

        /** If I would like to check any valid number by id */
        return /^\d+$/.test(data.params.id);
    },
    layout: 'users'
}
</script>