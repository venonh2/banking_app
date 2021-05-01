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

const BottomTab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                tabBarOptions={{
                    keyboardHidesTabBar: true,
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
                }}>
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{unmountOnBlur: true}}
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
        <TopTab.Navigator>
            <TopTab.Screen name="Cards" component={Cards} />
            <TopTab.Screen name="Deposits" component={Deposits} />
            <TopTab.Screen name="Transactions" component={Transactions} />
        </TopTab.Navigator>
    );
}

export default Routes;
