import { createApp } from 'vue';

import App from './App.vue';
import { HIcon } from '@h-ui-vue/components/icon';

const app = createApp(App);
app.use(HIcon);
app.mount('#app');
