<script setup>
const { data, error } = await useFetch(`/api/pikacjdkdshu`);

</script>

<template>
    <h1>Home page for Nuxt 3</h1>
    <div>
     <ul v-if="data">
        <li>
            <img :src="data.sprite" :alt="data.name" />
        </li>
        <li>
            <h2>{{ data.name }}</h2>
        </li>
     </ul>
     <div v-else>
        {{ error }}
     </div>
    </div>
</template>