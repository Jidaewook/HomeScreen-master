import React, {useState, useEffect} from 'react';
import {View, Image, Text, StatusBar, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';


import Slide from '../component/common/Slide';
import Category from '../component/common/Category';
import Title from '../component/common/Title';
import Likes from '../component/common/Likes';
import Count from '../component/common/Count';
import Desc from '../component/common/Desc';
import DetailCard from '../component/common/DetailCard';
import themes from '../config/themes';
import {lectureApi, noticeApi} from '../api';
import {Ionicons} from '@expo/vector-icons';


const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Detail = ({route: {params: {id, category}}}) => {

    
    const [result, setResult] = useState({
        loading: true,
        data: {}, 
        dataError: null
    });

    const getData = async () => {
        console.log("xxxxxxxxx", category)

        if (category === "notice") {
            const [notice, noticeError] = await noticeApi.noticeDetail(id)
            setResult({
                loading: false,
                data: notice,
                dataError: noticeError
            })
        } else if (category === "ncs") {
            const [ncs, ncsError] = await lectureApi.ncsDetail(id);
            console.log("ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ", ncs)

            setResult({
                loading: false,
                data: ncs,
                dataError: ncsError
            })
        } else if (category === "psat") {
            const [psat, psatError] = await lectureApi.psatDetail(id);
            setResult({
                loading: false,
                data: psat,
                dataError: psatError
            })
        };

        // setLectures({
            
        // });

        // setResult({
        //     loading: false,
        //     data,
        //     dataError
        // })
    }

    useEffect(() => {
        getData()
    }, {})

    // const navigation = useNavigation();
    // const goToDetail = (id) => {
    //     console.log("ID", id)
    //     navigation.navigate("Detail", {id})
    // };

    return (
    <>  
        <View
            style={styles.Container}
        >
            <StatusBar backgroundColor="#f58084" />
            <YoutubePlayer 
                height={HEIGHT/3.6}
                width={WIDTH}
                play={false}
                videoId={result.data.url}

            />
            <View>
                 <View
                     style={styles.ViewContainer}
                     // style={{width: '100%'}}
                 >
                    <View
                        style={styles.ViewBox}
                    >
                        <Title title={result.data.title} />
                        <Category 
                            cate={result.data.tag} 
                        />
                    </View>
                
                    <View
                        style={styles.ViewSetting}
                        style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}}    
                    >
                        <Likes 
                            likes={"25"}
                        />
                        <Count 
                            count={"20"}
                        />
                    </View>
                </View>
            
            </View>
        </View>
    

        <ScrollView
            style={{backgroundColor: '#fff'}}
        >
        
            <Desc
                desc={result.data.desc}
            />
            <Text
                style={{marginTop: 40, paddingLeft: 20, paddingRight: 20, fontWeight: 'bold'}}
            >
                PSAT기출해설
            </Text>
            <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20}}
            >
                {/* {lectures.psat.map(item => (
                    <DetailCard
                        onPress={() => goToDetail(item.id)}
                                
                        name={item.title}
                        src={item.thumbnail[0].url}
                        desc={item.desc}
                    />
                ))}    */}
            
            
            </ScrollView>
        </ScrollView>
                 
    </> 
    );
};

export default Detail;


const styles = StyleSheet.create({
    BG: {
        width: '100%',
        height: '100%',
        opacity: 0.4,
        position: 'absolute',
        backgroundColor: '#009387'
    },
    Header: {
        height: HEIGHT / 3,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    Container: {
        backgroundColor: "white",
        justifyContent: "center",
        marginLeft: 0,
        marginRight: 0
    },
    Info: {
        width: '50%',
        marginLeft: '10%'
    },
    Title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        
    },
    TitleSub: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 30,
        backgroundColor: 'white'
    },
    Tag: {
        width: '10%',
        height: '10%',
        color: 'black',
        flexDirection: 'row'
    },
    Image: {
        marginTop: 10,
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row"
    },
    image: {
        flex: 1,
        height: 10,
        width: 10,
        marginTop: 10
    },
    TagContainer: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start",
        marginVertical: 4,
        width: "100%",
        height: 150
    }, 
    likes: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    },
    comments: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    },
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: '#fff'
    }, 
    ViewBox: {
        width: '70%',
        // backgroundColor: themes.colors.view
    },
    ViewSetting: {
        width: '30%',
        alignItems: 'flex-end'

    },
    Video: {
        width: WIDTH,
        height: HEIGHT/3
    }

});