<template>
    <div>
        <slot></slot>
        <v-divider class="mb-4"/>
        
        <v-btn color="info" @click="getRecords">Show Records</v-btn>
        <ul class="list-group">
            <li class="list-group-item mt-4" v-bg="'#f6f6f6'" v-for="g in games">
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
                },
                games: [],
            };
        },
        methods: {
            getRecords() {
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
            }
        },
        directives: {
            'bg': {
                bind(el, binding, vnode) {
                    el.style.backgroundColor = binding.value;
                }
            }
        }
  }

</script>

<style scoped>
  .info {
    background: lightblue;
  }

  li {
      box-shadow: 2px 2px 4px lightgrey;
  }

</style>
