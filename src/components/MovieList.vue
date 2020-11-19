<template>
  <div class="movie-list">
    <div class="movie-list-header">
      <span class="result-number"> We have found {{numberOfResult}} movies about Batman! </span>
      <div class="filter"> Filter by:
        <input type="radio" value="" v-model="filterBy">
        <label for="one">All</label>
        <input type="radio" id="one" value="series" v-model="filterBy">
        <label for="one">Tv</label>
        <input type="radio" id="two" value="movie" v-model="filterBy">
        <label for="two">Movie</label>
      </div>
    </div>
    <MovieListItem
      v-for="movie in movies"
      :key="movie.imdbID"
      :filterBy="filterBy"
      :movie="movie"
      />
    <button @click="loadMovies()" v-if="isMoreMovies">Load more</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import MovieListItem from './MovieListItem.vue';
import { Movie } from '../services/types';

export default Vue.extend({
  name: 'MovieList',
  props: {
    apiToken: String,
  },
  data() {
    return {
      page: 1,
      numberOfResult: 0,
      movies: [] as Movie[],
      isMoreMovies: true,
      filterBy: '',
    };
  },
  async created() {
    await this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const { result, numberOfResult } = await MovieService.movieService.getMovieList(this.page);
      this.movies = [...this.movies, ...result];
      this.numberOfResult = numberOfResult;
      this.isMoreMovies = result.length === 10;
      this.page += 1;
    },
  },
  components: {
    MovieListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list {
  display: flex;
  flex-wrap: wrap;
  &-header{
    width:100%;
    .result-number{
      float:left;
    }
    .filter{
      float:right;
    }
  }
}
</style>
