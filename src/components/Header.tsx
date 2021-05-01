import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import color_pallete from '../config/color_pallete';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const user_image = require('../assets/user_image.jpg');

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <MaterialCommunityIcons
                    name="format-list-bulleted-square"
                    size={24}
                    color="#fff"
                />
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="#fff"
                />
            </View>
            <Text style={styles.welcomeText}> Bem vindo(a) novamente</Text>
            <View style={styles.userCard}>
                <View style={styles.userImageCard}>
                    <Image
                        source={user_image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.username}>Brendow E.</Text>
                    <Text style={styles.balance}>R$ 2.3493.00</Text>
                    <Text style={styles.balanceDescription}>
                        Saldo disponível
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color_pallete.blue_dark,
        height: moderateScale(168),
        borderBottomEndRadius: 48,
        borderBottomStartRadius: 48,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        paddingHorizontal: 12,
        paddingTop: 4,
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    welcomeText: {fontWeight: '700', color: '#fff'},

    userCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },

    userImageCard: {
        height: 132,
        width: 96,
        borderRadius: 16,

        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    image: {
        height: 132,
        width: 96,
        borderRadius: 16,
    },

    userDetails: {marginRight: 32},

    username: {fontSize: 16, color: '#fff'},

    balance: {fontSize: 22, fontWeight: '700', color: '#fff'},

    balanceDescription: {fontSize: 10, color: '#fff'},
});

export default Header;
