import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import color_pallete from '../config/color_pallete';
import sizes from '../config/sizes';

const requests = [
    {image: require('../assets/img1.jpg')},
    {image: require('../assets/img2.jpg')},
    {image: require('../assets/img3.jpg')},
];

interface Props extends TouchableOpacityProps {}

const ReportCard: React.FC<Props> = ({...rest}) => {
    return (
        <View style={styles.container}>
            <View style={styles.safeCard}>
                <MaterialCommunityIcons name="safe" size={38} color="#fff" />
            </View>
            <TouchableOpacity
                style={styles.requestsCard}
                activeOpacity={0.96}
                {...rest}>
                <View style={styles.requestNumberContainer}>
                    <Text selectable style={styles.requestNumberText}>
                        18
                    </Text>
                    <Text style={styles.requestsText}>Requests</Text>
                </View>
                <View style={styles.requestsChannelContainer}>
                    <Text style={styles.requestsChannelText}>
                        Requests channel
                    </Text>
                    <View style={styles.requestsListContainer}>
                        {requests.map(({image}, index) => {
                            const marginLleft = index === 0 ? 0 : -32;
                            return (
                                <Image
                                    key={index}
                                    source={image}
                                    style={{
                                        ...styles.requestsImage,
                                        marginLeft: marginLleft,
                                    }}
                                />
                            );
                        })}
                        <View style={styles.moreRequestsIcon}>
                            <Text style={styles.moreRequests}>+17</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        marginTop: 12,
    },

    safeCard: {
        borderWidth: 0.8,
        borderColor: color_pallete.blue_dark,
        borderRadius: 16,
        height: 72,
        width: 132,
        backgroundColor: color_pallete.blue_dark,

        alignItems: 'center',
    },

    requestsCard: {
        justifyContent: 'space-between',
        borderRadius: 24,
        width: 132,
        backgroundColor: '#fff',
        height: 242,
        marginTop: -32,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        padding: 8,
    },

    requestNumberText: {
        fontSize: sizes.title,
        fontWeight: '700',
        marginTop: 32,
    },

    requestNumberContainer: {
        alignItems: 'center',
    },

    requestsText: {
        fontSize: sizes.subtitle,
    },

    requestsChannelContainer: {
        marginBottom: 32,
    },

    requestsListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    requestsChannelText: {
        opacity: 0.6,
        fontFamily: 'Roboto-Medium',
    },

    moreRequests: {
        fontSize: sizes.small_text,
        color: '#fff',
    },

    moreRequestsIcon: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 24,
        width: 24,
        backgroundColor: '#111',
        borderRadius: 50,
    },

    requestsImage: {
        height: 24,
        width: 24,
        borderRadius: 50,
    },
});

export default ReportCard;
