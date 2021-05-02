import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import sizes from '../config/sizes';
import Card from '../Interfaces/Card';

const gradients = {
    VISA: ['#7953d2', '#4527a0', '#000070'],
    MASTERCARD: ['#f57c00', '#f57c00', '#bb4d00'],
    ELO: ['#63a4ff', '#1976d2', '#004ba0'],
};

interface Props extends TouchableOpacityProps {
    index: number;
    card: Card;
}

// ['#4c669f', '#3b5998', '#192f6a']
const CreditCard: React.FC<Props> = ({card, index, ...rest}) => {
    const marginTop = index === 0 ? 0 : -108;
    return (
        <React.Fragment>
            <LinearGradient
                colors={gradients[card.flag]}
                style={{
                    ...styles.card,
                    marginTop: marginTop,
                }}>
                <TouchableOpacity style={styles.spaceBetween} {...rest}>
                    <View style={styles.rowAndSpace}>
                        <View>
                            <Text style={styles.currentText}>
                                Current balance
                            </Text>
                            <Text style={styles.balanceText}>
                                R$ {card.balance}
                            </Text>
                        </View>
                        <Text style={styles.flagText}>{card.flag}</Text>
                    </View>
                    <View style={styles.rowAndSpace}>
                        <Text style={styles.cardNumberText}>{card.number}</Text>
                        <Text style={styles.validDateText}>{card.val}</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    card: {
        height: moderateScale(162),

        borderRadius: 32,
        padding: 18,
    },

    spaceBetween: {
        justifyContent: 'space-between',
        flex: 1,
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
