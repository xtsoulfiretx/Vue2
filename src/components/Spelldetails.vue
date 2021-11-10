<template>
  <div id="spell_details">
    <div id="Back">
      <router-link to="/spells" class="backbtn">Back</router-link>
    </div>
    <div id="Spell_details_container">
      <div class="Spell_details">
        <div class="detail_container"><h2>Race: {{ details.name }}</h2></div>
        <ul class="detail_container list_container"> <h3>Ability score increases: </h3>
          <li v-for="ability_bonuses in details.ability_bonuses" v-bind:key="ability_bonuses.index" class="list_items"><h3>{{ ability_bonuses.ability_score.name }} +{{ability_bonuses.bonus}}</h3></li>
        </ul>
        <div class="detail_container"><h3>Age: {{ details.age }}</h3></div>
        <div class="detail_container"><h3>Size: {{ details.size }}</h3></div>
        <div class="detail_container"><h3>Size Description: {{ details.size_description }}</h3></div>
        <div class="detail_container"><h3>Speed: {{ details.speed }}ft</h3></div>
        <div class="detail_container"><h3>Alignment: {{ details.alignment }}</h3></div>
        <div class="detail_container"><h3>Language: {{ details.language_desc }}</h3></div>
        <ul class="detail_container list_container"> <h3>Languages known: </h3>
          <li v-for="languages in details.languages" v-bind:key="languages.index" class="list_items"><h3>{{ languages.name }},</h3></li>
        </ul>
        <ul class="detail_container list_container"> <h3>Starting Proficiencies: </h3>
          <li v-for="starting_proficiencies in details.starting_proficiencies" v-bind:key="starting_proficiencies.index" class="list_items"><h3>{{ starting_proficiencies.name }},</h3></li>
        </ul>
        <ul class="detail_container list_container"> <h3>Trait: </h3>
          <li v-for="trait in details.traits" v-bind:key="trait.index" class="list_items"><h3>{{ trait.name }},</h3></li>
        </ul>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'spell_details',
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
.detail_container{
  background-color: #f2e5da;
  color: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  text-align: left;
  }
.list_container {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.list_items {
  padding: 0 5px;
}
</style>