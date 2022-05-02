import type { Component, Plugin } from "vue";
import Icon from "./icon/src/index.vue";

const coms: Component[] = [Icon];

const HUI: Plugin = {
    install: (app) => {
        coms.forEach((item) => {
            app.component(item.name as string, item);
        });
    },
};

export default HUI;
