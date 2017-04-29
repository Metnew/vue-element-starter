'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: 'Vue-Element-Starter',
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '/',
  // add these dependencies to a standalone vendor bundle
  vendor: [
    'vue',
    'vuex',
    'vue-router',
    'vuex-router-sync',
    'whatwg-fetch',
    'normalize.css',
    'offline-plugin/runtime'
  ]
}
