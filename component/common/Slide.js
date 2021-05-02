import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { noticeApi, lectureApi, apiImage } from '../../api';
import * as WebBroswer from 'expo-web-browser';
import { ImageBackground } from 'react-native';
import Genres from '../../component/common/Genres';


const Slide = ({src, title, desc, genres}) => {

    // 왜 안되지
    const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

    return (
        <ScrollView>
            <View 
                style={styles.Container}
            >
                <ImageBackground
                    style={styles.MainSlide}
                    source={{uri: src}}
                />
                <View style={{flexDirection: 'row', width: '100%', height: '100%'}}>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: src}}
                    />
                    <View style={{width: '100%', height: '75%'}}>
                        <Text style={styles.SlideTitle}>
                            {title.slice(0,10)}
                        </Text>
                        <Text style={styles.SlideDesc}>
                            {desc}
                        </Text>
                        {/* <Genres>{genres}</Genres> */}
                    </View>
                </View>
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
        height: '55%',
        backgroundColor: 'black',
        opacity: 0.4,
        position: "absolute"
    },
    thumbnail: {
        width: '40%',
        height: '48%',
        margin: 10,
        resizeMode: 'stretch'
    },
    SlideTitle: {
        width: '30%',
        marginTop: 10,
        marginLeft: 100,
        fontSize: 16
    },
    SlideDesc: {
        marginTop: 10,
        width: '50%',
        height: '50%',
        backgroundColor: 'gray'
    }

})