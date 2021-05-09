import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import sizes from '../../config/sizes';

const transactions = [
    {
        image: require('../../assets/img1.jpg'),
        name: 'Pedro Augusto',
        value: '430.23',
        date: 'juny 20',
    },
    {
        image: require('../../assets/img2.jpg'),
        name: 'Henrique Pass',
        value: '40.56',
        date: 'juny 18',
    },
    {
        image: require('../../assets/img3.jpg'),
        name: 'Ana carolina',
        value: '158.13',
        date: 'juny 18',
    },
    {
        image: require('../../assets/img4.jpg'),
        name: 'Karen Camargo',
        value: '125',
        date: 'juny 17',
    },
    {
        image: require('../../assets/img3.jpg'),
        name: 'Joana skinsvinosk',
        value: '3023',
        date: 'juny 16',
    },
    {
        image: require('../../assets/img1.jpg'),
        name: 'Marcelo Augusto',
        value: '433',
        date: 'juny 15',
    },
    {
        image: require('../../assets/img2.jpg'),
        name: 'Felipe passos',
        value: '200',
        date: 'juny 13',
    },
    {
        image: require('../../assets/img4.jpg'),
        name: 'Eduarda marcela',
        value: '30.23',
        date: 'juny 12',
    },
];

const Transactions: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>juny 2022</Text>
            <Text style={styles.historyText}>
                History of all transactions from the following clients
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {transactions.map(({date, image, name, value}, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        style={styles.card}>
                        <Image style={styles.transactionImage} source={image} />
                        <View style={styles.transactionDetails}>
                            <Text>R$ {value}</Text>
                            <View style={styles.transactionOwner}>
                                <Text>Received from {name}</Text>
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
export default Transactions;
