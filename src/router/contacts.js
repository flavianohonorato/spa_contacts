import List from '../views/contacts/ContactsList.vue'
import Create from '../views/contacts/ContactsCreate.vue'
import Edit from '../views/contacts/ContactsEdit.vue'
import Show from '../views/contacts/ContactsShow.vue'

import { router, meta } from '../utils/router'

export default [
  router('contacts.list', '/', List, meta('Contats')),
  router('contacts.create', 'contacts/create', Create, meta('Add Contact')),
  router('contacts.edit', 'contacts/:id/edit', Edit, meta('Edit Contact')),
  router('contacts.show', 'contacts/:id/show', Show, meta('Show Contact'))
]
