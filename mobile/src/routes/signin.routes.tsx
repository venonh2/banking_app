import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// screens
import Home from './signed.routes'; // within this components we have the aplication tabs
import Login from '../screen/Login';

const Authentication = () => {
    //
    const renderMenu = () => {
        return (
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
        );
    };

    const renderLogin = () => {
        return (
            <React.Fragment>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
            </React.Fragment>
        );
    };

    return (
        <Stack.Navigator screenOptions={{animationEnabled: false}}>
            {false ? renderMenu() : renderLogin()}
        </Stack.Navigator>
    );
};

export default Authentication;
