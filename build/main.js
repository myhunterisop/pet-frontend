import './main.scss'

import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
    }
  }
})

import Layout from './components/Layout/Layout.vue'

app.component('layout', Layout)
app.mount('#app')