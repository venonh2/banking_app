import React, {useState} from 'react';
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
import {View} from 'react-native';

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
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopColor: '#fff',
    },
    activeTintColor: '#fff',
    adaptive: true,
    labelStyle: {
        fontSize: 16,
    },
};

function Routes() {
    const [selectedTab, setSelectedTab] = useState('');

    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: () => {
                        let icon_name = selectTabIcon(route.name);
                        let icon_color =
                            selectedTab !== route.name
                                ? color_pallete.blue_dark
                                : '#FF9800';
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
                    listeners={{
                        tabPress: () => setSelectedTab('Home'),
                    }}
                />
                <BottomTab.Screen
                    name="Cards"
                    component={TopTabs}
                    listeners={{
                        tabPress: () => setSelectedTab('Cards'),
                    }}
                />
                <BottomTab.Screen
                    name="New"
                    component={NewCard}
                    listeners={{
                        tabPress: () => setSelectedTab('New'),
                    }}
                />
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
