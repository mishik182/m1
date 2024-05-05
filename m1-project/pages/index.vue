<script setup lang="ts">

  import nuxtStorage from 'nuxt-storage'

  const { chat } = useChatgpt()
  const data = ref('')
  const inputData = ref('')

  async function sendMessage() {

    const response = await chat(inputData.value)

    nuxtStorage.localStorage.setData('response', response)
    navigateTo('/answer')
  }

</script>

<template>

<div class="flex justify-center items-center h-screen">
  <div class="w-full max-w-2xl">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Text Area
        </label>
        <textarea v-model="inputData" class="shadow appearance-none border rounded h-32 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Input some text"></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button @click="sendMessage" v-text="'Send'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" />
      </div>
    </form>
  </div>
</div>

</template>

<style scoped>

</style>