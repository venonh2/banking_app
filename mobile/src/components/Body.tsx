import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import sizes from '../config/sizes';

import LoanCard from './loanCard';
import Topup from './Topup';

import ReportCard from './ReportCard';
import ActionSheet from 'react-native-actions-sheet';
import RequestsList from './RequestsList';

const Body: React.FC = () => {
    const actionSheetRef: React.RefObject<ActionSheet> = useRef<ActionSheet>(
        null,
    );

    return (
        <View style={styles.container}>
            <View style={styles.activitiesContainer}>
                <Text style={styles.activitiesTitle}>Activities</Text>
                <LoanCard />
                <Topup />
            </View>
            <View style={styles.reportContainer}>
                <Text style={styles.reportTitle}>Monthly Report</Text>
                <ReportCard onPress={() => actionSheetRef.current?.show()} />
            </View>
            <RequestsList actionSheetRef={actionSheetRef} />
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
