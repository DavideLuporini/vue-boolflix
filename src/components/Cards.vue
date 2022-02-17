<template>
  <ul class="d-flex flex-wrap p-0">
    <!-- poster image -->
    <img
      v-if="item.poster_path"
      class="poster img-fluid h-100"
      :src="bgImage + item.poster_path"
      alt=""
    />
    <img
      v-else
      class="poster img-fluid h-100"
      :src="require(`../assets/img/defaultImg.png`)"
      alt=""
    />

    <!-- description section / hover element -->
    <ul class="description col img-fluid">
      <!-- title -->
      <li class="">
        <span class="text-title text-uppercase bold text">Titolo: </span>
        <span class="mx-2">{{ item.title }}</span>
      </li>

      <!-- title in original lenguage -->
      <li>
        <span class="text-title text-uppercase bold origin"> originale:</span>
        <span class="mx-2">{{ item.original_title }}</span>
      </li>

      <!-- flag -->
      <li>
        <img
          class="mx-2 flag"
          v-if="
            item.original_language === 'en' || item.original_language === 'it'
          "
          :src="require(`../assets/img/${item.original_language}.png`)"
          alt=""
        />
      </li>
      <!-- vote  -->
      <li>
        <span class="text-title text-uppercase bold vote">Voto:</span
        ><span class="mx-2">{{ item.vote_average }}</span>
      </li>

      <!-- rating / stars-->
      <li>
        <div class="rating">
          <i
            v-for="key in 5"
            :key="`piena-${key}`"
            class="fa-star mb-3"
            :class="numRating(item.vote_average) > key ? ' fas ' : ' far '"
          >
          </i>
        </div>
      </li>

      <!-- overview -->
      <li>
        <span class="text-title text-uppercase bold">overview:</span>
        <div class="overview">{{ item.overview }}</div>
      </li>
    </ul>
  </ul>
</template>

<script>
export default {
  name: "Cards",
  props: ["item"],
  data() {
    return {
      bgImage: "https://image.tmdb.org/t/p/w342",
      defaultImage: "../assets/img/defaultImg.png",
    };
  },
  methods: {
    numRating(n) {
      const rating = Math.ceil(n / 2);
      return rating;
    },
  },
};
</script>

<style lang="scss" scoped>
.col-3 {
  display: inline-block;
  position: relative;
  padding: 5px;
  user-select: none;
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    transition: 0.5s;
  }
    .text-title{
      font-size: 0.9rem;
      font-weight: bold;
    }
  .poster {
    border: rgb(107, 6, 6) 2px solid;
    border-radius: 10px;
  }
  &:hover .poster {
    filter: brightness(0.1);
    border: rgb(107, 6, 6) 2px solid;
  }

  &:hover .description {
    display: block;
  }

  .description {
    position: absolute;
    top: 20px;
    list-style-type: none;
    display: none;
    max-height: 80%;
    max-width: 80%;
    overflow-y: scroll;
    /* width */
    &::-webkit-scrollbar {
      width: 0px;
    }

    li {
      margin-bottom: 20px;
    }
  }
}
ul {
  padding-left: 10px;
  li span {
    list-style: none;
    margin-bottom: 10px;
    color: white;
  }
  .flag {
    max-height: 20px;
  }
}
li {
  list-style: none;
}
.fa-star {
  font-size: 0.9rem;
  color: white;
}
.fas {
  color: yellow;
}
.overview {
  width: 90%;
  margin: 0 auto;
  font-size: 0.8rem;
  color: white;
}
</style>