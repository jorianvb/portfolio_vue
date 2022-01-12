<template>
    <a-menu-item v-for="item in items"
              :key="item.text"
              type="link">
      <router-link :to="item.router">{{item.text}}</router-link>
    </a-menu-item>
</template>

<script>
export default {
  name: "NavigationListItem",
  data() {
    return {
      items: [
        {text: 'A propos', router: "/"},
        {text: 'Expérience', router: "/experience"},
        {text: 'Contact', router: "/contact"},]
    }
  }
}
</script>

<style scoped>
  div{
    float: right;
  }
</style>
