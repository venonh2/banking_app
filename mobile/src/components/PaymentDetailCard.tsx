import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import color_pallete from '../config/color_pallete';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TouchableOpacityProps {
    data: {
        title: string;
        date: string;
        time: string;
    };
    icon: JSX.Element;
}

const PaymentDetailCard: React.FC<Props> = ({data, icon, ...rest}) => {
    const {date, time, title} = data;

    return (
        <TouchableOpacity activeOpacity={0.6} {...rest}>
            <View style={styles.rowAndSpace}>
                <Text style={styles.titleText}>{title}</Text>
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={16}
                    color="#111"
                />
            </View>
            <View style={styles.rowAndSpace}>
                <View>
                    <Text>{date}</Text>
                    <Text>{time}</Text>
                </View>
                <View style={styles.iconContainer}>{icon}</View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rowAndSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titleText: {
        fontFamily: 'Roboto-Medium',
    },

    iconContainer: {alignSelf: 'center', marginRight: 4},
});

export default PaymentDetailCard;
