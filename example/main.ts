import { createApp } from 'vue';

import App from './App.vue';
import { HIcon, HButton, HButtonGroup } from '@h-ui-vue/components';

import '@h-ui-vue/styles/main.scss'

const app = createApp(App);
app.use(HIcon).use(HButton).use(HButtonGroup);
app.mount('#app');
