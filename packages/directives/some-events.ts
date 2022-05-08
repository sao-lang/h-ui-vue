import type { EventOptions } from '@h-ui-vue/utils/index.d';
import { addEvent, removeEvent } from '@h-ui-vue/utils';
import type { Directive } from 'vue';

type SomeEventsBindingsType = {
    name: string;
    fn: (e: Event) => void;
    options: EventOptions;
}[];

const someEvents: Directive<HTMLElement, SomeEventsBindingsType> = {
    mounted: (el, { value }) => {
        value.forEach(({ name, fn, options }) => {
            addEvent(el, name, fn, options);
        });
    },
    unmounted: (el, { value }) => {
        value.forEach(({ name, fn, options }) => {
            removeEvent(el, name, fn, options);
        });
    },
};

export default someEvents;
