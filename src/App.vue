<template>
  <div id="app">
    <TopNav></TopNav>
    <div class="main_view">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue"


export default {
  name: 'App',
  components: {
    TopNav,
  }
}
</script>

<style>
  body{
    margin: 0px;
  }
  .main_view{
    margin: 0px;
    margin-top: 56px;
    /*
    height: 2000px;
    background-color: rgba(255, 166, 166, 0.3);
    z-index: 0;
    */
  }
</style>
