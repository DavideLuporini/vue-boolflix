<template>
  <main>
      <div class="container d-flex justify-content-center align-items-center">
          <div class="row">
            <div v-if="!movies.length & !series.length"  class="h1 text-uppercase text-white">effettua una ricerca per cercare un film o una serie tv</div>
            <div v-else>
                <li><h1 class="text-white">Film</h1></li>
            <ul class="d-flex justify-content-between flex-wrap">
                <li :style="bgImage + movie.poster_path" class="text-white col-2 m-3" v-for="(movie, index) in movies" :key="movie.id || index" >
                <img class="poster img-fluid" :src="bgImage + movie.poster_path" alt="">
                    <ul class="description">
                        <li class="">
                        <span class="h5 text-uppercase bold text">Titolo:</span> {{ movie.title }}, <span class="h5 text-uppercase bold origin"> originale:</span> {{ movie.original_title }} <span class="h5 text-uppercase bold len">Lingua:</span> {{ movie.original_language }}
                        <img class="mx-2 flag"
                        v-if="movie.original_language === 'en' || movie.original_language === 'it'"
                        :src="require(`../assets/img/${movie.original_language}.png`)"
                        alt=""
                        >
                        <span class="h5 text-uppercase bold vote">Voto:</span>
                        {{ movie.vote_average }}
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><h1 class="text-white">TV Series</h1></li>
                <li class="text-white" v-for="(serie, index) in series" :key="serie.id || index "  :src="bgImage + serie.poster_path">
                <span class="h5 text-uppercase bold">Titolo:</span> {{ serie.name }}, <span class="h5 text-uppercase bold"> originale:</span> {{ serie.original_name }} <span class="h5 text-uppercase bold">Lingua:</span> {{ serie.original_language }}
                <img class="mx-2"
                  v-if="serie.original_language === 'en' || serie.original_language === 'it'"
                  :src="require(`../assets/img/${serie.original_language}.png`)"
                  alt=""
                >
                 <span class="h5 text-uppercase bold">Voto:</span>
                {{ serie.vote_average }}
                </li>
            </ul>
            </div>
            </div>
        </div>
  </main>
</template>

<script>
export default {
    name : 'Main',
    props : ['movies' , 'series'],
    data() {
      return {
         bgImage: "https://image.tmdb.org/t/p/w342",
      };
   },
}
</script>

<style lang="scss">
main{
    background-color: #434343;
}
.col-2{
    display: inline-block;
    position: relative;

    &:hover .poster{
        filter: brightness(0)
    }

    &:hover .description{
        display: block;
    }
    
    .description{
        position:absolute;
        top: 20px;
        list-style-type: none;
        display: none;
        li{
            margin-bottom: 20px;
        }
    }
}
.container{
    min-height: calc(100vh - 80px);
    ul{
        margin-top: 40px;
        li span{
            list-style: none;
            margin-bottom: 10px;
        }
        .flag{
            height: 20px;
        }
    }
}
</style>

    