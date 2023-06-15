import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'

import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import App from './App.vue'
import router from './router'

import '@/styles/global.less';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVueIcon);

app.mount('#app')