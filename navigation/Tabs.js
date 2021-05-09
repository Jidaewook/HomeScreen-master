import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/Stack';
import PostStack from '../navigation/PostStack';
import RecommendStack from '../navigation/RecommendStack';
import ProfileStack from '../navigation/ProfileStack';
import {Feather} from '@expo/vector-icons';
import {Platform} from 'react-native';
import themes from '../config/themes';
import { color } from 'react-native-reanimated';

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

const hideTabBarComponents = [
    'Recommend',
]

export default () => {
    

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "List") {
                        iconName = "server";
                    } else if (route.name === "Recommend") {
                        iconName = "tv";
                    } else if (route.name === "Profile") {
                        iconName = "user"
                    }
                    return (
                        <Feather 
                            name={iconName}
                            color={focused ? themes.colors.basic : themes.colors.lightgray}
                            size={24}
                        />  
                    );
                }
            })}
            
            tabBarOptions={{
                activeTintColor: themes.colors.basic,
                inactiveTintColor: themes.colors.lightgray,
                showLabel: true,
                labelStyle: {
                    fontSize: 12, 
                    marginTop: -10                
                },
            }}


        >
                        
            

            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Recommend" component={RecommendStack}/>
            <Tabs.Screen name="List" component={PostStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} />

        </Tabs.Navigator>
    );
}; 