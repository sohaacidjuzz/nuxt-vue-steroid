<template>
    <header class="header">
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">users</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
}
.nav-items {
    list-style:none;
    padding: 0;
    margin: 0;
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
}
.nav-items a {
    text-decoration: none;
    color: black;
}
.nav-items a:hover,
.nav-items:active {
    color: white;
}

.nav-items a.my-custom-exact-active-link {
color: #00c58e;
}
</style>