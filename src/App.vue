<template>
  <div id="app">
  <!-- the router outlet, where all matched components would be viewed -->
  <div class="hello">
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/Races'">Races</router-link>
      <router-link v-bind:to="'/Classes'">Classes</router-link>
      <router-link v-bind:to="'/Spells'">Spells</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the Dungeons and Dragons character app'
    }
  }
}
</script>
<!-- styling for the component -->
<style>
body{
  background-color: #161617;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  margin-left: 10px;
  margin-right: 10px;
}
  a {
      text-decoration: none;
      color: #fff;
    }

  a:hover {
      text-decoration: underline;
    }

    .router-link-exact-active {
      text-decoration: underline;
    }

</style>
