<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1>
              <h2 class="pb-3">Teams</h2>
        </v-flex>  
        <v-flex v-for="team in teams" pa-3 xs4 sm2 md2>
            <v-img :src="team.logo" /> 
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            teams: [
                { location: 'Atlanta', logo: require('../../assets/teams/atlanta-logo.png'), name: 'Hawks'  },
                { location: 'Boston', logo: require('../../assets/teams/boston-logo.png'), name: 'Celtics' },
                { location: 'Brooklyn', logo: require('../../assets/teams/brooklyn-logo.png'), name: 'Nets' },
                { location: 'Charlotte', logo: require('../../assets/teams/charlotte-logo.png'), name: 'Hornets' },
                { location: 'Chicago', logo: require('../../assets/teams/chicago-logo.png'), name: 'Bulls' },
                { location: 'Cleveland', logo: require('../../assets/teams/cleveland-logo.png'), name: 'Cavaliers' },
                { location: 'Dallas', logo: require('../../assets/teams/dallas-logo.png'), name: 'Mavericks' },
                { location: 'Denver', logo: require('../../assets/teams/denver-logo.png'), name: 'Nuggets' },
                { location: 'Detroit', logo: require('../../assets/teams/detroit-logo.png'), name: 'Pistons' },
                { location: 'Golden State', logo: require('../../assets/teams/golden-state-logo.png'), name: 'Warriors' },
                { location: 'Houston', logo: require('../../assets/teams/houston-logo.png'), name: 'Rockets' },
                { location: 'Indiana', logo: require('../../assets/teams/indiana-logo.png'), name: 'Pacers' },
                { location: 'Los Angeles', logo: require('../../assets/teams/los-angeles-clippers-logo.png'), name: 'Clippers' },
                { location: 'Los Angeles', logo: require('../../assets/teams/los-angeles-lakers-logo.png'), name: 'Lakers' },
                { location: 'Memphis', logo: require('../../assets/teams/memphis-logo.png'), name: 'Grizzlies' },
                { location: 'Miami', logo: require('../../assets/teams/miami-logo.png'), name: 'Heat' },
                { location: 'Milwaukee', logo: require('../../assets/teams/milwaukee-logo.png'), name: 'Bucks' },
                { location: 'Minnesota', logo: require('../../assets/teams/minnesota-logo.png'), name: 'Timberwolves' },
                { location: 'New Orleans', logo: require('../../assets/teams/new-orleans-logo.png'), name: 'Pelicans' },
                { location: 'New York', logo: require('../../assets/teams/new-york-logo.png'), name: 'Knicks' },
                { location: 'Oklahoma City', logo: require('../../assets/teams/oklahoma-logo.png'), name: 'Thunder' },
                { location: 'Orlando', logo: require('../../assets/teams/orlando-logo.png'), name: 'Magic' },
                { location: 'Philadelphia', logo: require('../../assets/teams/philadelphia-logo.png'), name: '76ers' },
                { location: 'Phoenix', logo: require('../../assets/teams/phoenix-logo.png'), name: 'Suns' },
                { location: 'Portland', logo: require('../../assets/teams/portland-logo.png'), name: 'Trail Blazers' },
                { location: 'Sacramento', logo: require('../../assets/teams/sacramento-logo.png'), name: 'Kings' },
                { location: 'San Antonio', logo: require('../../assets/teams/san-antonio-logo.png'), name: 'Spurs' },
                { location: 'Toronto', logo: require('../../assets/teams/toronto-logo.png'), name: 'Raptors' },
                { location: 'Utah', logo: require('../../assets/teams/utah-logo.png'), name: 'Jazz' },
                { location: 'Washington', logo: require('../../assets/teams/washington-logo.png'), name: 'Wizards' },
            ]
        }
    }
}
</script>

<style scoped>
    ul { color: blue; list-style: none; }   
</style>

