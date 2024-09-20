<template>
<body>
  <div id="app" class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sou novo cliente</h2>
      <form>
        <div class="mb-4">
          <input type="text" placeholder="Nome completo" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <input type="email" placeholder="E-mail" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <input type="email" placeholder="Confirmar e-mail" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4 relative">
          <input type="password" placeholder="Senha" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <i class="fas fa-eye-slash absolute right-3 top-3 text-gray-500"></i>
        </div>
        <div class="mb-4 relative">
          <input type="password" placeholder="Confirmar senha" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <i class="fas fa-eye-slash absolute right-3 top-3 text-gray-500"></i>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox">
            <span class="ml-2">Quero receber ofertas exclusivas e novidades por e-mail</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox">
            <span class="ml-2">Concordo com os <a href="#" class="text-blue-500">Termos de Uso</a></span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox">
            <span class="ml-2">Concordo com a <a href="#" class="text-blue-500">Política de Privacidade</a></span>
          </label>
        </div>
        <div>
          <router-link to="/"><button type="submit" class="w-full bg-blue-100 text-blue-500 py-2 rounded-lg">Cadastrar</button></router-link>
        </div>
      </form>
    </div>
  </div>
</body>
</template>


  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f0f4f8;
    }
  </style>
