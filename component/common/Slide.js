import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { noticeApi, lectureApi, apiImage } from '../../api';
import * as WebBroswer from 'expo-web-browser';


const Slide = (src) => {

    // 왜 안되지
    const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

    return (
        <ScrollView>
            <View 
                style={styles.Container}
            >
                <Image
                    style={styles.MainSlide}
                    source={{uri: apiImage(src)}}
                />

            </View>
        </ScrollView>
    );
};

export default Slide;

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 300
    },

    MainSlide: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.4,
        position: "absolute"
    }
})