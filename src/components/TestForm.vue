<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <ul>
        <li> 
          <input type="text" :placeholder="fieldNameName" v-model='this.$store.getters.getTestFormItems.name' v-validate="'min:3'"> 
        </li>
        <li> <input type="text" :placeholder="fieldNameName" v-model='testform.name' v-validate="'min:3'"> </li>
        <li> <input type="text" :placeholder="fieldNameMobile" v-model='testform.mobile' v-validate="'min:3'"> </li>
        <li> <input type="text" :placeholder="fieldNameEmail" v-model='testform.email' v-validate="'min:3'"> </li>
      </ul>
      <button type="button" v-on:click="submit">Submit</button>
    </form>

    <ul>
      <li>{{ this.$store.getters.getTestFormItems.name }}</li>
      <li>{{ this.$store.getters.getTestFormItems.mobile }}</li>
      <li>{{ this.$store.getters.getTestFormItems.name }}</li>
    </ul>


  </div>
</template>

<script>
  export default {
    props: [
      "fieldNameName",
      "fieldNameMobile",
      "fieldNameEmail"
    ],

    data () {
      return {
        msg: 'Test form',
        testform: {
          name: 'Duncan',
          mobile: '07764 615 516',
          email: 'duncanssmith@gmail.com'
        }
      }
    },

    methods: {
        submit () {
          console.log("Submitting form")
          this.$store.dispatch('processForm', {form: this.testform})
            // call action here and pass `this.testform`
        }
    }
  }

</script>