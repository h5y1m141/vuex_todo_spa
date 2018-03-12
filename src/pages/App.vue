<template>
  <div id="app">
    <div class="page-App">
      <div class="page-App-header" role="header">
        <GlobalHeader />
      </div>
      <div class="page-App-main" role="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-App-main {
  margin: 0 auto;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.4;
  font-family: sans-serif;
}

[hidden] {
  display: none !important;
}

</style>
