import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import color_pallete from '../config/color_pallete';
import sizes from '../config/sizes';
const {height} = Dimensions.get('screen');

interface Props {
    actionSheetRef: React.RefObject<ActionSheet>;
}

const requests = [
    {
        image: require('../assets/img1.jpg'),
        name: 'Pedro Augusto',
        email: 'pedro.augusto@gmail.com',
    },
    {
        image: require('../assets/img2.jpg'),
        name: 'Henrique Pass',
        email: 'pass-henrique@gmail.com',
    },
    {
        image: require('../assets/img3.jpg'),
        name: 'Ana carolina',
        email: 'Carol23@hotmail.com',
    },
    {
        image: require('../assets/img4.jpg'),
        name: 'Karen Camargo',
        email: 'caamrgokaren@gmail.com',
    },
    {
        image: require('../assets/img3.jpg'),
        name: 'Joana skinsvinosk',
        email: 'skinsvinosk@hotmail.com',
    },
    {
        image: require('../assets/img1.jpg'),
        name: 'Marcelo Augusto',
        email: 'marcelo.augusto@gmail.com',
    },
    {
        image: require('../assets/img2.jpg'),
        name: 'Felipe passos',
        email: 'passos.augusto@gmail.com',
    },
    {
        image: require('../assets/img4.jpg'),
        name: 'Eduarda marcela',
        email: 'eduarda23marcelo@hotmail.com',
    },
];

const RequestsList: React.FC<Props> = ({actionSheetRef}) => {
    return (
        <ActionSheet
            ref={actionSheetRef}
            onPositionChanged={() => console.log('hasReachedTop')}>
            <View
                style={{
                    ...styles.container,
                    height: height / 2,
                }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {requests.map(({image, name, email}, index) => {
                        return (
                            <View key={index} style={styles.requestCard}>
                                <Image
                                    source={image}
                                    style={styles.requestsImage}
                                />
                                <View style={styles.requestDetails}>
                                    <Text
                                        selectable
                                        style={styles.requestNameText}>
                                        {name}
                                    </Text>
                                    <Text
                                        selectable
                                        style={styles.requestEmailText}>
                                        {email}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </ActionSheet>
    );
};

const styles = StyleSheet.create({
    container: {padding: 16},

    requestCard: {
        flex: 1,
        flexDirection: 'row',

        marginBottom: 2,

        padding: 4,

        borderWidth: 0.6,
        borderRadius: 8,
    },

    requestsImage: {
        height: 48,
        width: 48,

        borderRadius: 50,

        marginRight: 8,
    },

    requestDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },

    requestNameText: {
        fontSize: sizes.subtitle,
        fontFamily: 'Poppins-Bold',
        opacity: 0.7,
    },
    requestEmailText: {color: color_pallete.blue},
});

export default RequestsList;
