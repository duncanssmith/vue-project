<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="submitForm">Submit</button>
    <form>
      <ul>
        <li v-for="(input, index) in this.testform" :key='index'>
          <input type="text" :placeholder="fieldName" v-model='testform.name' v-validate="'min:3'" name="">
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
  export default {
    props: [
      "fieldName"
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
            // call action here and pass `this.testform`
        }
    }
  }

</script>