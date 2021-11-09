<template>
  <div id="Directory">
    <div id="Back">
      <router-link to="/classes" class="backbtn">Back</router-link>
    </div>
    <div id="Race_details_container">
      <div class="Race_details">
        <div class="detail_container">
            <h2>Race: {{ roledetails.name }}</h2>
        </div>
        <div class="detail_container">
            <h2>Hit Dice: 1d{{ roledetails.hit_die }}</h2>
        </div>
        <div class="detail_container">
            <div>
            <h2>{{ roledetails.proficiencies }}</h2>
            </div>
        </div>
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