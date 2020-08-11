<template>
  <div>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul class="nav navbar-light">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'book.list' }" class="nav-link">List Books</router-link>
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
    <div class="container">
      <div class="container-inner">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
.nav-link.router-link-active {
  color: #fff;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
<script>
export default {};
</script>
