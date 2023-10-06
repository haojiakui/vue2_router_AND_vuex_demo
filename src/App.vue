<template>
  <div id="app">
    <div class="desb">
      <div>
        <div>1.组件级跳转时，缓存当前页数据</div>
        <div>2.组件跳转时，将所属的vuestore内的数据清空</div>
      </div>
    </div>

    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <KeepAlive>
      <router-view />
    </KeepAlive>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.desb{
  width: 100%;
}
</style>
