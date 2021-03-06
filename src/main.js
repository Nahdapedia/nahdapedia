// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/normalize.css'
import '~/assets/css/skeleton.css'
import '~/assets/css/custom.css'

export default function (Vue, { router, head, isClient }) {
  head.link.push(
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Rubik&display=swap'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Raleway100&display=swap'
  }),
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
