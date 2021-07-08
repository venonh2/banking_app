import React, {useEffect, useRef, useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from 'react-native';
import color_pallete from '../../config/color_pallete';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageInput from '../../components/ImageInput';
import {moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as LocalAuthentication from 'expo-local-authentication';

const Background = require('../../assets/background.png');

const Login: React.FC = () => {
    const [inputFocus, setInputFocus] = useState({one: false, two: false});
    const passwordInputRef = useRef<TextInput>(null);

    async function checkers() {
        console.log('a', await LocalAuthentication.hasHardwareAsync());
        console.log('a', await LocalAuthentication.authenticateAsync());
    }

    useEffect(() => {
        checkers();
    }, []);

    function changeTextColor() {
        if (inputFocus.one) {
            return '#212121';
        }
        if (inputFocus.two) {
            return '#111';
        }
        return '#fff';
    }
    //
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{...styles.title, color: changeTextColor()}}>
                BankMe.
            </Text>
            <KeyboardAwareScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                decelerationRate="normal"
                //keyboardShouldPersistTaps="always"
                onKeyboardDidHide={() =>
                    setInputFocus({one: false, two: false})
                }>
                <Image source={Background} style={styles.image} />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => console.log('not implemented yet')}>
                    <MaterialCommunityIcons name="login" size={32} />
                </TouchableOpacity>
                <View style={styles.form}>
                    <ImageInput
                        icon="user"
                        name="login"
                        placeholder="Login"
                        returnKeyType="next"
                        onFocus={() => setInputFocus({one: true, two: false})}
                        onSubmitEditing={() =>
                            passwordInputRef.current?.focus()
                        }
                    />
                    <ImageInput
                        ref={passwordInputRef}
                        name="password"
                        icon="lock"
                        placeholder="Password"
                        returnKeyType="next"
                        keyboardAppearance="dark"
                        keyboardType="email-address"
                        onFocus={() => setInputFocus({one: false, two: true})}
                        secureTextEntry={true}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E94782',
    },

    title: {
        position: 'absolute',
        fontFamily: 'Poppins-Bold',
        fontSize: 48,
        marginTop: 16,
        marginLeft: 38,

        color: color_pallete.white,
        zIndex: 2,
    },

    image: {
        height: moderateScale(348),
        width: moderateScale(348),
        zIndex: 1,

        marginTop: 48,
        alignSelf: 'center',
    },

    loginButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: -56,

        zIndex: 4,

        backgroundColor: color_pallete.white,

        borderTopStartRadius: 50,
        borderBottomLeftRadius: 50,

        height: 102,
        width: 52,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    form: {
        alignItems: 'center',

        marginTop: 16,
    },
});

export default Login;
