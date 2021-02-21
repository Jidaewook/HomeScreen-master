import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';
import NoticeBbs from '../Screen/Main/Detail/NoticeBbs';
import NcsBbs from '../Screen/Main/Detail/NcsBbs';
import PsatBbs from '../Screen/Main/Detail/PsatBbs';
import CommunicationList from '../Screen/Main/Detail/NcsBbsList/CommunicationList';
import Setting from '../Screen/Setting';
import BackBtn from '../component/common/BackBtn';

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
                    headerShown: false
                }}
                name="Home" component={Home} 
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
                name="PsatBbs" component={PsatBbs} 
            />
            
        </HomeStack.Navigator>
    );
};
