<template>
  <div id="race_details">
    <div id="Back">
      <router-link to="/races" class="backbtn">Back</router-link>
    </div>
    <div id="Race_details_container">
      <div class="Race_details">
        <div class="detail_container"><h2>Race: {{ details.name }}</h2></div>
        <ul class="detail_container list_container"> <h3>Ability score increases: </h3>
          <li v-for="ability_bonuses in details.ability_bonuses" v-bind:key="ability_bonuses.index" class="list_items"><h3>{{ ability_bonuses.ability_score.name }} +{{ability_bonuses.bonus}}</h3></li>
        </ul>
        <div class="detail_container"><h3>Age: {{ details.age }}</h3></div>
        <div class="detail_container"><h3>Alignment: {{ details.alignment }}</h3></div>
        <div class="detail_container"><h3>Language: {{ details.language_desc }}</h3></div>
        <div class="detail_container"><h3>Size: {{ details.size }}</h3></div>
        <div class="detail_container"><h3>Size Description: {{ details.size_description }}</h3></div>
        <div class="detail_container"><h3>Speed: {{ details.speed }}</h3></div>
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
.list_container {
  list-style: none;
}
.list_items {
  padding: 0 5px;
}
</style>