<template>
  <PostCardConfigurator id="app"/>
</template>

<script>
import PostCardConfigurator from './components/PostCardConfigurator'
export default {
  name: 'app',
  components: {PostCardConfigurator},
}
</script>

<style lang="less">
body {
  margin: 0;
  background: #fdfdfd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
