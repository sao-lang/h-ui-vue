import type { ExtractPropTypes, PropType } from "vue";

const props = {
    type: {
        type: String as PropType<'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger'>,
        default: 'default',
    },
    size: {
        type: String as PropType<'mini' | 'small' | 'medium' | 'large'>,
        default: 'medium'
    },
    text: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    dashed: {
        type: Boolean,
        default: false,
    },
    solid: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    textColor: {
        type: String
    },
    backgroundColor: {
        type: String,
    },
    borderColor: {
        type: String,
    },
    plain: {
        type: Boolean,
        default: false,
    }
};
export default props;

export type ButtonIProps = ExtractPropTypes<typeof props>;