import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AliasField from './components/AliasField.vue'
import TestForm from './components/TestForm.vue'

Vue.use(Router)
Vue.use(AliasField)
Vue.use(TestForm)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/alias',
      name: 'alias',
      component: AliasField
    },
    {
      path: '/testform',
      name: 'testform',
      component: TestForm
    }
  ]
})
