<template>
  <div class="wrapper">
    <HomeGreeting :msg="`Hello ${user.name}, which batman movie do you want to see?`"/>
    <MovieList :apiToken="user.apiToken" />
  </div>
</template>

<script>
import HomeGreeting from '@/components/HomeGreeting.vue';
import MovieList from '@/components/MovieList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    HomeGreeting,
    MovieList,
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
};
</script>
