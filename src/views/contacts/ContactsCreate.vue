<template>
  <div>
    <h3>Add Contact</h3>
    <div class="col-12 alert alert-danger" v-if="errorMessage" v-html="errorMessage"></div>
    <div class="col-12 alert alert-success" v-if="successMessage" v-html="successMessage"></div>

    <form action="" @submit.prevent="onSubmit()" class="row">
      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group" :class="{'has-danger' : errors.name}">
          <label for="name">Full Name</label>
          <input v-model="formData.name" type="text" class="form-control" placeholder="Your name">
          <small v-if="errors.name" class="form-text text-danger">{{ errors.name[0] }}</small>
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group" :class="{'has-danger' : errors.email}">
          <label for="email">Email address</label>
          <input
            v-model="formData.email"
            type="email"
            class="form-control"
            placeholder="Enter email"
          >
          <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-4">
        <div class="form-group" :class="{'has-danger' : errors.cpf}">
          <label for="document">Yout Document (CPF)</label>
          <input v-model="formData.cpf" type="text" class="form-control" placeholder="CPF" maxlength="14">
          <small v-if="errors.cpf" class="form-text text-danger">{{ errors.cpf[0] }}</small>
        </div>
      </div>

      <div class="col-12">
        <button
          type="submit"
          class="btn btn-info pull-right"
        >
          <i class="now-ui-icons loader_refresh spin" v-if="loader"></i>
          Save Contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { validateEmail, validateCPF } from '../../utils/validations'

export default {
  name: 'ContactCreate',
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
  methods: {
    async onSubmit () {
      this.loader = true
      this.$store.dispatch('contacts/create', { ...this.formData })
        .then((response) => {
          if (response.data.success) {
            this.loader = false
            this.formData = {}
            this.errors = {}
            this.successMessage = response.data.message
            setTimeout(() => {
              this.successMessage = ''
            }, 5000)
          } else {
            this.loader = false
            this.errorMessage = response.data.message
            setTimeout(() => {
              this.errorMessage = ''
            }, 4000)
          }
          if (response.data.code === 422 || response.data.code === 417) {
            this.loader = false
            this.errorMessage = response.data.message
            this.errors = response.data.errors
            setTimeout(() => {
              this.errorMessage = ''
            }, 4000)
          }
        })
        .catch((error) => {
          console.log('error', error)
          this.loader = false
          this.errorMessage = 'The given data was invalid'
          this.errors = error.response.data.errors
          setTimeout(() => {
            this.errorMessage = ''
          }, 4000)
        })
        .finally(() => {
          this.loader = false
          setTimeout(() => {
            this.errorMessage = ''
          }, 4000)
        })
    },
    prepareToValidateEmail (email) {
      return validateEmail(email)
    },
    prepareToValidateCPF (cpf) {
      console.log('prepareToValidateCPF', cpf)
      return validateCPF(cpf)
    }
  },
  watch: {
    formData: {
      handler (value) {
      },
      deep: true
    }
  }
}
</script>
