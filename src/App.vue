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

        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item" v-for="team in teams">
              {{ team.city }} - {{ team.name }}
                <!-- {{ team }} -->
              </li>
        </ul>
      <router-view></router-view>
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

