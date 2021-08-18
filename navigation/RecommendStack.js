import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Recommend} from '../Screen/Main/Recommend/index';
import RecDetail from '../Screen/Main/Recommend/RecDetail';
import Recommend from '../Screen/Main/Recommend/Recommend';
import RecommendPage from '../Screen/Main/Recommend/RecommendPage';
import Detail from '../Screen/Detail';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name={"RecommendPage"}
                component={Recommend}
                options={{headerShown: false}}
            />
           <RecommendStack.Screen 
                name={"Detail"}
                component={Detail}
            />
        </RecommendStack.Navigator>
    );
};