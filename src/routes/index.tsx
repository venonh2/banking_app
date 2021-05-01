import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screen/Home';
import Cards from '../screen/Cards';
import NewCard from '../screen/NewCard';

//top tabs
import Deposits from '../screen/Deposits';
import Transactions from '../screen/Transactions'

const BottomTab = createBottomTabNavigator();

function Routes() {

    return (
        <NavigationContainer>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="CardHome" component={TopTabs} />
            <BottomTab.Screen name="NewCard" component={NewCard} />
        </NavigationContainer>
    )
}

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <React.Fragment>
      <TopTab.Screen name="Cards" component={Cards} />
      <TopTab.Screen name="Deposits" component={Deposits} />
      <TopTab.Screen name="Transactions" component={Transactions} />
    </React.Fragment>
  );
}

export default Routes;
