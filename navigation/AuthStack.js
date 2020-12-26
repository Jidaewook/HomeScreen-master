import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Signin, Signup, Forgot} from '../Screen/auth/index';

import MainStack from '../navigation/Stack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SigninScreen"
    >
        <Stack.Screen name="SigninScreen" component={Signin}  />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="ForgotpasswordScreen" component={Forgot} />
        {/* <Stack.Screen name="SplashScreen" component={Splash} /> */}
        <Stack.Screen name="MainStack" component={MainStack} />

    </Stack.Navigator>
);