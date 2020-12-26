import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Recommend, Detail2, Detail} from '../Screen/Main/Recommend/index';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name={"Recommend"}
                component={Recommend}
            />
           <RecommendStack.Screen 
                name={"Detail"}
                component={Detail}
            />
            <RecommendStack.Screen 
                name={"Detail2"}
                component={Detail2}
            />
        </RecommendStack.Navigator>
    );
};