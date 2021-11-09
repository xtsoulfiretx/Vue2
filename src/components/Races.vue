<template>
  <div>
    <div id="Title">
      <h1>Races</h1>
    </div>
    <h2>Total Races: 9</h2>
    <div class="Race_list">
      <div class="Race" v-for="race, index in races" v-bind:key="index">
        <h3 class="Race-Name"><router-link :to="{name: 'details', params: { id: race.index, url: race.url }}" class="links">{{ race.name }}</router-link></h3>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      races: [
        {
          "index": "",
          "name": "",
          "url": ""
        }
      ]
    };
  },

  created() {
  // GET request using axios with error handling
  axios.get("https://www.dnd5eapi.co/api/races")
    .then(response => this.races = response.data.results)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  }
};
</script>
<!-- styling for the component -->
<style>
#Title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.Race_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
}
.Race {
  padding: 10px;
  font-size: 16px;
}
.Race:hover {
    text-decoration: underline;
    cursor: pointer;
  }
.detail_container {
  display: flex;
  border: 2px solid #000;
}
</style>