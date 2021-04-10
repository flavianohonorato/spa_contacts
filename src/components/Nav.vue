<template>
  <section>
    <header>
      <ul class="nav nav-pills nav-pills-info
        nav-pills-just-icons justify-content-center mb-5" role="tablist">
        <li class="nav-item">
          <router-link class="nav-link" data-toggle="tab" :to="{name: 'contacts.list'}" :exact="true" active-class="active">
            <i class="now-ui-icons design_bullet-list-67"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" data-toggle="tab" :to="{name: 'contacts.create'}" active-class="active">
            <i class="now-ui-icons ui-1_simple-add"></i>
          </router-link>
        </li>
      </ul>
    </header>
  </section>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style lang="scss">
  header {
    .nav-link {
      &.active {
        span.nav-link-text {
          color: #f96332;
        }
      }
    }

    .table-responsive .table {
      white-space: nowrap;
    }
  }
  header .nav-link span.nav-link-text {
    font-size: 9px;
  }

  .disabled {
    display: none;
    cursor: default !important;
    &:hover {
      background-color: rgb(24, 206, 15) !important;
    }
  }
</style>
