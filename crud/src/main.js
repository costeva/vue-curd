import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

import './registerServiceWorker'
import router from './router'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min'
import axios from 'axios'





createApp(App).use(router, axios).mount('#app')
