import React from 'react';

import Authentication from './signin.routes';
import {NavigationContainer} from '@react-navigation/native';

function Routes() {
    return (
        <NavigationContainer>
            <Authentication />
        </NavigationContainer>
    );
}

export default Routes;
