import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Recommend} from '../Screen/Main/Recommend/index';
import RecDetail from '../Screen/Main/Recommend/RecDetail';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name={"Recommend"}
                component={Recommend}
                options={{headerShown: false}}
            />
           <RecommendStack.Screen 
                name={"RecDetail"}
                component={RecDetail}
            />
        </RecommendStack.Navigator>
    );
};