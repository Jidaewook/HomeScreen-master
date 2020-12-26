import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';
import Setting from '../Screen/Setting';
import AuthStack from '../navigation/AuthStack';
import Tabs from './Tabs';

import NoticeBbs from '../BBS/NoticeBbs';
import NcsBbs from '../BBS/NcsBbs';
import PsatBbs from '../BBS/PsatBbs';

const HomeStack = createStackNavigator();

export default () => {
    return ( 
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Main"
        >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Detail" component={Detail} />
            <HomeStack.Screen name="Setting" component={Setting}  />
            {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
            {/* <Stack.Screen name="Ncs" component={NcsBbs}  /> */}
            {/* <Stack.Screen name="Psat" component={PsatBbs} /> */}
        </HomeStack.Navigator>
    );
};
