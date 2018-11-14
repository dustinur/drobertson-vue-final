<template>
  <v-app>

    <app-nav></app-nav>

    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <app-home>
              <h2 class="pb-3">Select Your Team</h2>
            </app-home>
          </v-flex>        
        </v-layout>

        <team-list></team-list>

      </v-container>
    
    <app-footer></app-footer>
  
  </v-app>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Home from './components/Home.vue';
  import TeamList from './components/TeamList.vue';
  import Footer from './components/Footer.vue';
  import SignUp from './components/SignUp.vue';

  export default {
    components: {
      appNav:  Nav,
      appHome: Home,
      teamList: TeamList,
      appFooter: Footer,
      signUp: SignUp 
    }
  }

</script>

<style>

</style>

