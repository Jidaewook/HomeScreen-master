import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

import PostPage from '../Screen/Main/Post/PostPage';

const PostStack = createStackNavigator();

export default () => (
    <PostStack.Navigator
        screenOptions={{
            headerShown: true
        }}
        initialRouteName="Post"
    >
        <PostStack.Screen name="PostPage" component={PostPage}  />
        {/* <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Check" component={Check} /> */}
    </PostStack.Navigator>
)

;