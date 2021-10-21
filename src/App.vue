<template>
  <div id="app">
  <!-- the router outlet, where all matched components would be viewed -->
  <router-link v-bind:to="'/'">Home</router-link>
  <router-link v-bind:to="'/Character'">Character Data</router-link>
  <router-link v-bind:to="'/Races'">Races</router-link>
  <router-link v-bind:to="'/Classes'">Classes</router-link>
  <router-link v-bind:to="'/Background'">Backgrounds</router-link>
  <router-link v-bind:to="'/Spells'">Spells</router-link>
  <router-link v-bind:to="'/about'">About</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 10px;
  margin-right: 10px;
}

  a {
      text-decoration: none;
    }

  a:hover {
      text-decoration: underline;
    }

    .router-link-exact-active {
      text-decoration: underline;
    }

</style>
