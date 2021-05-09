import React, {useCallback, useState} from 'react';
import {
    Dimensions,
    Image,
    ImageSourcePropType,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import color_pallete from '../config/color_pallete';
import sizes from '../config/sizes';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('screen');

interface Props {
    actionSheetRef: React.RefObject<ActionSheet>;
}

interface Request {
    image: ImageSourcePropType;
    name: string;
    email: string;
}

const requests: Request[] = [
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
    //if the user refuse to accept the request remove it from the list

    const [requestsList, setRequestsList] = useState<Request[]>(requests);

    // like the name says, remove request from list, like if user had accepted it
    const removeRequestFromList = useCallback(
        (request_index: number) => {
            if (
                request_index === requestsList.length - 1 ||
                !requestsList.length
            ) {
                return;
            }

            const newList = requestsList.filter(
                (_, index) => index !== request_index,
            );

            setRequestsList(newList);
        },
        [requestsList],
    );

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
                    {requestsList.map(({image, name, email}, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.6}
                                style={styles.requestCard}>
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
                                <View style={styles.actionsContainer}>
                                    <MaterialCommunityIcons
                                        name="plus-circle-outline"
                                        size={32}
                                        color={color_pallete.grey_light}
                                        onPress={() =>
                                            removeRequestFromList(index)
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
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
        marginBottom: 4,

        backgroundColor: '#fafafa',
        padding: 4,

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
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default RequestsList;
