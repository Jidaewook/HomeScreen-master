import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
// import Home from '../Screen/Home';
import Home from '../Screen/Main/Home/Home';
import Detail from '../Screen/Detail';
import NoticeBbs from '../Screen/Main/Detail/NoticeBbs';
import NcsBbs from '../Screen/Main/Detail/NcsBbs';
import PsatBbs from '../Screen/Main/Detail/PsatBbs';
import CommunicationList from '../Screen/Main/Detail/NcsBbsList/CommunicationList';
import MathList from '../Screen/Main/Detail/NcsBbsList/MathList';
import Setting from '../Screen/Setting';
import BackBtn from '../component/common/BackBtn';
import Header from '../component/common/Header';

import {Text} from 'galio-framework';

const HomeStack = createStackNavigator();

export default () => {
    return ( 
        <HomeStack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTransparent: false,
                headerBackImage: () => <BackBtn />
            }}
            initialRouteName="Main"
        >
            <HomeStack.Screen 
                options={{
                    header: ({navigation, scene}) => (
                        <Header 
                            search
                            options
                        />
                            
                    ),
                    cardStyle: {backgroundColor: '#f8f9fe'}

                }}
                name="Home" 
                component={Home} 
                
            />
            <HomeStack.Screen name="Detail" component={Detail} />
            <HomeStack.Screen name="Setting" component={Setting}  />
            <HomeStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                        // backgroundColor: "white"
                    }
                }}
                name="NoticeBbs" component={NoticeBbs} 
            />
            <HomeStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                        // backgroundColor: "white"
                    }
                }}
                name="NcsBbs" component={NcsBbs} 
            />
                <HomeStack.Screen 
                    options={{
                        title: "",
                        headerShown: true,
                        headerStyle: {
                            height: 100,
                        }
                    }}
                    name="CommunicationList" component={CommunicationList} 
                />
                <HomeStack.Screen 
                    options={{
                        title: "",
                        headerShown: true,
                        headerStyle: {
                            height: 100,
                        }
                    }}
                    name="MathList" component={MathList} 
                />
            <HomeStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                    }
                }}
                name="PsatBbs" component={PsatBbs} 
            />
            
        </HomeStack.Navigator>
    );
};
