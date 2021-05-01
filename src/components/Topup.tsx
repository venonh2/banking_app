import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import color_pallete from '../config/color_pallete';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sizes from '../config/sizes';

const Topup: React.FC = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <MaterialCommunityIcons
                name="chevron-up-box-outline"
                size={32}
                color="#fff"
            />
            <Text style={styles.topupText}>Topup</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: color_pallete.blue_light,
        height: 126,
        width: 168,
        top: '50%',

        padding: 8,

        borderRadius: 32,

        borderWidth: 2,
        borderColor: color_pallete.blue_dark,

        zIndex: -2,
    },

    topupText: {
        color: '#fff',

        fontSize: sizes.subtitle,
        fontFamily: 'Roboto-Medium',
    },
});
//chevron-up-box-outline
export default Topup;
