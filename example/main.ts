import { createApp } from 'vue';

import App from './App.vue';
import HUI from '@h-ui-vue/components';

import '@h-ui-vue/styles/main.scss';

const app = createApp(App);
app.use(HUI);
app.mount('#app');
