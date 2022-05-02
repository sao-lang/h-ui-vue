import type { App, Plugin, Component } from "vue";

type SFCWithInstall = Component & Plugin;

export const withInstall = (comp: Component) => {
    (comp as SFCWithInstall).install = (app: App) => {
        app.component(comp.name as string, comp);
    };
    return comp as SFCWithInstall;
};
