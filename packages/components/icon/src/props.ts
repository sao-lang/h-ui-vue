import type { ExtractPropTypes, PropType } from 'vue';

const props = {
    size: {
        type: [Number, String],
        default: '1em',
    },
    theme: {
        type: String as PropType<'outline' | 'filled' | 'two-tone' | 'multi-color'>,
        default: 'outline',
    },
    spin: {
        type: Boolean,
        default: false,
    },
    fill: {
        type: [String, Array] as PropType<string | string[]>,
        default: 'currentColor',
    },
    strokeLinecap: {
        type: String as PropType<'butt' | 'round' | 'square'>,
        default: 'round',
    },
    strokeLinejoin: {
        type: String as PropType<'miter' | 'round' | 'bevel'>,
        default: 'round',
    },
    strokeWidth: {
        type: Number,
        default: 4,
    },
    type: {
        type: String,
        default: '',
    },
};

export default props;

export type IconIProps = ExtractPropTypes<typeof props>;
