<template>
  <v-toolbar>
    <v-toolbar-side-icon>
        <!-- <img src="../assets/nba-logo.png" alt="NBA Logo"> -->
        <!-- <v-img :src="../assets/nba-logo.png"></v-img> -->
        <v-img
          :src="require('../assets/nba-logo.png')"
        ></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-title>Scorecard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Teams</v-btn>
      <v-btn flat>Sign-Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
