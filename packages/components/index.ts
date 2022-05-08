import type { Component, Plugin } from 'vue';
import Icon from './icon/src/index.vue';
import Button from './button/src/index.vue';
import ButtonGroup from './button-group/src/index.vue';
import HIcon from './icon';
import HButton from './button';
import HButtonGroup from './button-group';
import HInput from './input';
const coms: Component[] = [Icon, Button, ButtonGroup, HInput];

const HUI: Plugin = {
    install: app => {
        coms.forEach(item => {
            app.component(item.name as string, item);
        });
    },
};
export { HIcon, HButton, HButtonGroup, HInput };
export default HUI;
