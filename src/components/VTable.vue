<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody v-show="!loading">
        <slot></slot>
      </tbody>
      <tbody v-show="loading">
        <tr>
          <td colspan="4" class="text-center">
            Carregando dados...
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    loading: {
      type: Boolean,
      default: false,
      validator: function (value) {
        return [true, false].indexOf(value) !== -1
      }
    }
  }
}
</script>
<style lang="scss">
  .table td, .table th {
    vertical-align: middle;
  }
</style>
