import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import PostPage from '../Screen/Main/Post/PostPage';

const PostStack = createStackNavigator();

export default () => (
    <PostStack.Navigator
        screenOptions={{
            headerShown: true
        }}
        initialRouteName="Post"
    >
        <PostStack.Screen 
            name="PostPage" 
            component={PostPage}  
            options={{
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => alert('POSTPOST')}
                        style={{marginRight: 15}}
                    >
                        <FontAwesome 
                            size={24}
                            color='black'
                            name='pencil-square-o'
                        />
                    </TouchableOpacity>
                ),
              }}            
        />
        {/* <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Check" component={Check} /> */}
    </PostStack.Navigator>
)

;