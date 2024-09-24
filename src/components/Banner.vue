<template>
  <div class="main-banner">
      <h1>Vem com a GRAFex descomplicar seu</h1>
      <h2>2025</h2>
      <a href="#" class="cta-button">Planeje-se</a>
    </div>
</template>
<style scoped>
 .main-banner {    
    position: relative; /* Necessário para usar o ::before */
    background-color: #00aaff;
    background-image: url('http://www.graficadoexercito.eb.mil.br/images/e-commerce/faixa-7.png');
    background-size: cover; /* Redimensiona a imagem para cobrir o banner */
    background-position: center; /* Centraliza a imagem */
    color: #fff;
    text-align: center;
    padding: 2rem 0;
    height: 300px; /* Ajuste conforme necessário */
    overflow: hidden; /* Para garantir que o ::before não saia do container */
}

.main-banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.5); /* Camada azul com opacidade */
    z-index: 0,1; /* Coloca a camada acima da imagem */
}

.main-banner * {
    position: relative;
    z-index: 0,2; /* Garante que o texto e outros elementos estejam acima da camada */
}
    .main-banner h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
    .main-banner h2 {
      font-size: 4rem;
      font-weight: bold;
      color: #ffcc00;
    }
    .main-banner .cta-button {
      background-color: #007bff;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      margin-top: 1rem;
      display: inline-block;
    }
</style>