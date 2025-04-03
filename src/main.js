import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS (bao gồm cả bundle để có hỗ trợ các tính năng JS như Modal, Dropdown...)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.css'

import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App)

app.use(router)

app.mount('#app')
