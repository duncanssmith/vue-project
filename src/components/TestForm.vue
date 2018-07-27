<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <ul>
        <!-- <li>  -->
          <!-- <input type="text" :placeholder="fieldNameName" v-model='this.$store.getters.getTestFormItems.name' v-validate="'min:3'">  -->
        <!-- </li> -->
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

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #ffd;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }

</style>