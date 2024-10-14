<template>
  <div>
    <header class="header flex items-center justify-between p-4">
      <div class="flex items-center space-x-4">
        <div class="contact-info flex items-center">
          <i class=" fas fa-phone-alt"></i> Contato (61) 3415-5815
        </div>
        <div class=" searchnav-links contact-info">
          <a href="#" class="text-blue-500">Venda para Organização Militar</a>
        </div>
      </div> 
     
      <div class="flex items-center">
         <div class="mr-5"><router-link to="/">
        <img class="w-12 h-1/6" src="http://www.graficadoexercito.eb.mil.br/images/GrafexLogo.png"></router-link>
      </div>
        <input type="text" class="search-bar" placeholder="Busque por um produto...">
        <button class="search-button ml-2">Buscar</button>
      </div>
      <div class="nav-links flex items-center">
        <a href="#">Ajuda</a>
        <router-link to="/Login">Minha conta</router-link>
        <router-link to="Carrinho"><i class="fas fa-shopping-cart"></i></router-link>
      </div>
    </header>
    <nav class="bg-gray-200 p-2">
      <div class="flex justify-center space-x-4 nav-links">
        <div class="dropdown">
          <a href="#" class="text-gray-700">Todos os produtos</a>
          <div class="dropdown-content">
            <a href="#">Produto 1</a>
            <a href="#">Produto 2</a>
            <a href="#">Produto 3</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" class="text-gray-700">Lançamentos</a>
          <div class="dropdown-content">
            <a href="#">Lançamento 1</a>
            <a href="#">Lançamento 2</a>
            <a href="#">Lançamento 3</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" class="text-gray-700">Cartão e Papelaria</a>
          <div class="dropdown-content">
            <a href="#">Cartão 1</a>
            <a href="#">Cartão 2</a>
            <a href="#">Cartão 3</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" class="text-gray-700">Adesivos e Rótulos</a>
          <div class="dropdown-content">
            <a href="#">Adesivo 1</a>
            <a href="#">Adesivo 2</a>
            <a href="#">Adesivo 3</a>
          </div>
        </div>
      </div>
    </nav>
   
    </div>
</template>
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
    .header {
      background-color: #fff;
      border-bottom: 1px solid #e5e7eb;
    }
    .header .search-bar {
      border: 1px solid #e5e7eb;
      padding: 0.5rem;
      border-radius: 0.25rem;
      width: 300px;
    }
    .header .search-button {
      background-color: #007bff;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }
    .header .nav-links a {
      color: #333;
      margin: 0 0.5rem;
    }
    .header .contact-info {
      font-size: 0.875rem;
      color: #333;
    }
    .header .contact-info i {
      margin-right: 0.25rem;
    }
  
    .nav-links a {
      position: relative;
      display: inline-block;
      padding: 0.5rem 1rem;
      transition: color 0.3s;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #007bff;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }
    .nav-links a:hover {
      color: #007bff;
    }
    .nav-links a:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
 