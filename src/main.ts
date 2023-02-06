
import App from './App.vue'
import router from './router'
import pinia from '~/store'
import './styles'
import '~/config/chartTheme'

import useMock from '../mock'
useMock()

const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
