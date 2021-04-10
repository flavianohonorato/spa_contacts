<template>
  <div>
    <h3>List Contacts</h3>
    <div v-show="!loading" v-if="!contacts.length" class="text-center text-danger">
      No data result!
    </div>
    <v-table v-show="!loading" v-if="contacts.length">
      <template :loading="loading" v-slot:thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>CPF</td>
          <td>Created At</td>
          <td>Actions</td>
        </tr>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.cpf }}</td>
          <td>{{ contact.created_at | filterDate }}</td>
          <td>
            <router-link
              :to="{name: 'contacts.show', params: {id: contact.id }}"
              class="btn btn-info btn-round btn-sm my-0 btn-icon"
            >
              <i class="now-ui-icons ui-1_zoom-bold"></i>
            </router-link>
            <router-link
              :to="{name: 'contacts.edit', params: {id: contact.id }}"
              class="btn btn-warning btn-round btn-sm my-0 btn-icon"
            >
              <i class="now-ui-icons shopping_tag-content"></i>
            </router-link>
            <button
              @click="deleteRegistry(contact)"
              class="btn btn-danger btn-round btn-sm my-0 btn-icon"
            >
              <i class="now-ui-icons ui-1_simple-remove"></i>
            </button>
          </td>
        </tr>
      </template>
    </v-table>

    <ul class="pagination justify-content-center" v-show="!loading" v-if="pages.lenght">
      <li class="page-item">
        <a
          class="page-link"
          aria-label="Previous"
          v-if="currentPage > 1"
          @click.prevent="currentPage--"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons arrows-1_minimal-left" aria-hidden="true"></i>
            {{ contacts.last_page }}
          </span>
        </a>
      </li>

      <li
        v-for="page in pages.last_page" :key="page"
        class="page-item" :class="{'active' : currentPage === page}"
        v-show="page > currentPage - 5 && page < currentPage + 5"
      >
        <a class="page-link" href="" @click.prevent="currentPage = page">{{ page }}</a>
      </li>

      <li class="page-item">
        <a
          class="page-link"
          aria-label="Next"
          v-if="currentPage < pages.last_page"
          @click.prevent="currentPage++"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons arrows-1_minimal-right" aria-hidden="true"></i>
          </span>
        </a>
      </li>
    </ul>

    <div class="text-center" v-show="loading">
      <i class="now-ui-icons loader_refresh spin"></i>
      carregando...
    </div>
  </div>
</template>
<script>
import { filterDate, filterMask } from '@/filters'
export default {
  name: 'ListContacts',
  data () {
    return {
      title: 'Contacts',
      loading: true,
      currentPage: 1
    }
  },
  computed: {
    contacts () {
      const { data } = this.$store.state.contacts.list
      return data
    },
    pages () {
      return this.$store.state.contacts.list
    }
  },
  filters: {
    filterDate,
    filterMask
  },
  methods: {
    getContacts () {
      this.$store.dispatch('contacts/all', this.currentPage)
        .then((response) => {
          this.loader = true
        })
        .catch((error) => console.log('error', error))
    },
    deleteRegistry (data) {
      const title = `${data.name}`
      this.$swal({
        title: 'Você tem certeza?',
        text: `Você tem certeza que quer remover ${title}?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar!',
        cancelButtonText: 'Cancelar',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        confirmButtonColor: '#ec3233'
      }).then((result) => {
        const id = data.id
        if (result.isConfirmed) {
          this.$store.dispatch('contacts/remove', id)
            .then((response) => {
              this.$store.dispatch('contacts/all', this.currentPage)
            })
            .catch((error) => console.log('error', error))
        }
      })
    }
  },
  mounted () {
    this.getContacts()
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  watch: {
    async currentPage (value, oldValue) {
      this.loader = true

      try {
        await this.$store.dispatch('contacts/all', this.currentPage)
        setTimeout(() => {
          this.loading = false
        }, 1000)
      } catch (error) {
        this.loader = false
        this.currentPage = oldValue
      }
    }
  }
}
</script>

<style lang="scss">
  .arrowPage {
    font-size: 30px;
  }
</style>
