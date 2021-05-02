import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import CreditCard from '../../components/CreditCard';
import PaymentDetailCard from '../../components/PaymentDetailCard';
import sizes from '../../config/sizes';
import Card from '../../Interfaces/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color_pallete from '../../config/color_pallete';
import {moderateScale} from 'react-native-size-matters';

const cards: Card[] = [
    {flag: 'VISA', balance: '4,532.21', number: '********9873', val: '12/23'},
    // eslint-disable-next-line prettier/prettier
    {flag: 'MASTERCARD', balance: '32.01', number: '********4316', val: '02/24'},
    {flag: 'ELO', balance: '203.12', number: '********3411', val: '12/28'},
];

const payments = [
    {title: 'Shopping', date: '20. june 2022', time: '2:20'},
    {title: 'Shop', date: '20. june 2022', time: '2:20'},
    {title: 'Shop', date: '20. june 2022', time: '2:20'},
    {title: 'Shopping', date: '20. june 2022', time: '2:20'},
];

const shadowColor = {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
};

const Cards: React.FC = () => {
    const [cardsList, setCardsList] = useState(cards);
    const [selectedCardIndex, setSelectedCard] = useState(0);

    const changeSelectedCardStyle = (index: number) => {
        if (index === selectedCardIndex) {
            return shadowColor;
        }
    };

    const changeCreditCardInFocus = () => {
        /*  const onPressDeleteWordButton = index => {
            if (wordsetObject.words.length) {
                setWordsetObj(modifiedObj => {
                    return {
                        ...modifiedObj,
                        words: modifiedObj.words.filter(
                            (pr, ind) => ind !== index,
                        ),,
                    };;
                });
            }
        }; */
        console.log('not implemented yet');
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {cardsList.map((card, index) => {
                    return (
                        <CreditCard
                            key={index}
                            index={index}
                            card={card}
                            onPress={() => changeCreditCardInFocus()}
                        />
                    );
                })}
            </ScrollView>
            <View style={styles.paymentsContainer}>
                <Text style={styles.paymentDetailsText}>Payment Details</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.paymentList}>
                    {payments.map((payment, index) => {
                        return (
                            <PaymentDetailCard
                                key={index}
                                style={{
                                    ...styles.card,
                                    ...changeSelectedCardStyle(index),
                                }}
                                onPress={() => setSelectedCard(index)}
                                data={{
                                    title: 'Shopping',
                                    date: '20. june 2022',
                                    time: '2:20',
                                }}
                                icon={
                                    <MaterialCommunityIcons
                                        size={18}
                                        name="cart"
                                        color="blue"
                                    />
                                }
                            />
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    card: {
        justifyContent: 'space-between',

        height: moderateScale(96),
        width: moderateScale(148),

        backgroundColor: color_pallete.grey_light,

        borderRadius: 12,

        padding: 12,
        marginBottom: 16,
    },

    paymentsContainer: {
        marginTop: 16,
    },

    paymentDetailsText: {
        fontFamily: 'Poppins-Bold',
        fontSize: sizes.subtitle,
        opacity: 0.7,
    },

    paymentList: {
        flex: 1,
        flexWrap: 'wrap',

        justifyContent: 'space-between',
    },
});

export default Cards;
