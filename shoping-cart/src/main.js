// import { createApp } from 'vue'
// import App from './App.vue'
// import store from './store/store'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import store from './store/store'
import App from './App.vue'

// Vue.config.productionTip = false

const app = createApp(App)

app.use(store)

app.mount('#app')
