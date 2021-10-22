<template>
  <div>
    <div id="Title">
      <h1>Races</h1>
    </div>
    <h2>Total Races: 9</h2>
    <ul class="Race_list">
      <li class="Race Dragonborn">Dragonborn</li>
      <li class="Race Dwarf">Dwarf</li>
      <li class="Race Elf">Elf</li>
      <li class="Race Gnome">Gnome</li>
      <li class="Race Half-Elf">Half-Elf</li>
      <li class="Race Half-Orc">Half-Orc</li>
      <li class="Race Halfling">Halfling</li>
      <li class="Race Human">Human</li>
      <li class="Race Halfling">Halfling</li>
    </ul>
    <div id="Race_details_container">
      <div class="Race_details">
        <div class="detail_container"><h2>Race Name: {{ races.name }}</h2></div>
        <div class="detail_container"><h3>Age: {{ races.age }}</h3></div>
        <div class="detail_container"><h3>Alignment: {{ races.alignment }}</h3></div>
        <div class="detail_container"><h3>Language: {{ races.language_desc }}</h3></div>
        <div class="detail_container"><h3>Size: {{ races.size }}</h3></div>
        <div class="detail_container"><h3>Size Description: {{ races.size_description }}</h3></div>
        <div class="detail_container"><h3>Speed: {{ races.speed }}</h3></div>
        <div class="detail_container example"><h3>Proficiencies: {{ races.starting_proficiencies[0].name }}</h3></div>
        <!-- <div class="example"><h1>{{ races.starting_proficiences_options.from[0].name }}</h1></div> -->
        <div class="detail_container example"><h3>Traits: {{ races.traits[0].name }}</h3></div>
        <div class="detail_container example"><h3>Subraces: {{ races.subraces[0].name }}</h3></div>
      </div>
      <div v-for="(races, index) in races" v-bind:key="index">
        <h3>{{ races }}</h3>
       </div>
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
        let response = await this.$http.get(
          "https://www.dnd5eapi.co/api/races/dwarf"
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