import { ExtractPropTypes, PropType } from 'vue';

const props = {
    type: {
        type: String as PropType<'text' | 'password' | 'textarea'>,
        default: 'text',
    },
    size: {
        type: String as PropType<'small' | 'medium' | 'large'>,
        default: 'medium',
    },
    circle: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    pair: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: [String, Array] as PropType<string | [string, string]>,
    },
    maxLength: {
        type: Number,
    },
    minLength: {
        type: Number,
    },
    sperator: {
        type: String,
        default: '-',
    },
    showPassword: {
        type: Boolean,
        default: false,
    },
    showCount: {
        type: Boolean,
        default: false,
    },
};
export default props;

export type ButtonIProps = ExtractPropTypes<typeof props>;
