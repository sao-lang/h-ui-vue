<template>
    <div>
        <h3>Icon</h3>
        <h-icon
            type="loading-three"
            theme="multi-color"
            :size="24"
            :fill="['#c95123', '#3d1e44', '#36d643', '#709e37']"
            stroke-linejoin="miter"
            stroke-linecap="butt"
        />
        <h-icon loading />
    </div>
    <div>
        <h3>Button</h3>
        <p><h-button loading disabled type="primary"></h-button></p>
        <p>
            <span>不同类型</span><br />
            <h-button v-for="{ type, text } of types" :type="type">{{ text }}</h-button>
        </p>
        <p>
            <span>不同类型(禁用)</span><br />
            <h-button v-for="{ type, text } of types" :type="type" disabled>{{ text }}</h-button>
        </p>
        <p>
            <span>不同尺寸</span><br />
            <h-button v-for="{ size, text } of sizes" :size="size">{{ text }}</h-button>
        </p>
        <p>
            <span>圆形和圆角</span><br />
            <h-button round circle size="mini" type="warning">213445</h-button>
        </p>
        <p>
            <span>虚实线边框</span><br />
            <h-button solid text type="warning" disabled>213445</h-button>
        </p>
        <p>
            <span>文字按钮</span><br />
            <h-button solid circle text type="warning">213445</h-button>
        </p>
        <p>
            <span>块级按钮</span><br />
            <h-button text block type="warning">213445</h-button>123423
        </p>
        <p>
            <span>点击事件</span><br />
            <h-button type="primary" @click="handleClick">click</h-button>
        </p>
        <p>
            <span>自定义颜色</span><br />
            <h-button solid text-color="skyblue" border-color="skyblue" plain>click</h-button>
        </p>
        <p>
            <span>自定义图标</span><br />
            <h-button plain type="primary" round disabled>
                <template v-slot="icon">
                    <h-icon
                        type="loading-three"
                        theme="multi-color"
                        :size="24"
                        :fill="['#c95123', '#3d1e44', '#36d643', '#709e37']"
                        stroke-linejoin="miter"
                        stroke-linecap="butt"
                    />
                </template>
            </h-button>
        </p>
    </div>
    <div>
        <h1>Button Group</h1>
        <div style="margin: 30px">
            <h-button-group size="small" type="primary" circle bordered direction="vertical">
                <h-button>1234</h-button>
                <h-button type="warning" round>34132</h-button>
                <h-button type="primary" text round>343543</h-button>
            </h-button-group>
            <h-button-group size="small" type="primary" circle bordered direction="horizental">
                <h-button>1234</h-button>
                <h-button type="warning" round>34132</h-button>
                <h-button type="primary" text round>343543</h-button>
            </h-button-group>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'App',
    });
</script>
<script setup lang="ts">
    const types = [
        { type: 'default', text: 'default' },
        { type: 'primary', text: 'primary' },
        { type: 'info', text: 'info' },
        { type: 'success', text: 'success' },
        { type: 'warning', text: 'warning' },
        { type: 'danger', text: 'danger' },
    ];
    const sizes = [
        { size: 'mini', text: '迷你尺寸' },
        { size: 'small', text: '小型尺寸' },
        { size: 'normal', text: '中型尺寸' },
        { size: 'large', text: '大型尺寸' },
    ];
    const handleClick = (e: Event) => {
        console.log({ e });
    };
</script>
