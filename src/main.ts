import { createApp } from 'vue'
import App from './views/App.vue'

const app = createApp(App)
app.mixin({ methods: { t, n } })
app.mount('#content')
