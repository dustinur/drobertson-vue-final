<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="team in teams" xs2>
        {{ team.location }}
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
                { location: 'Atlanta', logo: '../assets/atlanta-logo.png', name: 'Hawks'  },
                { location: 'Boston', logo: '../assets/boston-logo.png', name: 'Celtics' },
                { location: 'Brooklyn', logo: '../assets/brooklyn-logo.png', name: 'Nets' },
                { location: 'Charlotte', logo: '../assets/charlotte-logo.png', name: 'Hornets' },
                { location: 'Chicago', logo: '../assets/chicago-logo.png', name: 'Bulls' },
                { location: 'Cleveland', logo: '../assets/cleveland-logo.png', name: 'Cavaliers' },
                { location: 'Dallas', logo: '../assets/dallas-logo.png', name: 'Mavericks' },
                { location: 'Denver', logo: '../assets/denver-logo.png', name: 'Nuggets' },
                { location: 'Detroit', logo: '../assets/detroit-logo.png', name: 'Pistons' },
                { location: 'Golden State', logo: '../assets/golden-state-logo.png', name: 'Warriors' },
                { location: 'Houston', logo: '../assets/houston-logo.png', name: 'Rockets' },
                { location: 'Indiana', logo: '../assets/indiana-logo.png', name: 'Pacers' },
                { location: 'Los Angeles', logo: '../assets/los-angeles-clippers-logo.png', name: 'Clippers' },
                { location: 'Los Angeles', logo: '../assets/los-angeles-lakers-logo.png', name: 'Lakers' },
                { location: 'Memphis', logo: '../assets/memphis-logo.png', name: 'Grizzlies' },
                { location: 'Miami', logo: '../assets/miami-logo.png', name: 'Heat' },
                { location: 'Milwaukee', logo: '../assets/milwaukee-logo.png', name: 'Bucks' },
                { location: 'Minnesota', logo: '../assets/minnesota-logo.png', name: 'Timberwolves' },
                { location: 'New Orleans', logo: '../assets/new-orleans-logo.png', name: 'Pelicans' },
                { location: 'New York', logo: '../assets/new-york-logo.png', name: 'Knicks' },
                { location: 'Oklahoma City', logo: '../assets/oklahoma-city-logo.png', name: 'Thunder' },
                { location: 'Orlando', logo: '../assets/orlando-logo.png', name: 'Magic' },
                { location: 'Philadelphia', logo: '../assets/philadelphia-logo.png', name: '76ers' },
                { location: 'Phoenix', logo: '../assets/phoenix-logo.png', name: 'Suns' },
                { location: 'Portland', logo: '../assets/portland-logo.png', name: 'Trail Blazers' },
                { location: 'Sacramento', logo: '../assets/sacramento-logo.png', name: 'Kings' },
                { location: 'San Antonio', logo: '../assets/san-antonio-logo.png', name: 'Spurs' },
                { location: 'Toronto', logo: '../assets/toronto-logo.png', name: 'Raptors' },
                { location: 'Utah', logo: '../assets/utah-logo.png', name: 'Jazz' },
                { location: 'Washington', logo: '../assets/washington-logo.png', name: 'Wizards' },
            ]
        }
    }
}
</script>

<style scoped>
    ul { color: blue; list-style: none; }   
</style>

