<template>
  <div class="movie-view">
    <back-button/>
    <div v-if="err.length" class="error">
      {{err}}
    </div>
    <movie-detalis v-else-if="Object.keys(movie).length" :movie="movie"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BackButton from '@/components/BackButton.vue';
import MovieDetalis from '@/components/MovieDetails.vue';
import MovieService from '@/services/MovieService';

export default Vue.extend({
  name: 'MovieView',
  components: {
    BackButton,
    MovieDetalis,
  },
  data() {
    return {
      movie: {},
      err: '',
    };
  },
  created() {
    this.setMovieDetails();
  },
  methods: {
    async setMovieDetails() {
      try {
        this.movie = await MovieService.movieService.getSpecificMovie(this.$route.params.movieId);
      } catch (err) {
        this.err = "Sorry, we can't find the movie :(";
      }
    },
  },
});
</script>

<style scoped lang="scss">
</style>
