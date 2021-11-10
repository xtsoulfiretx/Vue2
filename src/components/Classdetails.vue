<template>
  <div id="Directory">
    <div id="Back">
      <router-link to="/classes" class="backbtn">Back</router-link>
    </div>
    <div id="Race_details_container">
      <div class="Race_details">
        <div class="detail_container">
            <h2>Class: {{ roledetails.name }}</h2>
        </div>
        <div class="detail_container">
            <h2>Hit Dice: 1d{{ roledetails.hit_die }}</h2>
        </div>
        <ul class="detail_container list_container"> <h3>Saving Throws: </h3>
          <li v-for="saving_throws in roledetails.saving_throws" v-bind:key="saving_throws.index" class="list_items"><h3>{{ saving_throws.name }},</h3></li>
        </ul>
        <ul class="detail_container list_container"> <h3>Class Proficiencies: </h3>
          <li v-for="proficiencies in roledetails.proficiencies" v-bind:key="proficiencies.index" class="list_items"><h3>{{ proficiencies.name }},</h3></li>
        </ul>
        <ul class="detail_container list_container"> <h3>Starting Gear: </h3>
          <li v-for="starting_equipment in roledetails.starting_equipment" v-bind:key="starting_equipment.index" class="list_items"><h3>{{ starting_equipment.quantity }} {{ starting_equipment.equipment.name }},</h3></li>
        </ul>
        
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'roledetails',
  data () {
    return {
      roledetails: [
          {
            class_levels: "",
            hit_die: null,
            index: "",
            multi_classing: {
                prerequisites: [],
                proficiencies: [],
                proficiency_choices: [],
            },
            proficiencies: [],
            proficiency_choices: [],
            saving_throws: [],
            starting_equipment: [],
            starting_equipment_options: [],
            subclasses: []
          }
      ]
    }
  },
  created() {
  // GET request using axios with error handling
  axios.get("https://www.dnd5eapi.co" + this.$route.params.url)
    .then(response => this.roledetails = response.data)
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
</style>