<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
          <div class="navbar-translate">
            <router-link class="nav-link" data-toggle="tab" to="/" active-class="active">
              <img src="/logo.png" width="100">
              APP <b>Contacts</b>
            </router-link>
            <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-bar top-bar"></span>
              <span class="navbar-toggler-bar middle-bar"></span>
              <span class="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
        </div>
      </nav>

      <ul class="nav nav-pills nav-pills-primary
        nav-pills-just-icons justify-content-center mb-5" role="tablist"
        v-if="this.$store.state.me">
        <li class="nav-item">
          <router-link class="nav-link" data-toggle="tab" to="/" active-class="active">
            <i class="now-ui-icons shopping_cart-simple"></i>
            <span class="nav-link-text">List Contacts</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" data-toggle="tab" to="/awards-rescue" active-class="active">
            <i class="now-ui-icons shopping_cart-simple"></i>
            <span class="nav-link-text">Add Contact</span>
          </router-link>
        </li>
      </ul>

      <div class="container">
        <div class="card">
          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
</style>
