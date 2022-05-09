<template>
    <div
        class="h-input"
        :style="{ borderColor }"
    >
        <div v-if="type !== 'textarea'" :class="[`h-input--${size}`]">
            <div :class="['h-input__preffix']">
                <slot name="preffix" />
            </div>
            <div class="h-input__input">
                <input
                    class="h-input__input-el"
                    ref="inputRef"
                    @input="handleInput"
                    :value="modelValue"
                    @blur="handleBlur"
                />
                <div class="`h-input__input-placeholder"></div>
            </div>
            <div class="h-input__suffix">
                <slot name="suffix" />
            </div>
        </div>
        <div v-else>
            <textarea />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, watch, nextTick } from 'vue';
    import { someEvents } from '@h-ui-vue/directives/index';
    import props from './props';
    import { Border_Active_Color, Border_Normal_Color } from './constants';
    export default defineComponent({
        name: 'HInput',
        props,
        directives: { someEvents },
        emits: ['update:modelValue', 'input'],
        setup: (props, ctx) => {
            const { emit } = ctx;
            const inputRef = ref<HTMLInputElement | null>(null);
            const focused = ref<boolean>(false);
            const hovering = ref<boolean>(false);
            const borderColor = ref<string>(Border_Normal_Color);
            watch([hovering, focused], ([newHovering, newFocused]) => {
                borderColor.value =
                    newFocused || newHovering ? Border_Active_Color : Border_Normal_Color;
            });
            const handleInput = (e: Event) => {
                const { value } = e.target as HTMLInputElement;
                emit('input', e);
                emit('update:modelValue', value);
            };
            const handleBlur = (e: Event) => {
                focused.value = false;
            };
            const handleFocus = () => {
                focused.value = true;
            }
            return {
                inputRef,
                borderColor,
                handleInput,
                handleBlur,
                hovering,
                focused,
                handleFocus,
            };
        },
    });
</script>
