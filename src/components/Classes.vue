<template>
  <div>
    <div id="Title">
      <h1>Classes</h1>
    </div>
    <h2>Total Classes: 12</h2>
    <div class="Class_list">
      <div class="Class" v-for="role, index in classes" v-bind:key="index">
        <h3 class="Class-Name"><router-link :to="{name: 'roledetails', params: { id: role.id, url: role.url }}" class="links">{{ role.name }}</router-link></h3>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      classes: [
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
  axios.get("https://www.dnd5eapi.co/api/classes")
    .then(response => this.classes = response.data.results)
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
  color: #fff;
}
.Class_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
}
.Class {
  padding: 10px;
  font-size: 16px;
}
.Class:hover {
    text-decoration: underline;
    cursor: pointer;
  }
.detail_container {
  display: flex;
  border: 2px solid #000;
}
</style>