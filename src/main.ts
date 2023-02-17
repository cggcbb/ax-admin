import App from './App.vue'
import router from './router'
import pinia from '~/store'
import './styles'
import '~/config/chartTheme'
import useGuards from './router/guards'
import useMock from '../mock'

createApp(App).use(router).use(pinia).mount('#app')

useGuards()
useMock()
