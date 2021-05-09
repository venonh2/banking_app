import React, {useCallback, useRef, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color_pallete from '../config/color_pallete';
import sizes from '../config/sizes';

import Animated, {EasingNode} from 'react-native-reanimated';
import sleep from '../utils/sleep';

const LoanCard: React.FC = () => {
    const cardPosition = useRef(new Animated.Value(0)).current;
    const [showDetails, setShowDetails] = useState(false);

    // put loan card back to initial postion
    const moveCardUp = useCallback(() => {
        Animated.timing(cardPosition, {
            toValue: 0,
            duration: 300,
            easing: EasingNode.ease,
        }).start(({finished}) => {
            if (finished) {
                setShowDetails(false);
            }
        });
    }, [cardPosition]);

    // will move loan card down and show loan value
    const moveCardDown = useCallback(() => {
        sleep(200).then(() => {
            setShowDetails(true);
        });
        Animated.timing(cardPosition, {
            toValue: 30,
            duration: 600,
            easing: EasingNode.ease,
        }).start(({finished}) => {
            if (finished) {
                sleep(2200).then(() => {
                    moveCardUp();
                });
            }
        });
    }, [cardPosition, moveCardUp]);

    return (
        <React.Fragment>
            <Animated.View style={{...styles.container, top: cardPosition}}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.card}
                    onPress={() => moveCardDown()}>
                    <Text style={styles.loanText}>Loan</Text>
                    <MaterialIcons name="payments" size={28} color="#fff" />
                </TouchableOpacity>
            </Animated.View>
            {showDetails && (
                <View style={styles.loanDetails}>
                    <Text style={styles.pendingText}>Pending</Text>
                    <Text selectable style={styles.pendingValueText}>
                        R$ 345.92
                    </Text>
                </View>
            )}
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 168,
        marginTop: 36,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color_pallete.orange,
        height: 108,
        justifyContent: 'space-between',

        padding: 8,

        borderRadius: 16,

        borderWidth: 2,
        borderColor: color_pallete.orange,
    },

    loanText: {
        fontSize: sizes.subtitle,

        color: '#fff',

        fontFamily: 'Roboto-Medium',
    },

    loanDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,

        borderWidth: 0.8,
        borderColor: color_pallete.grey_light,

        marginHorizontal: 4,

        padding: 4,

        height: 38,

        zIndex: -1,
    },

    pendingText: {
        fontFamily: 'Roboto-Medium',
    },

    pendingValueText: {
        fontWeight: '700',
    },
});

export default LoanCard;
