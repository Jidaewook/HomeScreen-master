import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Setting from '../Screen/Setting';
import ProfilePage from '../Screen/ProfileDetail/ProfilePage';
import BackBtn from '../component/common/BackBtn';

const ProfileStack = createStackNavigator();

export default () => (
    <ProfileStack.Navigator
        screenOptions={{
            headerBackTitleVisible: false,
            headerTransparent: false,
            headerBackImage: () => <BackBtn />
        }}
        initialRouteName="Profile"
    >
        <ProfileStack.Screen name="ProfilePage" component={ProfilePage}  />
        <ProfileStack.Screen name="Setting" component={Setting} />
        
    </ProfileStack.Navigator>
)

;