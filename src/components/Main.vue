<template>
  <main>
        <div class="container d-flex justify-content-center align-items-center">
         <div v-if="!movies.length && !series.length" class="h-100 d-flex align-items-center justify-content-center">
            <h1 class="text-uppercase text-white">cerca un film o una serie tv!</h1>
         </div>
         <div v-else>
                <h1 class="text-uppercase text-white text-center">Film</h1>
               <div class="row g-3">
                  <Card v-for="movie in movies" :key="movie.id" :item="movie" class="col-3 p-2"/>
               </div>
                <h1 class="text-uppercase text-white text-center">Serie tv</h1>
               <div class="row g-3">
                  <Card v-for="serie in series" :key="serie.id" :item="serie" class="col-3 p-2"/>
               </div>
            </div>
         </div>
  </main>
</template>

<script>
import Card from "../components/Cards.vue";
export default {
    components: {
      Card,
   },
    name : 'Main',
    props : ['movies' , 'series'],
    data() {
      return { 
      };
   },
}
</script>

<style lang="scss">
.container{
    min-height: calc(100vh - 80px);
}
main{
    background-color: #434343;
}

</style>

    