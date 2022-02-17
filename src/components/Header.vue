<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a
        id="header-title"
        class="text-uppercase h1"
        role="button"
        @click="returnHome"
      >
        boolFlix
      </a>
      <div class="d-flex">
        <div>
          <input
            class="h-100 rounded text-black input-search"
            v-model="searched"
            @keyup.enter="startSearch"
            type="text"
            placeholder="cerca un film"
          />
        </div>
        <button
          @click="startSearch"
          class="btn btn-outline-danger ms-2"
          type="submit"
        >
          Cerca
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["query"],
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
    returnHome() {
      this.$emit("query-movie", this.searched);
      this.$emit("query-series", this.searched);
      this.searched = "";
    },
  },
};
</script>


<style scoped  lang="scss">
@import "bootstrap";
nav {
  height: 80px;
  background: transparent;
  input{
    color: black;
  }
  #header-title {
    background: -webkit-linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

}
</style>
