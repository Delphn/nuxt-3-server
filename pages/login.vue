<script setup>
const auth = useCookie('pokemon-auth')

const login = () => {
    auth.value = 'jdlifkdf'
}

const logout = () => {
    auth.value = null
}
</script>

<template>
    <div>
        <h1>Login page</h1>
        <button v-if="!auth" @click="login">Login</button>
        <button v-else @click="logout">Logout</button>
    </div>
</template>