import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import Vue3Lottie from 'vue3-lottie'
import 'virtual:svg-icons-register'
import { setGlobalOptions } from 'vue-request';

import App from './App.vue'
import router from './router'

import 'vue3-lottie/dist/style.css'
// 引入组件样式
import 'vant/lib/index.css';
import '@/styles/global.less';

const app = createApp(App)

setGlobalOptions({
  manual: true, // 手动调用接口
  debounceInterval: 500, // 防抖500ms
  errorRetryCount: 2 // 出错后自动重试两次
});

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie);

app.mount('#app')