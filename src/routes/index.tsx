import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screen/Home';
import Cards from '../screen/Cards';
import NewCard from '../screen/NewCard';

//top tabs
import Deposits from '../screen/Deposits';
import Transactions from '../screen/Transactions';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color_pallete from '../config/color_pallete';

const selectTabIcon = (name: string) => {
    switch (name) {
        case 'Home':
            return 'account-circle-outline';
        case 'Cards':
            return 'credit-card-outline';
        case 'New':
            return 'plus-circle-outline';
        default:
            return 'list';
    }
};

const BottomTab = createBottomTabNavigator();
const bottom_tab_style = {
    showLabel: false,
    //keyboardHidesTabBar: true,
    style: {
        backgroundColor: 'grey',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    activeTintColor: '#fff',
    adaptive: true,
    labelStyle: {
        fontSize: 16,
    },
};

function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: () => {
                        let icon_name = selectTabIcon(route.name);
                        let icon_color = color_pallete.blue_dark;
                        return (
                            <MaterialCommunityIcons
                                name={icon_name}
                                size={32}
                                color={icon_color}
                            />
                        );
                    },
                })}
                tabBarOptions={bottom_tab_style}>
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        unmountOnBlur: true,
                    }}
                />
                <BottomTab.Screen name="Cards" component={TopTabs} />
                <BottomTab.Screen name="New" component={NewCard} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

// top tabs of the applications
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
    return (
        <TopTab.Navigator
            tabBarOptions={{
                labelStyle: {fontSize: 11, fontFamily: 'Poppins-Bold'},
            }}>
            <TopTab.Screen
                name="Cards"
                options={{tabBarLabel: 'My Cards'}}
                component={Cards}
            />
            <TopTab.Screen name="Deposits" component={Deposits} />
            <TopTab.Screen name="Transactions" component={Transactions} />
        </TopTab.Navigator>
    );
}

export default Routes;
