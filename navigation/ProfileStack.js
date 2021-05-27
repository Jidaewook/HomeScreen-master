import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Setting from '../Screen/Setting';
import ProfilePage from '../Screen/ProfileDetail/ProfilePage';
import BackBtn from '../component/common/BackBtn';
import Privacy from '../Screen/Main/Setting/Privacy';
import Alarm from '../Screen/Main/Setting/Alarm';
import Frequency from '../Screen/Main/Setting/Frequency';
import Service from '../Screen/Main/Setting/Service';
import ProfileEdit from '../Screen/ProfileDetail/ProfileEdit';
import Detail from '../Screen/Detail';

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
        <ProfileStack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}}/>
        <ProfileStack.Screen name="Setting" component={Setting} />
        <ProfileStack.Screen name="Privacy" component={Privacy} />
        <ProfileStack.Screen name="Alarm" component={Alarm} />
        <ProfileStack.Screen name="Frequency" component={Frequency} />
        <ProfileStack.Screen name="Service" component={Service} />
        <ProfileStack.Screen name="ProfileEdit" component={ProfileEdit} />
        <ProfileStack.Screen name="Detail" component={Detail} />


    </ProfileStack.Navigator>
)

;