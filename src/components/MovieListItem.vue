<template>
  <div v-if="!filterBy.length || filterBy === movie.Type" class="movie-wrapper">
    <router-link class = "movie-link" :to="`/movies/${movie.imdbID}`">
      <img class="movie-poster" :src="movie.Poster" alt="Movie poster"/>
      {{ movie.Title }}
      {{ movie.Type }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    filterBy: String,
    movie: {
      type: Object,
    } as PropOptions<Movie>,
  },
});
</script>

<style  lang="scss">
.movie{
  &-wrapper {
    flex-basis: 48%;
    margin: 1%;
    @media( min-width: $sm ) {
      flex-basis: 18%;
    }
  }
  &-link{
    color: $brand-black;
    text-decoration: none;
  }
  &-poster{
    width:100%;
  }
}
</style>
