<template>
  <div id="app">
    <Header @query-movie="setQueryMovies" @query-series="setQuerySeries"/>
    <Main :movies="movies" :series="series"/>

  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
   name: "App",
   components: {
      Header,
      Main,
   },
   data() {
    return{
      movies:[],
      series:[],
      api_key:"e4cc14ea008833d36afcac865db5b00b",
      query: "",
    }
  },
  methods:{
    searchMovie(){
      const config={
        params:{
          api_key: this.api_key,
          query: this.query,
          language: 'it-IT',
          baseUri: 'https://api.themoviedb.org/3/search',
        },
      }
      axios.get(`https://api.themoviedb.org/3/search/movie`, config).then((res)=>{
        this.movies=res.data.results;
        
      });
    },
    setQueryMovies(input) {
      if(!input){
        this.movies = [];
        return;
        }
        this.query = input;
         this.searchMovie()
    },
    searchSeries(){
      const config={
        params:{
          api_key: this.api_key,
          query: this.query,
          language: 'it-IT',
        },
      }
      axios.get(`https://api.themoviedb.org/3/search/tv`, config).then((res)=>{
        this.series=res.data.results;
        
      });
    },
    setQuerySeries(input) {
      if(!input){
        this.series = [];
        return;
        }
      this.query = input;
       this.searchSeries()
    },
  },
};
</script>

<style lang="scss">
@import 'bootstrap';

</style>
