<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Componentes</title>
</head>
   <MenuTopo></MenuTopo>
<body>
  <div class="bg-gray-300 p-8">
    <div class="container mx-auto px-4 py-8 space-y-8">
      <h6>Componente Input</h6>
      <div class="space-y-2">
        <input
          type="text"
          placeholder="Digite seu nome"
          class="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Digite seu nome"
          class="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="">
        <h6 class="p-2">Componente Ativo e inativo Badge</h6>
        <div
          class="inline-flex item-center text-sm bg-green-100 m-2 px-1.5 py-0.5 rounded-md font-medium text-green-800"
        >
          ATIVO
        </div>
        <div
          class="inline-flex item-center text-sm bg-red-100 m-2 px-1.5 py-0.5 rounded-md font-medium text-red-800"
        >
          INATIVO
        </div>
        <div
          class="inline-flex item-center text-sm bg-yellow-100 m-2 px-1.5 py-0.5 rounded-md font-medium text-yellow-800"
        >
          PROGRESSO
        </div>
      </div>
      <div>
        <h6 class="p-2">Componente Button</h6>
        <button class="bg-blue-500 hover:bg-blue-600 px-4 py-1 text-white rounded">Salvar</button>
      </div>
      <div>
        <h6 class="p-2">Componente Card</h6>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="w-full bg-gray-200 border-b p-4 border-gray-100">
            <h4 class="font-bold">Titulo do card</h4>
          </div>
          <div class="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis, consectetur, odio
            veritatis saepe alias corporis doloribus reiciendis ipsum nemo commodi exercitationem
            placeat maiores, in dolor nostrum. Et, numquam minus.
          </div>

          <div class="w-full bg-gray-100 p-4 border-t border-gray-200">Roda pe</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  
</template>
<script setup>
import MenuTopo from '../../components/MenuTopo.vue'

</script>