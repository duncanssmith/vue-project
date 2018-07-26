<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>Count: {{ this.$store.getters.getCount }}</p>
    <p>Name: {{ this.$store.getters.getName }}</p>
    <p>Aliases: </p>
    <ul>
      <li v-for="(data, index) in this.$store.getters.getAliases" :key='index'> {{ data.alias }}</li>
    </ul>
    <br/>
    <ul>
      <li>{{ this.$store.getters.getTestFormItems.name }}</li>
      <li>{{ this.$store.getters.getTestFormItems.mobile }}</li>
      <li>{{ this.$store.getters.getTestFormItems.name }}</li>
    </ul>
  </div>
</template>
