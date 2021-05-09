import React, {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    useCallback,
    useState,
} from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {useField} from '@unform/core';
import {TextInputMask} from 'react-native-masked-text';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
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

const MaskedInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {icon, name, ...rest},
    ref,
) => {
    const {colors} = useTheme();
    const {registerField, defaultValue = '', fieldName} = useField(name);
    const inputValueRef = useRef<inputValueReference>({value: defaultValue});
    const inputElementRef = useRef<any>(null);
    const [text, setText] = useState('');
    const [rawText, setRawText] = useState('');

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputFocus = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    const handleChangeText = useCallback((maskedText, unmaskedText) => {
        setText(maskedText);
        inputValueRef.current.value = maskedText;
        setRawText(unmaskedText);
    }, []);

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({text: value}); // alterando o valor do input exibido em tela
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [fieldName, registerField]);

    return (
        <View
            style={{
                ...styles.container,
                borderColor: isFocused ? color_pallete.blue : colors.text,
            }}>
            <Icon
                name={icon}
                size={20}
                style={{
                    ...styles.icon,
                    color:
                        isFocused || isFilled
                            ? color_pallete.blue
                            : colors.text,
                }}
            />
            <TextInputMask
                type={'custom'}
                //ref={inputElementRef}
                maxLength={15}
                keyboardType={'numeric'}
                defaultValue={defaultValue}
                keyboardAppearance={'dark'}
                onFocus={handleInputBlur}
                onBlur={handleInputFocus}
                onChangeText={handleChangeText}
                options={{
                    mask: '(099)99999-9999',
                }}
                customTextInputProps={{
                    ref: inputElementRef,
                    rawText,
                    onInitialData: setText,
                }}
                //value={inputValueRef.current.value}
                value={text}
                placeholderTextColor={colors.text}
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

        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 8 / 3,
        width: moderateScale(332),
        height: moderateScale(48),
    },

    icon: {
        margin: 4,
    },
});

export default forwardRef(MaskedInput);
