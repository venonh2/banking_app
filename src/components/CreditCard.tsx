import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import sizes from '../config/sizes';

interface Card {
    flag: string;
    balance: string;
    val: string;
    number: string;
}

const cards: Card[] = [
    {flag: 'VISA', balance: '4,532.21', number: '********9873', val: '12/23'},
    // eslint-disable-next-line prettier/prettier
    {flag: 'MASTERCARD', balance: '32.01', number: '********4316', val: '02/24'},
    {flag: 'VISA', balance: '956.21', number: '********0075', val: '08/26'},
];

// ['#4c669f', '#3b5998', '#192f6a']
const CreditCard: React.FC = () => {
    return (
        <LinearGradient
            colors={['#7953d2', '#4527a0', '#000070']}
            style={styles.container}>
            <View style={styles.rowAndSpace}>
                <View>
                    <Text style={styles.currentText}>Current balance</Text>
                    <Text style={styles.balanceText}>R$ 4,543.53</Text>
                </View>
                <Text style={styles.flagText}>MASTERCARD</Text>
            </View>
            <View style={styles.rowAndSpace}>
                <Text style={styles.cardNumberText}>3242342424234</Text>
                <Text style={styles.validDateText}>22/22</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        height: moderateScale(162),
        justifyContent: 'space-between',

        borderRadius: 32,
        padding: 18,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19,
    },

    rowAndSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    currentText: {fontSize: sizes.text, color: '#fff'},
    balanceText: {color: '#fff', fontSize: sizes.subtitle, fontWeight: '700'},
    flagText: {color: '#fff', fontSize: sizes.text, fontFamily: 'Poppins-Bold'},
    cardNumberText: {color: '#fff'},
    validDateText: {color: '#fff'},
});

export default CreditCard;
