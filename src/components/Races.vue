<template>
  <div>
    <div id="Title">
      <h1>Races</h1>
    </div>
    <div id="Race_list_container">
      <div class="Race_list">Total Races: {{ races.count }}</div>
       <ul v-for="(races, index) in races" v-bind:key="index">
        <li>{{ races[1] }}</li>
    </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      races: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "https://www.dnd5eapi.co/api/races"
        );
        // JSON responses are automatically parsed.
        this.races = response.data;
        console.log(races);
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
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
  margin-top: 60px;
}
</style>