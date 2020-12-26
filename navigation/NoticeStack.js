import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import NoticeBbs from '../BBS/NoticeBbs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="home" component={Home} />
        {/* <Stack.Screen name="detail" component={Detail} /> */}
        <Stack.screen name="noticebbs" component={NoticeBbs} />
        {/* <Stack.Screen name="Ncs" component={NcsBbs}  /> */}
        {/* <Stack.Screen name="Psat" component={PsatBbs} /> */}
    </Stack.Navigator>
);
