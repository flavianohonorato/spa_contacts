import { assign, map, toString } from 'lodash'

export const meta = (title = 'Contacts', auth = true) => {
  return {
    auth,
    title
  }
}

export const router = (name, path, component, defaultMeta = meta()) => {
  return assign({}, { name, path, component, meta: defaultMeta })
}

/**
 * Generates a route name from a given url.
 *
 * @param url
 * @returns {string}
 */
export const urlToName = url => {
  return toString(url)
    .replace(new RegExp('/', 'g'), '.') // replace all / (slash) with . (dot)
    .replace(/^\./, '')
}

/**
 * Prepend name and path prefixes into a route object.
 *
 * @param {Object} r { route }
 * @param {String} pathPrefix
 * @param {String} namePrefix
 * @param {Object} meta
 * @returns {Object}
 */
export const prepareRoute = (r, pathPrefix, namePrefix, meta) => {
  r.name = namePrefix ? namePrefix + `.${r.name}` : r.name
  r.path = r.path ? `${pathPrefix}${r.path}` : pathPrefix
  r.meta = assign({}, meta, r.meta)
  return { ...r }
}

/**
 * Prepares an array of routes with given prefixes and default configurations.
 *
 * @param pathPrefix
 * @param routes
 * @param meta
 * @returns {Array}
 */
export const group = (pathPrefix, routes = [], meta = { auth: false }) => {
  return map(routes, r => {
    const a = prepareRoute(r, pathPrefix, urlToName(pathPrefix), meta)

    return a
  })
}
