<template>
    <icon-park
        :type="type"
        :theme="theme"
        :size="size"
        :spin="spin"
        :fill="fill"
        :stroke-linecap="strokeLinecap"
        :stroke-linejoin="strokeLinejoin"
        :stroke-width="strokeWidth"
    />
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { IconPark } from '@icon-park/vue-next/es/all';
    import props from './props';

    export default defineComponent({
        components: { IconPark },
        name: 'HIcon',
        props,
        setup: () => {
            return {};
        },
    });
</script>
