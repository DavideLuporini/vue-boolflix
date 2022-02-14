<template>
    <nav class="navbar">
  <div class="container-fluid">
    <div id="header-title" class="text-uppercase h1">
      boolFlix
    </div>
    <div class="d-flex">
      <div>
          <input class="h-100" v-model="searched" @keyup.enter="startSearch" type="text" placeholder="cerca un film" >
      </div>
      <button @click="startSearch" class="btn btn-outline-success" type="submit">Cerca</button>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  name: 'Header',
  props :['query'],
  data() {
      return {
         searched: "",
      };
   },
   methods: {
      startSearch() {
      this.$emit("query-movie", this.searched);
      this.$emit("query-series", this.searched);
    },
   },
};

</script>


<style scoped  lang="scss">
@import 'bootstrap';
nav{
  height: 80px;
  background-color: black;
  #header-title{
    color:red;
  }
}

</style>
