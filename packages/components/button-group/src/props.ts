import type { ExtractPropTypes, PropType } from "vue";

const props = {
    direction: {
        type: String as PropType<'horizental' | 'vertical'>,
        default: 'horizental',
    },
    size: {
        type: String as PropType<'mini' | 'small' | 'medium' | 'large'>,
        default: 'medium',
    },
    circle: {
        type: Boolean,
        default: false,
    },
    bordered: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger'>,
        default: 'default',
    },
};

export default props;
export type ButtonGroupIProps = ExtractPropTypes<typeof props>;