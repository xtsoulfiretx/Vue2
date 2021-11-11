<template>
  <div id="spell_details">
    <div id="Back">
      <router-link to="/spells" class="backbtn">Back</router-link>
    </div>
    <div id="Spell_details_container">
      <div class="Spell_details">
        <div class="detail_container"><h2>Spell: {{ details.name }}</h2></div>
        <div v-if="details.level == 0" class="detail_container"><h2>Spell Level: Cantrip</h2></div>
        <div v-if="details.level != 0" class="detail_container"><h2>Spell Level: {{ details.level }}</h2></div>
        <div v-if="details.attack_type" class="detail_container"><h3>Attack Type: {{ details.attack_type }}</h3></div>
        <div class="detail_container"><h3>Casting Time: {{ details.casting_time }}</h3></div>
        <div class="detail_container"><h3>Range: {{ details.range }}</h3></div>
        <div v-if="details.dc" class="detail_container"><h3>Saving Throw: {{ details.dc.dc_type.name }}</h3></div>
        <ul class="detail_container list_container"> <h3>Spell Components: </h3>
          <li v-for="components in details.components" v-bind:key="components.index" class="list_items"><h3>{{ components }}</h3></li>
        </ul>
        <div v-if="details.material" class="detail_container"><h3>Material Cost: {{ details.material }}</h3></div>
        <div class="detail_container"><h3>School of magic: {{ details.school.name }}</h3></div>
        <div v-if="details.concentration" class="detail_container"><h3>Duration: Concentration, {{ details.duration }}</h3></div>
        <div v-if="!details.concentration" class="detail_container"><h3>Duration: {{ details.duration }}</h3></div>
        <div v-if="details.desc.length == 1" class="detail_container"><h3>Description: {{ details.desc[0] }}</h3></div>
        <ul v-if="details.desc.length > 1" class="detail_container spell_list_container description_container"> <h3>Description: </h3>
          <li v-for="(value, key, index) in details.desc" :key="`${ key }-${ index }`" class="spell_list_items"><h3 class="spell_description"> {{ value }} </h3></li>
        </ul>
        <div v-if="details.higher_level" class="detail_container"><h3>Casting at higher levels: {{ details.higher_level[0] }}</h3></div>
        <div v-if="details.damage" class="detail_container"><h3>Damage Type: {{details.damage.damage_type.name}} Damage</h3></div>
        <ul v-if="details.damage && details.damage.damage_at_character_level" class="detail_container list_container"> <h3>Damage at spell slot level: </h3>
          <li v-for="(value, key, index) in details.damage.damage_at_character_level" :key="`${ key }-${ index }`" class="list_items"><h3>level {{ key }}: {{ value }}, </h3></li>
        </ul>
        <ul v-if="details.damage && details.damage.damage_at_slot_level" class="detail_container list_container"> <h3>Damage at spell slot level: </h3>
          <li v-for="(value, key, index) in details.damage.damage_at_slot_level" :key="`${ key }-${ index }`" class="list_items"><h3>level {{ key }}: {{ value }}, </h3></li>
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
.spell_list_container {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.spell_list_items {
  padding: 0;
}
.spell_description {
  padding: 0;
  margin: 1px;
}
.description_container {
  padding-bottom: 10px;
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