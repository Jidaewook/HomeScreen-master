import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigage('Notification')}
                title="Go to Notification"
            />
        </View>
    );
};

const NotificationScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigage('Back')}
                title="Go to Back"
            />
        </View>
    );
};

const Drawer = createDrawerNavigator();


export default Drawer;