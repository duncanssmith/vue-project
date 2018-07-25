<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="incrementCount">Increment</button>
    <button type="button" v-on:click="decrementCount">Decrement</button>
    <p>{{ this.$store.getters.getCount }}</p>
    <form @submit.prevent="addName">
      <input type="text" v-model="name"/>
      <p>{{ this.$store.getters.getName }}</p>
      <input type="text" v-model="lastName"/>
      <p>{{ this.$store.getters.getLastName }}</p>
    </form>

  </div>
</template>

<script>

export default {

  name: 'TestStore',

  props: {
    msg: String
  },

  components: {
  },

  data () {
    return {
      aliasFieldName: 'Alias',
      name: null,
      lastName: null
    }
  },

  created () {
  },

  methods: {
     incrementCount () {
        this.$store.dispatch('incrementCount')
     },
     decrementCount () {
        this.$store.dispatch('decrementCount')
     },
     addName () {
       console.log(this.name, this.lastName)
       this.$store.dispatch('addName', {name: this.name})
       this.$store.dispatch('addLastName', {name: this.lastName})
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}
</style>
