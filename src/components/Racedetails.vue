<template>
  <div id="race_details">
    <div id="Back">
      <router-link to="/races" class="backbtn">Back</router-link>
    </div>
    <div id="Race_container">
      <div id="Race_image_container">
        <div v-if='details.url == "/api/races/dragonborn"' class="Race_image Dragonborn"><img src="@/assets/Dragonborn.png"></div>
        <div v-if="details.url == '/api/races/dwarf'" class="Race_image Dwarf"><img src="@/assets/Dwarf.png"></div>
        <div v-if="details.url == '/api/races/elf'" class="Race_image Elf"><img src="@/assets/Elf.png"></div>
        <div v-if="details.url == '/api/races/gnome'" class="Race_image Gnome"><img src="@/assets/Gnome.png"></div>
        <div v-if="details.url == '/api/races/half-elf'" class="Race_image Half-Elf"><img src="@/assets/Half-Elf.png"></div>
        <div v-if="details.url == '/api/races/half-orc'" class="Race_image Half-Orc"><img src="@/assets/Half-Orc.png"></div>
        <div v-if="details.url == '/api/races/halfling'" class="Race_image Halfling"><img src="@/assets/Halfling.png"></div>
        <div v-if="details.url == '/api/races/human'" class="Race_image Human"><img src="@/assets/Human.png"></div>
        <div v-if="details.url == '/api/races/tiefling'" class="Race_image Tiefling"><img src="@/assets/Tiefling.png"></div>
      </div>
      <div id="Race_details_container">
        <div class="Race_details">
          <div class="detail_container race_name"><h2>Race: {{ details.name }}</h2></div>
          <ul class="detail_container list_container race_asi"> <h3>Ability score increases: </h3>
            <li v-for="ability_bonuses in details.ability_bonuses" v-bind:key="ability_bonuses.index" class="list_items"><h3>{{ ability_bonuses.ability_score.name }} +{{ability_bonuses.bonus}}</h3></li>
          </ul>
          <div class="detail_container race_size"><h3>Size: {{ details.size }}</h3></div>
          <div class="detail_container race_speed"><h3>Speed: {{ details.speed }}ft</h3></div>
          <div class="detail_container race_age"><h3>Age: {{ details.age }}</h3></div>
          <div class="detail_container race_size_desc"><h3>Size Description: {{ details.size_description }}</h3></div>
          <div class="detail_container race_alignment"><h3>Alignment: {{ details.alignment }}</h3></div>
          <div class="detail_container race_language"><h3>Language: {{ details.language_desc }}</h3></div>
          <ul class="detail_container list_container race_languages"> <h3>Languages known: </h3>
            <li v-for="languages in details.languages" v-bind:key="languages.index" class="list_items"><h3>{{ languages.name }},</h3></li>
          </ul>
          <ul v-if="details.starting_proficiencies.length > 0" class="detail_container list_container race_proficiencies"> <h3>Starting Proficiencies: </h3>
            <li v-for="starting_proficiencies in details.starting_proficiencies" v-bind:key="starting_proficiencies.index" class="list_items race_prof"><h3>{{ starting_proficiencies.name }},</h3></li>
          </ul>
          <ul v-if="details.traits.length > 0" class="detail_container list_container race_traits"> <h3>Trait: </h3>
            <li v-for="trait in details.traits" v-bind:key="trait.index" class="list_items"><h3>{{ trait.name }},</h3></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'race_details',
  data () {
    return {
      details: {
          age: "",
          ability_bonuses: {
            0: {
              ability_score: {
                index: "",
                name: "",
                url: "",
              },
              bonus: 0
            }
          },
          alignment: "",
          index: "",
          language_dec: "",
          languages: [],
          name: "",
          size: "",
          size_description: "",
          speed: 0,
          starting_proficiencies: [],
          subraces: [],
          traits:
            {
              0: {
              index: "",
              name: "",
              url: ""
              }
            },
          url: "",
      }
    }
  },
  created() {
  // GET request using axios with error handling
  axios.get("https://www.dnd5eapi.co" + this.$route.params.url)
    .then(response => this.details = response.data)
    .strip_tags(details.body)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  },
}
</script>
<!-- styling for the component -->
<style>
#Race_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f2e5da;
  border: 1px solid #000;
}
.detail_container{
  background-color: #f2e5da;
  color: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  text-align: left;
  padding: 0 5px;
  flex-grow: 1;
  }
.list_container {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0;
}
.list_items {
  padding: 0 5px;
}
#Race_image_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  order: 2;
}
.Race_image {
 height: 100%;
  width: 100%;
  border: 1px solid #000;
}
#Race_details_container {
  Width: 50%;
}
.Race_details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>