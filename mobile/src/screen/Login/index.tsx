import React, {useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import color_pallete from '../../config/color_pallete';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageInput from '../../components/ImageInput';
import {moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Background = require('../../assets/background.png');

const Login: React.FC = () => {
    const [keyboard, setKeyboard] = useState(false);

    function changeTextColor() {
        if (keyboard) {
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
                onKeyboardDidShow={() => setKeyboard(true)}
                onKeyboardDidHide={() => setKeyboard(false)}>
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
                    />
                    <ImageInput
                        name="password"
                        icon="lock"
                        placeholder="Password"
                        returnKeyType="next"
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
