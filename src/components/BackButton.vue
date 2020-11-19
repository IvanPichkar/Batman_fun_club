<template>
  <span class='back-button' @click='goBack'>Back</span>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
.back-button{
  cursor: pointer;
  margin: 10px 0;
  display: block;
  text-align: left;
  @media (min-width: $sm){
    margin: 15px 0;
  }

  &::before{
    content: '<';
    margin: 0 3px 0 0;
  }
}
</style>
