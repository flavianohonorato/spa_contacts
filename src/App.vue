<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import './assets/css/bootstrap.min.css'
import './assets/css/theme.css'

export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
.has-danger:after {
  display: none;
}
.has-danger .form-control {
  border: 2px solid red;
}
</style>
