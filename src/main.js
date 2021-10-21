// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes

//import the hello component
import Hello from './components/HelloWorld'
//import the Character component
import Character from './components/Character'
//import the Races component
import Races from './components/Races'
//import the Classes component
import Classes from './components/Classes'
//import the Background component
import Background from './components/Background'
//import the Spells component
import Spells from './components/Spells'
//import the about component
import About from './components/About'
//define your routes
const routes = [
//route for the home route of the web page
{ path: '/', component: Hello },
//route for the Character route of the web page
{ path: '/character', component: Character },
//route for the Races route of the web page
{ path: '/races', component: Races },
//route for the Classes route of the web page
{ path: '/classes', component: Classes },
//route for the Background route of the web page
{ path: '/background', component: Background },
//route for the Spells route of the web page
{ path: '/spells', component: Spells },
//route for the about route of the web page
{ path: '/about', component: About }
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