<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="team in teams" xs2>
        {{ team.name }}
        <!-- <v-img
          :src="require( team.logo )"
        ></v-img> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            teams: [
                { city: 'Atlanta', logo: '../assets/atlanta-logo.png', name: 'Hawks'  },
                { city: 'Boston', logo: '../assets/boston-logo.png', name: 'Celtics' },
                { city: 'Brooklyn', logo: '../assets/brooklyn-logo.png', name: 'Nets' },
                { city: 'Charlotte', logo: '../assets/charlotte-logo.png', name: 'Hornets' },
                { city: 'Chicago', logo: '../assets/chicago-logo.png', name: 'Bulls' },
                { city: 'Cleveland', logo: '../assets/cleveland-logo.png', name: 'Cavaliers' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' },
                { city: '', logo: '../assets/-logo.png', name: '' }
            ]
        }
    }
}
</script>

<style scoped>
    ul { color: blue; list-style: none; }   
</style>

