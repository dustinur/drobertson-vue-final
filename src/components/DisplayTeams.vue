<template>
  <div>
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
        props: ['games'],
        directives: {
        'bg': {
            bind(el, binding, vnode) {
                el.style.backgroundColor = binding.value;
            }
        }
    }
}
</script>

<style>
  li {
      box-shadow: 2px 2px 4px lightgrey;
  }
</style>
