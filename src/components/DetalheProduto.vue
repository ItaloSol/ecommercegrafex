<template>
  <div class="max-w-6xl mx-auto p-4">
   <div class="border-t border-gray-300 pt-2">
      <button @click="toggleSection('comoComprar')" class="flex items-center text-blue-600">
        <i :class="{'fas fa-minus': sections.comoComprar, 'fas fa-plus': !sections.comoComprar}" class="mr-2"></i>
        <span class="font-semibold">Como comprar</span>
      </button>
      <div v-if="sections.comoComprar" class="pl-6">
        <div class="text-center mb-4">
          <h1 class="text-xl font-semibold">Como comprar Bloco de Notas</h1>
        </div>
        <div class="bg-blue-100 p-4 mb-4">
          <a href="#" class="text-blue-600 font-semibold">Fazer Bloco de Notas personalizado</a>
        </div>
        <div class="mb-4">
          <p>Criar e comprar Bloco de Anotações personalizado é muito simples e prático.</p>
          <p>Saiba como fazer Bloco de Notas seguindo estes passos:</p>
          <ol class="list-decimal list-inside">
            <li>Selecionar as características do Bloco de Notas – desde a quantidade ao extra que deseja.</li>
            <li>Depois, é necessário definir qual a opção de design mais conveniente para você:
              <ul class="list-disc list-inside ml-4">
                <li>Opção A – Enviar seu design – se já tiver uma arte final pronta basta fazer upload do arquivo no formato PDF X-1a;</li>
                <li>Opção B - Escolher um dos nossos designs – pode escolher o modelo de Bloco de Notas na nossa galeria de templates. Basta escolher um, e inserir os seus dados e imagens nos campos de preenchimento;</li>
                <li>Opção C – Design personalizado – os nossos designers elaboram uma arte final 100% personalizada para os seus produtos e, se desejar, pode ser exclusiva;</li>
                <li>Opção D - Réplica de design – se pretende optar por um design que não está em formato digital, basta enviar uma fotografia e as nossas designers replicam a arte final para que possa ser impressa.</li>
              </ul>
            </li>
            <li>Fazer login na sua conta cliente. Se ainda não possuir registro, pode fazê-lo no site da</li>
            <li>Finalizar a encomenda, indicando os dados de pagamento e o endereço de entrega.</li>
            <li>Efetuar o pagamento.</li>
          </ol>
          <p>Assim que concluir o processo de compra, o processo de produção é iniciado e irá receber o Bloco de Notas no prazo selecionado.</p>
        </div>
      </div>
   
    
      <div>
        <button @click="toggleSection('tamanho')" class="flex items-center text-blue-600 mb-2">
          <i :class="{'fas fa-minus': sections.tamanho, 'fas fa-plus': !sections.tamanho}" class="mr-2"></i>
          <span class="font-semibold">Tamanho</span>
        </button>
        <div v-if="sections.tamanho" class="pl-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div>
        <button @click="toggleSection('material')" class="flex items-center text-blue-600 mb-2">
          <i :class="{'fas fa-minus': sections.material, 'fas fa-plus': !sections.material}" class="mr-2"></i>
          <span class="font-semibold">Material</span>
        </button>
        <div v-if="sections.material" class="pl-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div>
        <button @click="toggleSection('impressao')" class="flex items-center text-blue-600 mb-2">
          <i :class="{'fas fa-minus': sections.impressao, 'fas fa-plus': !sections.impressao}" class="mr -2"></i>
          <span class="font-semibold">Impressão</span>
        </button>
        <div v-if="sections.impressao" class="pl-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div>
        <button @click="toggleSection('opcoes')" class="flex items-center text-blue-600 mb-2">
          <i :class="{'fas fa-minus': sections.opcoes, 'fas fa-plus': !sections.opcoes}" class="mr-2"></i>
          <span class="font-semibold">Opções</span>
        </button>
        <div v-if="sections.opcoes" class="pl-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: {
        comoComprar: true,
        tamanho: false,
        material: false,
        impressao: false,
        opcoes: false
      }
    }
  },
  methods: {
    toggleSection(section) {
      this.sections[section] = !this.sections[section];
    }
  }
}
</script>