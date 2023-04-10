import { createApp } from 'vue'
import '@/styles/index.less'
import '@/styles/amap_reset.css'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './stores'
import '@/styles/element_reset.less'
// import DataVVue3 from '@kjgl77/datav-vue3'
import 'animate.css';
// `elment-plus` 特定组件样式
import 'element-plus/es/components/message/style/css'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(DataVVue3)
app.mount('#app')
