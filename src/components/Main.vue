<template>
  <main>
    <div class="container d-flex justify-content-center align-items-center">
      <div
        v-if="!movies.length && !series.length"
        class="
          h-100
          flex-column
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <div class="text-uppercase logo-main">boolFlix</div>
        <h1 class="text-uppercase text-white title-none mb-5">
          cerca un film o una serie tv!
        </h1>
        <div>
          <input
            class="h-100 rounded text-black input-search"
            v-model="searched"
            @keyup.enter="startSearch"
            type="text"
            placeholder="cerca un film"
          />
        </div>
      </div>
      <div v-else>
        <!-- film section -->
        <h1 class="text-uppercase text-white text-center my-5 title">Film</h1>
        <div class="row g-3">
          <Card
            v-for="movie in movies"
            :key="movie.id"
            :item="movie"
            class="col-3 p-2"
          />
        </div>
        <!-- tv series section -->
        <h1 class="text-uppercase text-white text-center my-5 title">Serie tv</h1>
        <div class="row g-3">
          <Card
            v-for="serie in series"
            :key="serie.id"
            :item="serie"
            class="col-3 p-2"
          />
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
  name: "Main",
  props: ["movies", "series", "query"],
  data() {
    return {
      searched: "",
    };
  },
  methods: {
    startSearch() {
      this.$emit("query-movie", this.searched);
      this.$emit("query-series", this.searched);
      this.searched = "";
    },
  },
};
</script>

<style lang="scss">
body {
  background: radial-gradient(
    circle at bottom,
    rgb(0, 0, 0) 25%,
    rgb(35, 1, 1) 60%,
    rgb(64, 5, 5) 75%,
    rgb(105, 7, 7) 100%
  );
}
main {
  .container {
    min-height: calc(100vh);
    .input-search {
      width: 500px;
      padding: 10px;
    }
    .title{
        font-size: 4rem;
    }
    .logo-main {
      font-size: 100px;
      background: -webkit-linear-gradient(rgb(214, 23, 23), rgb(29, 27, 27));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      animation: scale 2s linear infinite;
      margin-bottom: 50px;
      user-select: none;
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    .title-none {
      transition: 8s linear red;
      user-select: none;
    }
  }
}
</style>

    