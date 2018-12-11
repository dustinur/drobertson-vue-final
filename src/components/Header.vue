<template>
  <v-toolbar>
    <v-toolbar-side-icon>
        <v-img
          :src="require('../assets/nba-logo.png')"
        ></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-title>Scorecard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-btn flat><router-link to="/teams">Teams</router-link></v-btn>
      <v-btn flat><router-link to="/user">Sign-Up</router-link></v-btn> -->
      <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-btn flat><router-link to="/teams">Teams</router-link></v-btn>
      <v-btn flat><router-link to="/user">Sign-Up</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style>
li {
    list-style-type: none;
}
</style>
