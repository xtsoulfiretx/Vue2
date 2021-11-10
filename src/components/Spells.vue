<template>
  <div>
    <div id="Title">
      <h1>Spells</h1>
    </div>
    <h2>Total Spells: {{ spells.length }}</h2>
    <div class="Spells_list">
      <div class="Spells" v-for="spell, index in spells" v-bind:key="index">
        <h3 class="Spells-Name"><router-link :to="{name: 'spelldetails', params: { id: spell.id, url: spell.url }}" class="links">{{ spell.name }}</router-link></h3>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      spells: [
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
  axios.get("https://www.dnd5eapi.co/api/spells")
    .then(response => this.spells = response.data.results)
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
  color: #fff;
  margin-top: 20px;
}
.Spells_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}
.Spells {
  padding: 10px;
  font-size: 16px;
}
.Spells-Name {
  color: #fff;
}
.Spells:hover {
    text-decoration: underline;
    cursor: pointer;
  }
.detail_container {
  display: flex;
  border: 2px solid #000;
}
</style>