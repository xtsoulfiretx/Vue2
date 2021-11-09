import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Races from './components/Races'
import Racedetails from './components/Racedetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: '/races',
      component: Races
    },
    {
      path: '/details/:id',
      name: 'details', 
      id:'races', 
      props: true,
      component: Racedetails
    },
  ]
})
