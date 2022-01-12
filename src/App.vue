<template>
  <a-layout>
    <a-layout-header>
      <navigation-list></navigation-list>
    </a-layout-header>
    <a-layout-content style="padding:20px; background-color:white">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
import NavigationList from '@/components/nav/NavigationList'
export default {
  name: 'App',
  components: {NavigationList}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
