<template>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="text-uppercase h1">
      boolFlix
    </div>
    <form class="d-flex">
      <div>
          <input v-model="searched" @keyup.enter="startSearch" type="text" placeholder="cerca un film" >
      </div>
      <button @click="startSearch" class="btn btn-outline-success" type="submit">Cerca</button>
    </form>
  </div>
</nav>

</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
         searched: "",
      };
   },
   methods: {
      startSearch() {
         this.$emit("query", this.searched);
         this.searched = "";
      },
   },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import 'bootstrap';
nav{
  height: 80px;
}

</style>
