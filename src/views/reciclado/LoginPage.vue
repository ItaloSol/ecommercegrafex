<template>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Entrar na conta</title>
    </head>
<body class="h-screen flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
       
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700" for="CPF">CPF</label>
            <input 
              class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500" 
              id="CPF" 
              type="text" 
              placeholder="Digite seu CPF" 
              required 
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="senha">Senha</label>
            <input 
              class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500" 
              id="senha" 
              type="password" 
              placeholder="Digite sua senha" 
              required 
            />
            <div class="text-right mt-2">
              <a class="text-sm text-blue-600 hover:text-blue-800" href="#">Esqueceu sua senha?</a>
            </div>
          </div>
          <div class="text-center">
          <router-link to="/"> <button 
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300" 
              type="submit"
            >
              Entrar na conta
            </button></router-link> 
          </div>
          <div class="text-center border-t border-gray-300 pt-4">
            <p class="text-sm">Ainda não tem conta?</p>
            <a class="text-sm text-blue-600 hover:text-blue-800 font-bold" href="#">Criar uma conta</a>
          </div>
        </form>
      </div>
    </body>
  </html>
</template>
