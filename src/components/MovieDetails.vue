<template>
  <div class="movie-wrapper">
    <img class="movie-poster" :src="movie.Poster" alt="Movie poster"/>
    <div class="movie-details">
      <div class="movie-details-header">
        <h2>{{movie.Title}} ({{movie.Year}})</h2>
      </div>
      <div class="movie-details-rating">
        <h4>IMDB Rating</h4> - {{movie.imdbRating}} / <h4>Users Vouts</h4> - {{movie.imdbVotes}}
      </div>
      <div class="movie-details-header">
        <h4>Plot: </h4>
        {{movie.Plot}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MovieDetails',
  props: {
    movie: Object,
  },
});
</script>

<style scoped lang="scss">
.movie-poster{
  width: 22%;
  margin: 0 3% 0 0;
}
.movie-details{
  display: inline-block;
  width: 75%;
  text-align: left;
  vertical-align: top;
  &-header{
    display: inline-block;
    h2{
      margin-top: 0;
    }
  }
  &-rating h4{
    display: inline-block;
  }
}
</style>
