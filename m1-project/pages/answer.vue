<script setup lang="ts">

  import nuxtStorage from 'nuxt-storage'

  const response = nuxtStorage.localStorage.getData('response')

  function goBack() {
    navigateTo('/')
  }

</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div style="width: 50%; word-wrap: break-word;">
      <p class="text-1xl font-bold text-center">
        <client-only>{{ response }}</client-only>
      </p>
    </div>
    <button @click="goBack" v-text="'Back'" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
  </div>
</template>

<style scoped>

</style>