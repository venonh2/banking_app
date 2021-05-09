import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import sizes from '../../config/sizes';

const deposits = [
    {
        place: 'Shopping palladium',
        value: '0.23',
        date: 'juny 20',
    },
    {
        place: 'Pix',
        value: '140.56',
        date: 'juny 18',
    },
    {
        place: 'Bank of brasil - central',
        value: '108.13',
        date: 'juny 18',
    },
    {
        place: 'Shopping palladium',
        value: '125',
        date: 'juny 17',
    },
    {
        place: 'Bank of brasil - central',
        value: '3023',
        date: 'juny 16',
    },
    {
        place: 'Shopping palladium',
        value: '433',
        date: 'juny 15',
    },
    {
        place: 'Pix',
        value: '200',
        date: 'juny 13',
    },
    {
        place: 'Shopping palladium',
        value: '30.23',
        date: 'juny 12',
    },
];

const Deposits: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>juny 2022</Text>
            <Text style={styles.historyText}>History of all deposits</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {deposits.map(({date, place, value}, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        style={styles.card}>
                        <View style={styles.transactionDetails}>
                            <Text>R$ {value}</Text>
                            <View style={styles.transactionOwner}>
                                <Text>{place}</Text>
                                <Text>{date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    dateText: {
        alignSelf: 'flex-end',
        fontSize: sizes.subtitle,
    },

    historyText: {
        fontFamily: 'Roboto-Medium',

        marginVertical: 24,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,

        marginBottom: 4,

        height: 72,
        borderRadius: 12,
        backgroundColor: '#fafafa',
    },

    transactionImage: {
        height: 48,
        width: 48,

        borderRadius: 12,

        marginRight: 8,
    },

    transactionDetails: {flex: 1, justifyContent: 'space-between'},

    transactionOwner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default Deposits;
