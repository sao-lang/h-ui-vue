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
        <h-icon
            v-if="loading"
            loading
            :size="20"
            :fill="disabled ? '#aaa' : type && type !== 'default' ? '#fff' : '#000'"
        />
        <span v-else class="h-button__inner">
            <slot name="icon" />
        </span>
        <span class="h-button__inner"> <slot /></span>
    </button>
</template>
<script lang="ts">
    import props from './props';
    import { defineComponent, toRefs } from 'vue';
    import { HIcon } from '../../icon';
    export default defineComponent({
        name: 'HButton',
        props,
        emits: ['click'],
        components: { HIcon },
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
