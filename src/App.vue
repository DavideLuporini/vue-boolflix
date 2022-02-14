<template>
  <div id="app">
    <Header @query-selected="setQuery"/>
    <Main :movies="movies"/>

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
        },
      }
      axios.get(`https://api.themoviedb.org/3/search/movie`, config).then((res)=>{
        this.movies=res.data.results;
        
      });
    },
    setQuery(input) {
      this.query = input;
    },
  },
   mounted() {
      this.searchMovie();
   },
};
</script>

<style lang="scss">
@import 'bootstrap';

</style>
