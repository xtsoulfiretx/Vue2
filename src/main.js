// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//Axios 
import axios from 'axios'

Vue.prototype.$http = axios
//tell vue to use the router
Vue.use(VueRouter)
//define your routes

//import the hello component
import Hello from './components/HelloWorld'
//import the Races component
import Races from './components/Races'
import Racedetails from './components/Racedetails'
//import the Classes component
import Classes from './components/Classes'
import Classdetails from './components/Classdetails'
//import the Background component
import Background from './components/Background'
//import the Spells component
import Spells from './components/Spells'
//define your routes
const routes = [
//route for the home route of the web page
{ path: '/', component: Hello },
//route for the Races route of the web page
{ path: '/races', component: Races },
//route for the Classes route of the web page
{ path: '/classes', component: Classes },
//route for the Background route of the web page
{ path: '/background', component: Background },
//route for the Spells route of the web page
{ path: '/spells', component: Spells },
{
  path: '/racedetails/:id',
  name: 'details', 
  id:'races', 
  props: true,
  component: Racedetails
},
{
  path: '/classdetails/:id',
  name: 'roledetails', 
  id:'class', 
  props: true,
  component: Classdetails
}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app