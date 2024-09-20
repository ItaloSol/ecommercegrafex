<template>
 <!-- MENU TOPO -->
      <div class=" bg-blue-600 text-white col-span-3 text-sm pl-2 pr-4 py-2 pb-2 border-b border-b-blue-300">
        <div class="flex justify-between">
          <router-link to="/"><div>GRÁFICA DO EXÉRCITO</div></router-link>

          <ul class="flex items-center">
           <router-link to="Login"> <li class="pr-2"><p class="hover:underline cursor-pointer">ENTRAR NA CONTA</p></li></router-link>
            <li class="pr-2">
              <p class="hover:underline cursor-pointer">CRIAR CONTA</p>
            </li>
            <li class="w-7">
              <svg
                class="pr-2"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                ></path>
                <path
                  d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                ></path>
              </svg>
            </li>
            <li class="pr-2 hover:underline cursor-pointer">divcmcl@graficadoexercito.eb.mil.br</li>
            <li class="w-7">
              <svg
                class="pr-2"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                ></path>
              </svg>
            </li>
            <li class="hover:underline cursor-pointer">3415-5815</li>
          </ul>
        </div>
      </div>
      <!-- menu topo -->
</template>