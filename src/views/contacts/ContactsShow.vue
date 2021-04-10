<template>
  <div>
    <h3>Show Contact</h3>
    <div class="col-12 alert alert-danger" v-if="errorMessage" v-html="errorMessage"></div>
    <div class="col-12 alert alert-success" v-if="successMessage" v-html="successMessage"></div>

    <div class="row">
      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="form-control"
            disabled
          >
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            v-model="formData.email"
            type="email"
            class="form-control"
            disabled
          >
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group">
          <label for="document">Yout Document (CPF)</label>
          <input
            v-model="formData.cpf"
            type="text"
            class="form-control"
            disabled
          >
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group">
          <label for="document">Created At</label>
          <input v-model="formData.created_at" type="text" class="form-control" disabled>
        </div>
      </div>

      <div class="col-12">
        <router-link class="btn btn-secondary pull-right" :to="{name: 'contacts.list'}">
          Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { filterDate } from '@/filters'
export default {
  name: 'ContactShow',
  data () {
    return {
      loader: false,
      formData: {},
      successMessage: '',
      errorMessage: '',
      errors: {},
      email: ''
    }
  },
  filters: { filterDate },
  computed: {
    data () {
      const { data } = Object.assign({}, this.$store.state.contacts.first)
      return data
    }
  },
  methods: {
    getContacts () {
      this.loader = true
      this.$store.dispatch('contacts/one', { id: this.$route.params.id })
      this.loader = false
    }
  },
  mounted () {
    this.getContacts()
  },
  watch: {
    data: {
      handler (value) {
        this.formData = value
      },
      deep: true
    }
  }
}
</script>
