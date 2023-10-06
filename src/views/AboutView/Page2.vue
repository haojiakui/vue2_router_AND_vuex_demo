<template>
<div>详情页{{ routePath }}</div>
</template>

<script>
export default {
  // import引入的组件
  components: {},
  data() {
    return {routePath:``}
  },
  //  方法集合
  methods: {},
  created() {
    this.routePath = this.$route.path.replace(`/`, '')
  }
}
</script>
<style lang='less'  scoped>
</style>
