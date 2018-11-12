<template>
  <v-app>
    <app-nav></app-nav>
  </v-app>

  <!-- <sign-up></sign-up> -->
</template>

<script>
  import Nav from './components/Nav.vue';
  import SignUp from './components/SignUp.vue';

  export default {
    components: {
      appNav:  Nav,
      signUp: SignUp 
    }
  }

</script>

<style>

</style>

