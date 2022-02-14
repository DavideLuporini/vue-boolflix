<template>
  <main>
      <div class="container d-flex justify-content-center align-items-center">
          <div class="row">
            <div v-if="!movies.length" class="h1 text-uppercase">Seleziona un film che desideri vedere</div>
            <ul v-else>
                <li v-for="(movie, index) in movies" :key="movie.id || index">
                <span class="h5 text-uppercase bold">Titolo:</span> {{ movie.title }}, <span class="h5 text-uppercase bold"> originale:</span> {{ movie.original_title }} <span class="h5 text-uppercase bold">Lingua:</span> {{ movie.original_language }}
                <img class="mx-2"
                  v-if="movie.original_language === 'en' || movie.original_language === 'it'"
                  :src="require(`../assets/img/${movie.original_language}.png`)"
                  alt=""
                >
                 <span class="h5 text-uppercase bold">Voto:</span>
                {{ movie.vote_average }}
                </li>
            </ul>
      </div>
          </div>

      
  </main>
</template>

<script>
export default {
    name : 'Main',
    props : ['movies'],
}
</script>

<style lang="scss">
.container{
    min-height: calc(100vh - 80px);
    ul{
        margin-top: 40px;
        li{
            list-style: none;
            margin-bottom: 10px;
        }
        img{
            height: 20px;
        }
    }
}
</style>