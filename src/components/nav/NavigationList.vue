<template>
  <a-menu
    theme="dark"
    mode="horizontal"
  >
  <navigation-list-item></navigation-list-item>
  </a-menu>
</template>

<script>
import NavigationListItem from '@/components/nav/NavigationListItem';
export default {
  name: "NavigationList",
  components: {NavigationListItem},
}
</script>

<style scoped>
</style>
