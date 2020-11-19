<template>
  <div class="greeting-wrapper">
    <img class="logo" alt="Batman logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeGreeting',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
  .logo {
    width: 500px;
  }
</style>
