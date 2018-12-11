<template>
  <v-app>

    <app-header></app-header>

    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <router-view name="teamDetails"></router-view>
            <transition name="fade">
              <router-view>
                <h2 class="pb-3">NBA Scorecard</h2>
              </router-view>
            </transition>
            <router-view name="signUp"></router-view>
          </v-flex>        
        </v-layout>

      </v-container>
    
    <app-footer></app-footer>
  
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import Footer from './components/Footer.vue';
  import DisplayTeams from './components/DisplayTeams.vue';

  export default {
    components: {
      appHeader:  Header,
      appHome: Home,
      appFooter: Footer,
      appDisplayTeams:  DisplayTeams,
    }
  }

</script>

<style>

</style>

