import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import '../public/css/style.css'
import './registerServiceWorker'
import router from './router'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min'
import "bootstrap/dist/js/bootstrap.min.js";

import axios from 'axios'







createApp(App).use(router,axios,VueSweetalert2).mount('#app')
