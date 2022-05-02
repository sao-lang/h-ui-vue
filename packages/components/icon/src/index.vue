<template>
    <span
        :class="['h-icon', { 'is-loading': loading }]"
        :style="{ width: computedSize, height: computedSize }"
    >
        <icon-park
            v-if="loading || !!type"
            :type="loading ? 'loading-four' : type"
            :theme="theme"
            :size="size"
            :spin="spin"
            :fill="fill"
            :stroke-linecap="strokeLinecap"
            :stroke-linejoin="strokeLinejoin"
            :stroke-width="strokeWidth"
        />
    </span>
</template>
<script lang="ts">
    import { defineComponent, computed, toRef } from 'vue';
    import { IconPark } from '@icon-park/vue-next/es/all';
    import props from './props';

    export default defineComponent({
        components: { IconPark },
        name: 'HIcon',
        props,
        setup: props => {
            const size = toRef(props, 'size');
            const computedSize = computed<string>(() =>
                typeof size.value === 'number' ? `${size.value}px` : size.value,
            );
            return { computedSize };
        },
    });
</script>
