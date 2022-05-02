<template>
    <div
        :class="[
            'h-button-group',
            `h-button-group--${type}`,
            `is-${size}`,
            { 'is-circle': circle },
            { 'is-bordered': bordered },
            `is-${direction}`,
        ]"
    >
        <slot />
    </div>
</template>
<script lang="ts">
    import props from './props';
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'HButtonGroup',
        props,
        setup: (props, ctx) => {
            return {};
        },
    });
</script>
