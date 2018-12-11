<template>
    <div>
        <slot></slot>
        <v-divider class="mb-4"/>
        
        <v-btn color="info" @click="fetchData">Show Records</v-btn>
        <ul class="list-group">
            <li class="list-group-item" v-for="g in games">
              <h2>{{ g.location }} {{ g.name }}</h2>
              <h3>{{ g.wins }} - {{ g.losses }}</h3>
              </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
            return {
                game: {
                    city: ''
                    // name: ''
                },
                games: [],
                // resource: {},
                // node: 'data'
            };
        },
        methods: {
            submit() {
               this.$http.post('https://nba-stats-46f17.firebaseio.com/games.json', this.games)
                       .then(response => {
                           console.log(response);
                       }, error => {
                           console.log(error);
                       });
               this.resource.save({}, this.game);
                // this.resource.saveAlt(this.team);
            },
            fetchData() {
               this.$http.get('https://nba-stats-46f17.firebaseio.com/games.json')
                       .then(response => {
                           return response.json();
                       })
                       .then(data => {
                           const resultArray = [];
                           for (let key in data) {
                               resultArray.push(data[key]);
                           }
                           this.games = resultArray;
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

<style scoped>
  .info {
    background: lightblue;
  }
</style>
