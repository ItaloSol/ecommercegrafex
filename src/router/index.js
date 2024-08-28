import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ComponenteView from '../views/ComponentesView.vue'
import GridPage from '../views/GridPage.vue'
import GridLoja from '../views/GridLoja.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/Componentes',
      name: 'Componentes',
      component: ComponenteView
    },
    {
      path: '/',
      name: 'Inicio',
      component: GridPage
    },
  
    {
      path: '/Loja',
      name: 'Loja',
      component: GridLoja
    }
   
  ]
})

export default router
