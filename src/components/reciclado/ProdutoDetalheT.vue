<html>
 <head>
  <title>
   Product Page
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <script src="https://registry.npmmirror.com/vue/3.3.11/files/dist/vue.global.js">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
  <style>
   body {
      font-family: 'Inter', sans-serif;
    }
  </style>
 </head>
 <body class="bg-white">
  <div class="max-w-6xl mx-auto p-4" id="app">
   <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2">
     <img alt="Back view of a woman wearing a black t-shirt" class="w-full rounded-lg" src="https://placehold.co/600x800"/>
    </div>
    <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
     <h1 class="text-2xl font-semibold">
      Basic Tee
     </h1>
     <div class="flex items-center mt-2">
      <span class="text-yellow-500 text-lg">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500 text-lg">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500 text-lg">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500 text-lg">
       <i class="fas fa-star-half-alt">
       </i>
      </span>
      <span class="text-gray-400 text-lg">
       <i class="far fa-star">
       </i>
      </span>
      <span class="text-gray-600 ml-2">
       3.9
      </span>
      <a class="text-blue-500 ml-2" href="#">
       See all 512 reviews
      </a>
     </div>
     <div class="mt-4">
      <span class="text-2xl font-semibold">
       $35
      </span>
     </div>
     <div class="mt-4">
      <h2 class="text-lg font-medium">
       Color
      </h2>
      <div class="flex items-center mt-2">
       <div class="w-8 h-8 bg-black rounded-full border-2 border-gray-300 cursor-pointer">
       </div>
       <div class="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-300 cursor-pointer ml-2">
       </div>
      </div>
     </div>
     <div class="mt-4">
      <h2 class="text-lg font-medium">
       Size
      </h2>
      <div class="flex items-center mt-2 space-x-2">
       <button class="px-4 py-2 border rounded-md">
        XXS
       </button>
       <button class="px-4 py-2 border rounded-md">
        XS
       </button>
       <button class="px-4 py-2 border rounded-md bg-blue-500 text-white">
        S
       </button>
       <button class="px-4 py-2 border rounded-md">
        M
       </button>
       <button class="px-4 py-2 border rounded-md">
        L
       </button>
       <button class="px-4 py-2 border rounded-md" disabled="">
        XL
       </button>
      </div>
      <a class="text-blue-500 mt-2 block" href="#">
       See sizing chart
      </a>
     </div>
     <button class="mt-4 w-full bg-blue-600 text-white py-3 rounded-md">
      Add to cart
     </button>
     <div class="mt-8">
      <h2 class="text-lg font-medium">
       Description
      </h2>
      <p class="mt-2 text-gray-600">
       The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.
      </p>
      <p class="mt-2 text-gray-600">
       Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.
      </p>
     </div>
     <div class="mt-8">
      <h2 class="text-lg font-medium">
       Fabric &amp; Care
      </h2>
      <ul class="mt-2 text-gray-600 list-disc list-inside">
       <li>
        Only the best materials
       </li>
       <li>
        Ethically and locally made
       </li>
       <li>
        Pre-washed and pre-shrunk
       </li>
       <li>
        Machine wash cold with similar colors
       </li>
      </ul>
     </div>
     <div class="mt-8 flex space-x-4">
      <div class="flex-1 p-4 border rounded-md text-center">
       <i class="fas fa-globe text-2xl text-gray-600">
       </i>
       <h3 class="mt-2 font-medium">
        International delivery
       </h3>
       <p class="mt-1 text-gray-500">
        Get your order in 2 years
       </p>
      </div>
      <div class="flex-1 p-4 border rounded-md text-center">
       <i class="fas fa-gift text-2xl text-gray-600">
       </i>
       <h3 class="mt-2 font-medium">
        Loyalty rewards
       </h3>
       <p class="mt-1 text-gray-500">
        Don't look at other tees
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
  <script>
   const { createApp, ref } = Vue
    createApp({
      setup() {
        return {}
      }
    }).mount('#app')
  </script>
 </body>
</html>