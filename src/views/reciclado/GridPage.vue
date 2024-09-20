<template>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GRID PAGE</title>
    </head>
    <header>
     <MENUTOPO></MENUTOPO>
      <MENU></MENU>
    </header>
    <body id="body">
      <div class="mx-auto divide-y ">
        <BannerGrafica></BannerGrafica>
        <!-- CATALOGO PRODUTOS -->
        <div id="explora_produtos" class="bg-white p-12">
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-semibold">Produtos em Tendencia</div>
            <router-link to="Loja"><div class="text-lg font-semibold cursor-pointer hover:underline">
              Explorar mais produtos →
            </div> </router-link>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
            <div class="hover:shadow-lg transition duration-300 border rounded overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg"
                alt="Leather Long Wallet"
                class="w-full"
              />
              <ul class="p-4">
                <li class="font-semibold">Leather Long Wallet</li>
                <li class="text-gray-700">Natural</li>
                <li class="text-gray-700">$75</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- catalogo de produtos -->
        <!-- <div class="bg-gray-600 text-white py-44 pl-4 pr-4">5</div>
        <div class="bg-white py-44 pl-4 pr-4">6</div> -->
        <!-- RODA PE INFORMAÇÕES FINAIS -->
 
        <!-- roda pe informações finais -->
     
      </div>
    </body>
       <!-- RODA PE -->
          <RodaPe></RodaPe>
        
        <!-- roda pe -->
  </html>
</template>
<script setup>
import BannerGrafica from '../../components/BannerInicial.vue'
import MENUTOPO from '../../components/MenuTopo.vue'
import MENU from '../../components/MenuGeral.vue'
import RodaPe from '../../components/RodaPe.vue';
</script>