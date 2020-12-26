import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Setting from '../Screen/Setting';
import ProfilePage from '../Screen/ProfileDetail/ProfilePage';
import Account from '../Screen/ProfileDetail/Account';
import Agreement from '../Screen/ProfileDetail/Agreement';
import Check from '../Screen/ProfileDetail/Check';
import SendMessage from '../Screen/ProfileDetail/SendMessage';

const ProfileStack = createStackNavigator();

export default () => (
    <ProfileStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Profile"
    >
        <ProfileStack.Screen name="ProfilePage" component={ProfilePage}  />
        <ProfileStack.Screen name="Setting" component={Setting} />
        {/* <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Check" component={Check} /> */}
        

    </ProfileStack.Navigator>
)

;