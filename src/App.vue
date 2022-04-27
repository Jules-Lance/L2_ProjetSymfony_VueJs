<script setup>
import { onMounted } from 'vue';
import { useDefaultStore } from './stores/index'

const store = useDefaultStore()

onMounted(() => {
  store.loadData()
})

</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>

body {
  text-align: center;
}

</style>
