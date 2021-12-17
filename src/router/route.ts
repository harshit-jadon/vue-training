import Home from '../views/Home.vue';
import MCQComponent from '../components/mcqcomponent/mcqComponent.vue';
import ProductCatalog from '@/components/productCatalog/productCatalog.vue';
import ViewProduct from '../components/productCatalog/viewProduct/viewProduct.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mcq',
      name: 'MCQ',
      component: MCQComponent
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children :[
        {
          name : 'About1',
          path : 'about1',
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About1Component.vue"),
        },
        {
          name : 'About2',
          path : 'about2',
          // component : About2Component,
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About2Component.vue"),
        },
      ]
    },
    {
      path: '/productCatalog',
      name: 'Product Catalog',
      component: ProductCatalog
    },
    {
      path: '/viewProducts',
      name: 'View Products',
      component: ViewProduct

    }
  ]

  export default routes;