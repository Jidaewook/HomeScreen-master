import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Tabs from './navigation/Tabs';
import Stack from "./navigation/Stack";
import AuthStack from './navigation/AuthStack';
import SigninScreen from './Screen/auth/SigninScreen';

const cacheImages = images =>
    images.map(image => {
        if (typeof image === "string") {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
            require("./assets/splash.png")
        ]);
        const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
        return Promise.all([...images, ...fonts]);
    };
    const onFinish = () => setIsReady(true);

    useEffect(() => {
        checkAuth()
        // console.log('TTTTTTTTTTTTT', AsyncStorage.getItem('token'))
    })

    const checkAuth = async () => {
        if (AsyncStorage.getItem('token')) {
           await setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    } 

    return isReady ? (
        
        <NavigationContainer>
            {isAuth ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={console.error}
        />
    );
}