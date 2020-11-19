<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 365px;
    margin: 0 auto;
    @media (min-width: $xs){
      max-width: 540px;
    }
    @media (min-width: $sm){
      max-width: 720px;
    }
    @media (min-width: $md){
      max-width: 920px;
    }
    @media (min-width: $lg){
      max-width: 1140px;
    }
  }
</style>
