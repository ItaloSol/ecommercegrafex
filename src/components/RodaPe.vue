<template>
 <!-- RODA PE INFORMAÇÕES FINAIS -->
  <footer>
    <div style="background: #00aaff;" class="text-white py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex grow flex-col lg:items-right md:text-right sm:items-center items-center">
          <ul>
            <li class="font-bold text-2xl mb-2">Localização</li>
            <li>Brasília - DF</li>
            <li>QGEx - Setor de Garagens - SMU</li>
            <li>CEP 70655-775</li>
            <li>RAMAL 3415-5815</li>
            <li>RITEx 860-4247</li>
            <li>divcmcl@graficadoexercito.eb.mil.br</li>
          </ul>
        </div>
        <div class="flex grow-0 flex-col items-center md:text-right">
          <img
            class=""
            src="http://www.graficadoexercito.eb.mil.br/images/GrafexLogo.png"
            alt="Grafex Logo"
          />
          <p class="text-center">
            © 2024 Gráfica do Exército, Todos os direitos reservados. <br />
            Desenvolvido por Sd Dantas.
          </p>
        </div>
        <div class="flex grow flex-col justify-center items-center md:items-start">
          <ul>
            <li class="font-bold text-2xl mb-2">Atendimento</li>
            <li>Horário de funcionamento:</li>
            <li>Segunda a Quinta 09h às 11h e 13h às 17h</li>
            <li>e Sexta de 8h às 12h</li>

            <li class="mt-2 font-bold text-2xl">Site da Internet</li>
            <li>www.grafex.eb.mil.br</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
  /* Garante que o body tenha 100% da altura da janela */
  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  /* Força o conteúdo principal a crescer e ocupar o espaço */
  .content-wrapper {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Rodapé fica sempre no final */
  footer {
    background-color: #00aaff;
    color: white;
    text-align: center;
    padding: 20px;
  }
</style>