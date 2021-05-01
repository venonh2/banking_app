import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import sizes from '../config/sizes';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color_pallete from '../config/color_pallete';
import LoanCard from './loanCard';

const Body: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.activitiesContainer}>
                <Text style={styles.activitiesTitle}>Activities</Text>

                <LoanCard />
            </View>
            <View style={styles.reportContainer}>
                <Text style={styles.reportTitle}>Monthly Report</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingHorizontal: 12,

        marginTop: 72,
    },

    activitiesContainer: {
        flex: 1,
    },

    reportContainer: {
        flex: 1,
    },

    activitiesTitle: {
        fontFamily: 'Poppins-Bold',

        fontSize: sizes.title,
        opacity: 0.7,
    },

    reportTitle: {
        alignSelf: 'flex-end',
        fontFamily: 'Roboto-Medium',

        opacity: 0.7,
        marginTop: 8,
    },
});

export default Body;
