<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container">
      <div class="navbar-translate">
        <router-link class="nav-link" data-toggle="tab" :to="{name: 'contacts.list'}">
          <img src="../assets/logo.png" width="100">
          {{ title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
