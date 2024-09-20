<template>
  <!-- MENU GERAL -->
  <div>
  <div class="bg-blue-600 text-white p-4 flex flex-col lg:flex-row items-center justify-between">
   <router-link to="/"> <div class="flex items-center w-16">
      <img
        class="h-16"
        src="http://www.graficadoexercito.eb.mil.br/images/GrafexLogo.png"
        alt="Grafex Logo"
      />
    </div> </router-link>

    <ul class="pb-4 pl-4 font-semibold text-center items-center w-full">
      <li class="hover:text-gray-700 transition duration-300 cursor-pointer">
        <input
          class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          id="CPF"
          type="text"
          placeholder="O que você está procurando..."
          required
        />
      </li>
    </ul>

    <div class="p-4 flex lg:flex-row items-center">
      <div class="flex space-x-2 font-semibold">
        <p class="hover:text-blue-100 transition duration-300 cursor-pointer">Pesquisar</p>
        <p class="hover:text-blue-100 transition duration-300 cursor-pointer">Ajuda</p>
        <svg
          data-slot="icon"
          class="h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          ></path>
        </svg>
        <p class="hover:underline cursor-pointer">0</p>
      </div>
    </div>
  </div>
  <div id="menu" class="border-2 border-b-blue-300 flex justify-center">
    <ul
      @mouseleave="hideModal"
     class="flex space-x-4 p-3 font-semibold">
      <li
        v-for="item in menuItems"
        :key="item"
        @mouseover="showModal($event, item)"
      
        class="hover:text-blue-700 transition duration-300 cursor-pointer relative"
      >
        {{ item }}
        <Modal v-if="activeItem === item" />
      </li>
    </ul>
  </div>
  
  </div>
</template>


<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      menuItems: ['BANNERS', 'PASTA DE ALTERAÇÃO', 'CARTÃO', 'LIVRO'],
      activeItem: null,
    };
  },
  methods: {
    showModal(event, item) {
      this.activeItem = item;
    },
    hideModal() {
      this.activeItem = null;
    },
  },
};
</script>