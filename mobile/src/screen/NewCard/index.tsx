import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import sizes from '../../config/sizes';

import LinearGradient from 'react-native-linear-gradient';

const NewCard: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <View style={styles.container}>
                <Text style={styles.registerTitle}>Register Credit Card</Text>
                <LinearGradient
                    colors={['#f57c00', '#f57c00', '#bb4d00']}
                    style={styles.card}>
                    <TouchableOpacity style={styles.spaceBetween}>
                        <View style={styles.rowAndSpace}>
                            <View>
                                <Text style={styles.currentText}>
                                    Card number
                                </Text>
                                <Text style={styles.balanceText}>
                                    00.000.000.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.cardNumberText}>Flag</Text>
                                <Text style={styles.flagText}>aaa</Text>
                            </View>
                        </View>
                        <View style={styles.rowAndSpace}>
                            <View>
                                <Text style={styles.cardNumberText}>
                                    Expiration date
                                </Text>
                                <Text style={styles.flagText}>aaaaa</Text>
                            </View>
                            <View>
                                <Text style={styles.validDateText}>CVC</Text>
                                <Text style={styles.flagText}>232</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(16),

        marginTop: 48,
    },

    card: {
        height: moderateScale(162),
        borderRadius: 32,
        padding: 18,
    },

    registerTitle: {
        fontFamily: 'Poppins-Bold',

        fontSize: sizes.title,
        opacity: 0.7,
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
export default NewCard;
