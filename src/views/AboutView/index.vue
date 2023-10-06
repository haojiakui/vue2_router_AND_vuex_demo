<template>
  <div>
    <Page1 />
    <Page2 />
  </div>
</template>

<script>
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'

export default {
  // import引入的组件
  components: {
    Page1,
    Page2
  },
  data() {
    return {}
  },
  //  方法集合
  methods: {},
  created() {}
}
</script>
<style lang="less" scoped></style>
