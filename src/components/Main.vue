<template>
  <main>
      <div class="container d-flex justify-content-center align-items-center">
          <div class="row w-100">
            <div v-if="!movies.length & !series.length"  class="h1 text-uppercase text-white">effettua una ricerca per cercare un film o una serie tv</div>
            <div v-else>
                <li v-if="movies.length"><h1 class="text-white text-uppercase">Film</h1></li>
                <li v-else><h1 class="text-white text-uppercase"></h1></li>
            <ul class="d-flex  flex-wrap p-0">
                <li :style="bgImage + movie.poster_path" class="text-white col-3" v-for="(movie, index) in movies" :key="`nome-${index}`" >
                    <img v-if="movie.poster_path" class="poster img-fluid h-100" :src="bgImage + movie.poster_path" alt="">
                    <img v-else class="poster img-fluid h-100" :src="defaultImage" alt="" />
                        <ul class="description">
                            <li class=""><span class="h5 text-uppercase bold text">Titolo: </span> <span class="mx-2">{{ movie.title }}</span></li>
                            <li><span class="h5 text-uppercase bold origin"> originale:</span><span class="mx-2">{{ movie.original_title }}</span></li>
                            <li>  
                                <img class="mx-2 flag"
                                v-if="movie.original_language === 'en' || movie.original_language === 'it'"
                                :src="require(`../assets/img/${movie.original_language}.png`)"
                                alt=""
                                >
                            </li> 
                            <li><span class="h5 text-uppercase bold vote">Voto:</span><span class="mx-2">{{ movie.vote_average }}</span></li>
                            <li>
                            <div class="star-rating">
                            <div class="rating">
                                <i v-for="key in  parseInt(numRating(movie.vote_average))" :key="`piena-${key}`" class="fas fa-star mb-3"></i>
                                <i v-for="n in (5 - parseInt(numRating(movie.vote_average)))" :key="`vuota-${n}`" class="far fa-star mb-3"></i>
                            </div>
                            <li><span class="h5 text-uppercase bold len">overview:</span> <div  class="overview">{{ movie.overview }}</div></li>
                        </div>
                            </li>
                    </ul>
                </li>
            </ul>
            <li v-if="series.length"><h1 class="text-white text-uppercase">Serie tv</h1></li>
            <li v-else><h1 class="text-white text-uppercase"></h1></li>
            <ul class="d-flex flex-wrap">
                <li :style="bgImage + serie.poster_path" class="text-white col-3 " v-for="(serie, index) in series" :key="`serie-${index}`" >
                <img v-if="serie.poster_path" class="poster img-fluid h-100" :src="bgImage + serie.poster_path" alt="">
                <img v-else class="poster img-fluid h-100" :src="defaultImage" alt="" />
                    <ul class="description">
                        <li class=""><span class="h5 text-uppercase bold text">Titolo: </span><span class="mx-2">{{ serie.name }}</span></li>
                        <li><span class="h5 text-uppercase bold origin"> originale:</span><span class="mx-2">{{ serie.original_name }}</span></li>
                        <li><span class="h5 text-uppercase bold len">Lingua:</span><span class="mx-2"> {{ serie.original_language }}</span></li>
                        <li>  
                            <img class="mx-2 flag"
                            v-if="serie.original_language === 'en' || serie.original_language === 'it'"
                            :src="require(`../assets/img/${serie.original_language}.png`)"
                            alt=""
                            >
                        </li> 
                        <li><span class="h5 text-uppercase bold vote">Voto:</span><span class="mx-2">{{ serie.vote_average }}</span></li>
                        <div class="star-rating">
                            <div class="rating">
                                <i v-for="f in  parseInt(numRating(serie.vote_average))" :key="`piena-${f}`" class="fas fa-star"></i>
                                <i v-for="z in (5 - parseInt(numRating(serie.vote_average)))" :key="`vuota-${z}`" class="far fa-star"></i>
                            </div>
                        </div>
                        <li><span v-if="!serie.overview" class="h5 text-uppercase bold overview">overview not present</span> 
                        <span v-else class="h5 text-uppercase bold ">overview:</span> <div class="overview">{{ serie.overview }}</div>
                        </li>
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
    padding: 5px;
    overflow: hidden;

    &:hover{
        transform: scale(1.05);
        z-index: 1;
        transition: 0.5s;
    }
    &:hover .poster{
        filter: brightness(0.1)
    }

    &:hover .description{
        display: block;
    }
    
    .description{
        position:absolute;
        top: 20px;
        list-style-type: none;
        display: none;
        max-height: 90%;
        overflow: hidden;
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
.fas{
    color: yellow;
}
.overview{
    width: 90%;
    margin: 0 auto;
    font-size: 0.8rem;
}

</style>

    