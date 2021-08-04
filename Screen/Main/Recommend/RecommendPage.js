import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Platform, Dimensions, StatusBar, Animated, FlatList, Alert} from 'react-native';
import {COLORS, theme} from '../../../consts';
import themes from '../../../config/themes';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import {LinearGradient} from 'expo-linear-gradient';
import {BASE_URL} from '../../../constants';

const {width, height} = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const Backdrop = ({datas, scrollX}) => {
    return (
        <View
            style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}
        >
            <FlatList 
                data={datas.reverse()}
                keyExtractor={(item) => item._id + '-backdrop'}
                removeClippedSubviews={false}
                contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
                renderItem={({item, index}) => {
                    // if (!item.backdrop) {
                    //     return null;
                    // }
                    const translateX = scrollX.interpolate({
                        inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                        outputRange: [0, width]   
                    });
                    return (
                        <Animated.View 
                            removeClippedSubviews={false}
                            style={{
                                position: 'absolute',
                                width: translateX,
                                height,
                                overflow: 'hidden'
                            }}
                        >
                            <Image 
                                source={{uri: 'https://www.questionpro.com/blog/wp-content/uploads/2018/03/simple-random-sampling.jpg'}}
                                style={{
                                    width,
                                    height: BACKDROP_HEIGHT,
                                    position: 'absolute'
                                }}
                            />
                            
                        </Animated.View>
                    )
                }}
                
            />
            <LinearGradient 
                colors={['rgba(0, 0, 0, 0)', 'white']}
                style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: 'absolute',
                    bottom: 0
                }}
            />
        </View>
    );
};

const RecommendPage = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

    const [recoms, setRecoms] = useState([]);

    const navigation = useNavigation();

    const getRecoms = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/ncs`)
            setRecoms(data.results);
        } catch(err) {
            console.log(err)
        }
        
        // await axios.get('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs')
        //             .then(res => {
        //                 setRecoms(res.data.results);
        //                 console.log(res.data.results)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
    };

    useEffect(() => {
        getRecoms();
        setRecoms([{ key: 'empty-left'}, ...recoms, {key: 'empty-right'} ]);

    }, []);

    return (
        <View style={styles.container}>
            <Backdrop datas={recoms} scrollX={scrollX} />
            <StatusBar />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={recoms}
                keyExtractor={(item) => item._id}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment='start'
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                // if (!item.poster) {
                //     return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                // }

                const inputRange = [
                    (index - 2) * ITEM_SIZE,
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                ];

                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [100, 50, 100],
                    extrapolate: 'clamp',
                });

                return (
                    <View style={{ width: ITEM_SIZE }}>
                    <Animated.View
                        style={{
                        marginHorizontal: SPACING,
                        padding: SPACING * 2,
                        alignItems: 'center',
                        transform: [{ translateY }],
                        backgroundColor: 'white',
                        borderRadius: 34,
                        }}
                    >
                        <Image
                        source={require('../../../assets/bg4.png')}
                        style={styles.posterImage}
                        />
                        <Text style={{ fontSize: 24 }} numberOfLines={1}>
                        {item.title}
                        </Text>
                        {/* <Rating rating={item.rating} />
                        <Genres genres={item.genres} /> */}
                        {/* <Text style={{ fontSize: 12 }} numberOfLines={3}>
                            {item.genres_ids}
                        </Text> */}
                    </Animated.View>
                    </View>
                );
                }}
            />
        </View>
    );
};

export default RecommendPage;

const styles = StyleSheet.create({
    loadingContainer: {

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    paragraph: {

    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    showDetail: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        fontSize: theme.sizes.h3,
        backgroundColor: COLORS.main1,
        marginTop: 15
    }

    
})