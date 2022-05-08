export interface EventOptions {
    once?: boolean; // 是否只执行一次 false
    capture?: boolean; // 是否在捕获阶段执行 false
    passive?: boolean; // 是否执行默认事件 false
}