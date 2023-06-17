import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import Vue3Lottie from 'vue3-lottie'
import 'virtual:svg-icons-register'

import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import App from './App.vue'
import router from './router'

import 'vue3-lottie/dist/style.css'
import '@/styles/global.less';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVueIcon);
app.use(Vue3Lottie);

app.mount('#app')