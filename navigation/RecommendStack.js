import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Recommend, Detail2} from '../Screen/Main/Recommend/index';
import RecDetail from '../Screen/RecDetail';

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
                name={"Detail"}
                component={RecDetail}
                

            />
            <RecommendStack.Screen 
                name={"Detail2"}
                component={Detail2}
            />
        </RecommendStack.Navigator>
    );
};