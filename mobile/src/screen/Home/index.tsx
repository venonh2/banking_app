import React from 'react';
import {StyleSheet, View} from 'react-native';
import Body from '../../components/Body';
import Header from '../../components/Header';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Body />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Home;
