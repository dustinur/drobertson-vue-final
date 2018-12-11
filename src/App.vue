<template>
  <v-app>

    <app-header></app-header>

    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <router-view>
              <h2 class="pb-3">NBA Scorecard</h2>
            </router-view>
          </v-flex>        
        </v-layout>

        <!-- <team-list></team-list> -->
        <!-- <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item" v-for="team in teams">
              {{ team.city }} - {{ team.name }}
              </li>
        </ul> -->
      </v-container>
    
    <app-footer></app-footer>
  
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import TeamList from './components/TeamList.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      appHeader:  Header,
      appHome: Home,
      teamList: TeamList,
      appFooter: Footer,
    },
    data() {
            return {
                team: {
                    city: '',
                    name: ''
                },
                teams: [],
                // resource: {},
                // node: 'data'
            };
        },
        methods: {
            submit() {
               this.$http.post('', this.team)
                       .then(response => {
                           console.log(response);
                       }, error => {
                           console.log(error);
                       });
               this.resource.save({}, this.team);
                // this.resource.saveAlt(this.team);
            },
            fetchData() {
               this.$http.get('')
                       .then(response => {
                           return response.json();
                       })
                       .then(data => {
                           const resultArray = [];
                           for (let key in data) {
                               resultArray.push(data[key]);
                           }
                           this.teams = resultArray;
                       });
                // this.resource.getData({node: this.node})
                //         .then(response => {
                //             return response.json();
                //         })
                //         .then(data => {
                //             const resultArray = [];
                //             for (let key in data) {
                //                 resultArray.push(data[key]);
                //             }
                //             this.teams = resultArray;
                //         });
            }
        },
        // created() {
        //     const customActions = {
        //         saveAlt: {method: 'POST', url: 'alternative.json'},
        //         getData: {method: 'GET'}
        //     };
        //     this.resource = this.$resource('{node}.json', {}, customActions);
        // }
  }

</script>

<style>

</style>

