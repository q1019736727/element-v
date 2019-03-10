<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        bus: new Vue()
      };
    },
    methods: {}
  }
</script>

<style>
  #app {

  }
</style>
