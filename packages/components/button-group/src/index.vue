<template>
    <div :class="['h-button-group', `is-${size}`, { 'is-circle': circle }, `is-${direction}`]">
        <slot />
    </div>
</template>
<script lang="ts">
    import props from './props';
    import HButton from '../../button';
    import { defineComponent, provide } from 'vue';
    export default defineComponent({
        name: 'HButtonGroup',
        props,
        components: { HButton },
        setup: (props, ctx) => {
            return {};
        },
    });
</script>
