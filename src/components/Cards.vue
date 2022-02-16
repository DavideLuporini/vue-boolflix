<template>
                <ul class="d-flex  flex-wrap p-0"> 
                        <img v-if="item.poster_path" class="poster img-fluid h-100" :src="bgImage + item.poster_path" alt="">
                        <img v-else class="poster img-fluid h-100" :src="defaultImage" alt="" />

                            <!-- description section / hover element -->
                            <ul class="description">

                                <!-- title -->
                                <li class="">
                                    <span class="h5 text-uppercase bold text">Titolo: </span>
                                    <span class="mx-2">{{ item.title }}</span>
                                </li>
                                
                                <!-- title in original lenguage -->
                                <li>
                                    <span class="h5 text-uppercase bold origin"> originale:</span>
                                    <span class="mx-2">{{ item.original_title }}</span>
                                </li>

                                <!-- media image -->
                                <li>  
                                    <img class="mx-2 flag"
                                    v-if="item.original_language === 'en' || item.original_language === 'it'"
                                    :src="require(`../assets/img/${item.original_language}.png`)"
                                    alt=""
                                    >
                                </li>
                                <!-- vote  -->
                                <li>
                                    <span class="h5 text-uppercase bold vote">Voto:</span><span class="mx-2">{{ item.vote_average }}</span>
                                </li>
                                
                                    <!-- rating / stars-->
                                <li>
                                    <div class="rating">
                                        <i v-for="key in  5" :key="`piena-${key}`" class="fa-star mb-3" :class="numRating(item.vote_average) > key ? ' fas ': ' far ' "> </i>
                                    </div>
                                </li>

                                    <!-- overview -->
                                <li>
                                    <span class="h5 text-uppercase bold len">overview:</span> 
                                    <div  class="overview">{{ item.overview }}</div>
                                </li>
                        </ul>
                </ul>
            
</template>

<script>

export default {
 name : 'Cards',
  props: ["item"],
  data(){
      return{
        bgImage: "https://image.tmdb.org/t/p/w342",
         defaultImage: "https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440",
      }
  },
  methods: {
      numRating(n) {
         const rating = Math.ceil(n / 2);
         return rating;
      },
   },
}
</script>

<style lang="scss" scoped>
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
    .poster{
        border: rgb(107, 6, 6) 2px solid;
        border-radius: 10px;
    }
    &:hover .poster{
        filter: brightness(0.1);
        border: rgb(107, 6, 6) 2px solid;
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
    ul{
        padding-left: 10px;
        li span{
            list-style: none;
            margin-bottom: 10px;
            color: white;
        }
        .flag{
            height: 20px;
        }
    }
li{
    list-style: none;
}
.fa-star{
    font-size: 25px;
    color: white;
}
.fas{
    color: yellow;
}
.overview{
    width: 90%;
    margin: 0 auto;
    font-size: 0.8rem;
    color: white;
}
</style>