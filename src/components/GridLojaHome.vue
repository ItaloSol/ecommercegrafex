<template>
  <div>
    <Banner></Banner>
    <div class="p-8 body">
      <div class="container flex justify-between">
        <h1 class="text-3xl font-bold mb-6">Os mais vendidos</h1>
        <router-link to="Page"
          ><a class="text-blue-500 hover:cursor-pointer font-bold mb-6">
            Todos os produtos -->
          </a></router-link
        >
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(banner, index) in banners"
          :key="index"
          class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <div class="w-full mb-4 h-48 bg-gray-200 flex items-center justify-center">
            <img
              v-if="banner.image"
              class="w-full h-full object-cover rounded"
            />
            <span v-else class="text-gray-500">
              {{ banner.dimensions }}
            </span>
          </div>
          <h2 class="text-lg font-bold">
            {{ banner.title }}
          </h2>
          <p class="text-gray-500">a partir de</p>
          <p class="text-blue-600 font-bold">
            {{ banner.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dados dos banners
import { ref } from 'vue'

const banners = ref([
  {
    title: 'Flyer',
    price: 'R$ 68,21/50 un',
    dimensions: '200x200',
  },
  {
    title: 'Adesivo',
    price: 'R$ 26,09/100 un',
    dimensions: '200x200',
  },
  {
    title: 'Folder 2 Dobras',
    price: 'R$ 65,90/50 un',
    dimensions: '200x200',
  },
  {
    title: 'Livro Personalizado',
    price: 'R$ 235,07/10 un',
    dimensions: '200x200',
  },
  {
    title: 'Livro Personalizado',
    price: 'R$ 235,07/10 un',
    dimensions: '200x200',
  }
  // Adicione mais banners conforme necessário
])
import Banner from '../components/Banner.vue'
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
