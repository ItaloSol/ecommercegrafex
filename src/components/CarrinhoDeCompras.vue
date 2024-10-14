<template>
  <div class="pb-40 py-20">
   <div class="max-w-4xl mx-auto flex flex-col lg:flex-row lg:space-x-8">
    <div class="flex-1">
     <h1 class="text-2xl font-bold mb-2">
      Seu carrinho
     </h1>
     <p class="text-gray-500 mb-6">
      1 Produto
     </p>
     <div class="flex flex-col sm:flex-row justify-between items-start mb-6">
      <div class="flex">
       <img alt="Flyer image" class="w-32 h-32 object-cover mr-4" height="150" src="https://storage.googleapis.com/a1aa/image/wQABSuGzl2K0OhcuyIDNSbNZyDmn97aTlkdXYlUWYMSxYr5E.jpg" width="150"/>
       <div>
        <h2 class="text-xl font-medium">
         Flyer
        </h2>
        <p class="text-gray-500">
         25 unid. / Econômica
        </p>
        <div class="flex items-center mt-2">
         <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded mr-2">
          A7 (7,4 × 10,5 cm)
         </span>
         <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded mr-2">
          Frente
         </span>
         <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded">
          +6
         </span>
        </div>
       </div>
      </div>
      <div class="flex flex-col items-end mt-4 sm:mt-0">
       <p class="text-xl font-medium">
        R$ 17,95
       </p>
       <p class="text-gray-500">
        R$ 0,72 unid.
       </p>
      </div>
      <button class="text-gray-500 hover:text-gray-700 ml-4 mt-4 sm:mt-0">
       <i class="fas fa-trash-alt">
       </i>
      </button>
     </div>
     <div class="bg-gray-100 p-4 rounded mb-6">
      <div class="flex items-center">
       <i class="fas fa-info-circle text-gray-500 mr-2">
       </i>
       <p class="text-gray-500">
        Os arquivos de impressão serão enviados após a realização do pedido ser concluída.
       </p>
      </div>
     </div>
    </div>
    <div class="flex-1 lg:max-w-sm">
     <div class="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-medium mb-4">
       Resumo
      </h2>
      <div class="flex justify-between mb-2">
       <span class="text-gray-500">
        Subtotal
       </span>
       <span class="text-gray-700">
        R$ 17,95
       </span>
      </div>
      <div class="flex justify-between mb-2">
       <span class="text-gray-500">
        Frete
       </span>
       <span class="text-gray-700">
        a calcular
       </span>
      </div>
      <div class="flex justify-between font-bold text-lg mb-6">
       <span>
        Total
       </span>
       <span>
        R$ 17,95
       </span>
      </div>
      <button class="w-full bg-black text-white py-3 rounded-lg mb-4">
       Finalizar pagamento
      </button>
      <button class="w-full text-gray-700 py-3 rounded-lg">
       Continuar comprando
      </button>
     </div>
    </div>
   </div>
  </div>
</template>