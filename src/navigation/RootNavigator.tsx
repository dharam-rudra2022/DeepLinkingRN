import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/HomeScreen';

import { ActivityIndicator } from 'react-native';

const linking = {
    prefixes: ['deeplinkapp://'],
    config:{
        initialRouteName:'Home',
        screens:{
            Home: {
                path:'home'
            },
            Details: {
                path:'details/:personId'
            }
        }
    }
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer
        linking={linking}
        fallback={<ActivityIndicator color="blue" size="large"/>}
        >
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="Details" component={DetailsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
