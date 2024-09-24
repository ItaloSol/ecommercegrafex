import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import CadastroLogin from '../views/CadastroLogin.vue'
import HomePage from '../views/HomePage.vue'
import LojaPage from '../views/LojaPage.vue'
// import ComponenteView from '../views/ComponentesView.vue'
// import GridPage from '../views/GridPage.vue'
// import GridLoja from '../views/GridLoja.vue'
// import GridTeste1 from '../views/Teste.vue'
// import GridTeste from '../views/Teste1.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/Cadastro',
      name: 'Cadastro',
      component: CadastroLogin
    },
    // {
    //   path: '/Componentes',
    //   name: 'Componentes',
    //   component: ComponenteView
    // },
    {
      path: '/',
      name: 'Inicio',
      component: HomePage
    },
    {
      path: '/Page',
      name: 'Page',
      component: LojaPage
    },
  
    // {
    //   path: '/Loja',
    //   name: 'Loja',
    //   component: GridLoja
    // },
    // {
    //   path: '/Teste',
    //   name: 'Teste',
    //   component: GridTeste1
    // },
    // {
    //   path: '/Teste1',
    //   name: 'Teste1',
    //   component: GridTeste
    // }
   
  ]
})

export default router
