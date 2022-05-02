<template>
    <button
        :class="[
            'h-button',
            `h-button--${type}`,
            `is-${size}`,
            { 'is-block': block },
            { 'is-round': round },
            { 'is-circle': circle },
            { 'is-text': text },
            { 'is-solid': solid },
            { 'is-dashed': dashed },
            { 'is-disabled': disabled },
        ]"
        @click="handleClick"
        :style="{ color: textColor, backgroundColor, borderColor, boxShadow: plain ? 'none' : '' }"
    >
        <slot name="icon" />
        <slot name="loading" />
        <slot />
    </button>
</template>
<script lang="ts">
    import props from './props';
    import { defineComponent, toRefs } from 'vue';
    export default defineComponent({
        name: 'HButton',
        props,
        emits: ['click'],
        setup: (props, ctx) => {
            const { emit } = ctx;
            const { loading, disabled } = toRefs(props);
            const handleClick = (e: Event) => {
                !disabled && !loading && emit('click', e);
            };
            return { handleClick };
        },
    });
</script>
