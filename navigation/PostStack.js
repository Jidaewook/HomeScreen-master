import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostPage from '../Screen/Main/Post/PostPage';
import PostDatail from '../Screen/Main/Post/PostDetail';
import BackBtn from '../component/common/BackBtn';

const PostStack = createStackNavigator();

export default () => (
    <PostStack.Navigator
        screenOptions={{
            headerBackTitleVisible: false,
            headerTransparent: false,
            headerBackImage: () => <BackBtn />
        }}
        initialRouteName="PostScreen"
    >
        <PostStack.Screen 
            name="PostPage" 
            component={PostPage}             
        />
        <PostStack.Screen 
            name="PostDetail"
            component={PostDatail}
        />
       
    </PostStack.Navigator>
);
