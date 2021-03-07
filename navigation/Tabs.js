import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/Stack';
import PostStack from '../navigation/PostStack';
import RecommendStack from '../navigation/RecommendStack';
import ProfileStack from '../navigation/ProfileStack';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

export default () => {
    

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Home") {
                        iconName += "home";
                    } else if (route.name === "List") {
                        iconName += "list";
                    } else if (route.name === "Recommend") {
                        iconName += "bulb";
                    } else if (route.name === "Profile") {
                        iconName += "contact"
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "green" : "grey"}
                            size={28}
                        />  
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false
            }}
        >
                        

            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="List" component={PostStack} />
            <Tabs.Screen name="Recommend" component={RecommendStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} />

        </Tabs.Navigator>
    );
}; 