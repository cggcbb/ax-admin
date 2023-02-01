
import App from './App.vue'
import router from './router'
import './styles'
import pinia from '~/store'

import useMock from '../mock'
useMock()

const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
