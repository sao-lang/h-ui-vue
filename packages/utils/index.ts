import type { App, Plugin, Component } from 'vue';
import type { EventOptions } from './index.d';

type SFCWithInstall = Component & Plugin;

export const withInstall = (comp: Component) => {
    (comp as SFCWithInstall).install = (app: App) => {
        app.component(comp.name as string, comp);
    };
    return comp as SFCWithInstall;
};

/**
 * @name addEvent
 * @description 添加事件监听
 * @param {HTMLElement | Document | Window} element 事件源
 * @param {string} event 事件名
 * @param {(e: Event) => void} handler 事件函数
 * @param {boolean} useCapture 是否开启捕获模式
 */
export const addEvent = (
    element: HTMLElement | Document | Window,
    event: string,
    handler: (e: Event) => void,
    options?: EventOptions,
): void => {
    if (element && event && handler) {
        element?.addEventListener(event, handler, options);
    }
};

/**
 * @name removeEvent
 * @description 移除事件监听
 * @param {HTMLElement | Document | Window} element 事件源
 * @param {string} event 事件名
 * @param {(e: Event) => void} handler 事件函数
 * @param {boolean} useCapture 是否开启捕获模式
 */
export const removeEvent = (
    element: HTMLElement | Document | Window,
    event: string,
    handler: (e: Event) => void,
    options?: EventOptions,
): void => {
    if (element && event && handler) {
        element?.removeEventListener(event, handler, options);
    }
};
