<template>
  <main>
      <div class="container d-flex justify-content-center align-items-center">
          <div class="row">
            <div v-if="!movies.length & !series.length"  class="h1 text-uppercase text-white">effettua una ricerca per cercare un film o una serie tv</div>
            <div v-else>
                <li><h1 class="text-white text-uppercase">Film</h1></li>
            <ul class="d-flex justify-content-between flex-wrap">
                <li :style="bgImage + movie.poster_path" class="text-white col-3" v-for="(movie, index) in movies" :key="movie.id || index" >
                    <img v-if="movie.poster_path" class="poster img-fluid h-100" :src="bgImage + movie.poster_path" alt="">
                    <img v-else class="poster img-fluid h-100" :src="defaultImage" alt="" />
                        <ul class="description">
                            <li class=""><span class="h5 text-uppercase bold text">Titolo: </span> {{ movie.title }}</li>
                            <li><span class="h5 text-uppercase bold origin"> originale:</span>{{ movie.original_title }}</li>
                            <li><span class="h5 text-uppercase bold len">Lingua:</span> {{ movie.original_language }}</li>
                            <li>  
                                <img class="mx-2 flag"
                                v-if="movie.original_language === 'en' || movie.original_language === 'it'"
                                :src="require(`../assets/img/${movie.original_language}.png`)"
                                alt=""
                                >
                            </li> 
                            <li><span class="h5 text-uppercase bold vote">Voto:</span>{{ movie.vote_average }}</li>
                            <li>
                            <div class="star-rating">
                            <div class="rating">
                                <i v-for="key in  parseInt(numRating(movie.vote_average))" :key="key" class="fas fa-star"></i>
                                <i v-for="n in (5 - parseInt(numRating(movie.vote_average)))" :key="n" class="far fa-star"></i>
                            </div>
                        </div>
                            </li>
                    </ul>
                </li>
            </ul>
            <li><h1 class="text-white text-uppercase">Serie tv</h1></li>
            <ul class="d-flex justify-content-between flex-wrap">
                <li :style="bgImage + serie.poster_path" class="text-white col-3 " v-for="(serie, index) in series" :key="serie.id || index" >
                <img v-if="serie.poster_path" class="poster img-fluid h-100" :src="bgImage + serie.poster_path" alt="">
                <img v-else class="poster img-fluid h-100" :src="defaultImage" alt="" />
                    <ul class="description">
                        <li class=""><span class="h5 text-uppercase bold text">Titolo: </span> {{ serie.title }}</li>
                        <li><span class="h5 text-uppercase bold origin"> originale:</span>{{ serie.original_title }}</li>
                        <li><span class="h5 text-uppercase bold len">Lingua:</span> {{ serie.original_language }}</li>
                        <li>  
                            <img class="mx-2 flag"
                            v-if="serie.original_language === 'en' || serie.original_language === 'it'"
                            :src="require(`../assets/img/${serie.original_language}.png`)"
                            alt=""
                            >
                        </li> 
                        <li><span class="h5 text-uppercase bold vote">Voto:</span>{{ serie.vote_average }}</li>
                        <div class="star-rating">
                            <div class="rating">
                                <i v-for="f in  parseInt(numRating(serie.vote_average))" :key="f" class="fas fa-star"></i>
                                <i v-for="z in (5 - parseInt(numRating(serie.vote_average)))" :key="z" class="far fa-star"></i>
                            </div>
                        </div>
                        <li>
                
                </li>
                    </ul>

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
         defaultImage: "https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440",
         n:10,
      };
   },
   methods: {
      numRating(n) {
         const rating = Math.ceil(n / 2);
         return rating;
      },
   },
}
</script>

<style lang="scss">
main{
    background-color: #434343;
}
.col-3{
    display: inline-block;
    position: relative;
    padding: 10px;

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
        padding-left: 10px;
        li span{
            list-style: none;
            margin-bottom: 10px;
        }
        .flag{
            height: 20px;
        }
    }
}
li{
    list-style: none;
}
.fa-star{
    font-size: 25px;
}

</style>

    