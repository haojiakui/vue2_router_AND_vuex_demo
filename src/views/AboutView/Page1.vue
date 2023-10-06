<template>
<div>列表页{{ routePath }}</div>
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
    console.log('this.$route.path', this.$route.path.replace(`/`, ''))
    this.routePath = this.$route.path.replace(`/`, '')
  }
}
</script>
<style lang='less'  scoped>
</style>
