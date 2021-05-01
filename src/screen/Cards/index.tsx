import React from 'react';
import {StyleSheet, View} from 'react-native';
import CreditCard from '../../components/CreditCard';

const Card: React.FC = () => {
    return (
        <View style={styles.container}>
            <CreditCard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default Card;
