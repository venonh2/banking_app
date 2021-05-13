import React, {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    useCallback,
    useState,
} from 'react';

import {moderateScale} from 'react-native-size-matters';
/* import {useField} from '@unform/core'; */

import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import color_pallete from '../config/color_pallete';

interface inputValueReference {
    value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputRef {
    focus(): void;
}

const ImageInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {icon, name, ...rest},
    ref,
) => {
    /* const {registerField, defaultValue = '', fieldName} = useField(name); */
    /*     const inputValueRef = useRef<inputValueReference>({value: defaultValue}); */
    const inputElementRef = useRef<any>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    /*     const handleInputBlur = useCallback(() => {
        setIsFocused(true);
    }, []);
 */
    /*     const handleInputFocus = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);
 */
    /*     useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    })); */

    /*     useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(_: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({text: value}); // alterando o valor do input exibido em tela
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [fieldName, registerField]); */

    return (
        <View style={styles.container}>
            <Icon
                name={icon}
                size={20}
                style={{
                    ...styles.icon,
                    color:
                        isFocused || isFilled
                            ? color_pallete.purple_dark
                            : color_pallete.white,
                }}
            />
            <TextInput
                ref={inputElementRef}
                maxLength={15}
                keyboardType={'default'}
                /*   defaultValue={defaultValue} */
                keyboardAppearance={'dark'}
                /*   onFocus={handleInputBlur}
                onBlur={handleInputFocus} */
                /*     onChangeText={value => {
                    inputValueRef.current.value = value;
                }} */
                style={styles.input}
                placeholderTextColor={color_pallete.grey_light}
                selectionColor="#111"
                hitSlop={{top: 40, right: 40, bottom: 40, left: 40}}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',

        marginBottom: 16,
        width: moderateScale(332),
        height: moderateScale(48),
    },

    icon: {
        margin: 4,
    },

    input: {
        flex: 1,
    },
});

export default forwardRef(ImageInput);
