<template>
  <div class="max-w-6xl mx-auto p-4" >
   <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2">
     <img alt="Two promotional cards on a wooden surface" class="w-full" src="https://placehold.co/600x800" />
    </div>
    <div class="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
     <h1 class="text-3xl font-bold text-blue-600 mb-2">
      Cartão de Visita
     </h1>
     <h2 class="text-lg font-semibold text-gray-600 mb-4">
      Cartão de Visita
     </h2>
     <p class="text-gray-600 mb-4">
      Opte por fazer seu Cartão de Visita Personalizada para causar impacto no seu cliente. Personalize Cartão de Visita Online à sua medida, e imprima de forma simples e rápida.
     </p>
     <div class="flex mb-4">
      <button class="bg-orange-500 text-white px-4 py-2 rounded-tl rounded-bl">
       Normal
      </button>
      <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-tr rounded-br">
       Personalizar
      </button>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-1">
       Tamanho
      </label>
      <select class="w-full border border-gray-300 p-2 rounded">
       <option>
        40 x 50 mm
       </option>
      </select>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-1">
       Material
      </label>
      <select class="w-full border border-gray-300 p-2 rounded">
       <option>
        Vinil adesivo Fosco
       </option>
      </select>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-1">
       Impressão
      </label>
      <input class="w-full border border-gray-300 p-2 rounded bg-gray-100" readonly="" type="text" value="Cores, Só Frente"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-1">
       Outros
      </label>
      <input class="w-full border border-gray-300 p-2 rounded bg-gray-100" readonly="" type="text" value="Corte Retangular"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-1">
       Quantidade
      </label>
      <input class="w-full border border-gray-300 p-2 rounded" type="number" value="500"/>
     </div>
     <div class="text-gray-600 mb-4">
      <span class="line-through">
       R$74,64
      </span>
      <span class="text-3xl text-orange-500 font-bold">
       R$52,18
      </span>
     </div>
     <router-link to="Carrinho"><button class="bg-orange-500 text-white w-full py-3 rounded">
      INICIAR COMPRA
     </button></router-link>
     <div class="flex items-center mt-4 text-gray-600">
      <i class="fas fa-money-bill-wave mr-2">
      </i>
      <p>
       preço baixo.
      </p>
     </div>
    </div>
   </div>
  </div>
</template>