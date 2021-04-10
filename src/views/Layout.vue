<template>
  <div id="content">

    <Header title="APP Contacts" />

    <div class="container">
      <div class="card">
        <div class="card-body">
          <router-view />
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Layout',
  components: { Header, Nav }
}
</script>
<style lang="scss">
  .card {
    height: 400px;
  }
</style>
