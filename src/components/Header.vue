<template>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="text-uppercase h1">
      boolFlix
    </div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import 'bootstrap';

</style>
