import React, {useState, useEffect} from 'react';
import {View, Image, Text, StatusBar, StyleSheet, Dimensions, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Button, ActivityIndicator} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {lectureApi, noticeApi} from '../api';
import Section from '../component/common/Section';
import Card from '../component/common/Card';
import themes from '../config/themes';
import { Feather } from '@expo/vector-icons';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const articles = [
    {
      title: 'Ice cream is made with carrageenan …',
      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      cta: 'View article', 
      desc: '마감기한 3/6',
      horizontal: true
    },
    {
      title: 'Is makeup one of your daily esse …',
      image: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
      cta: 'View article',
      desc: '마감기한 3/6',

    },
    {
      title: 'Coffee is more than just a drink: It’s …',
      image: 'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      cta: 'View article' ,
      desc: '마감기한 3/6',

    },
    {
      title: 'Fashion is a popular style, especially in …',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80',
      cta: 'View article' ,
      desc: '마감기한 3/6',

    },
    {
      title: 'Argon is a great free UI packag …',
      image: 'https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=1947&q=80',
      cta: 'View article', 
      desc: '마감기한 3/6',

      horizontal: true
    },
  ]

// const Detail = ({route: {params: {id, category}}}) => {
const Detail = () => {
    
    const navigation = useNavigation();

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

    const [loading, setLoading] = useState(true);

    const [active, setActive] = useState('주요내용');

    const tabs = ['주요내용', '관련영상', '관련기출', '질문&답변'];

    const renderTab = (tab) => {
        const isActive = active === tab;

        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => handleTab(tab)}
                style={[styles.tab, isActive ? styles.active : null]}
            >
                <Text style={{fontSize: 15, fontWeight: 'bold', color: isActive ? 'black' : 'gray'}}>
                    {tab}
                </Text>
                
            </TouchableOpacity>
        )
    }

    const handleTab = tab => {
        setActive(tab)
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => alert(item.title)}
                style={{marginLeft: 20, marginBottom: 20, backgroundColor: themes.colors.shinyGray, height: 50, flexDirection: 'row', alignItems: 'center'}}
            >
                <Text style={{width: '90%'}}>
                    {item.title}
                </Text>
                <View style={{width: '10%'}}>
                <Feather name="play-circle" size={24} color="black" />  
                </View>
            </TouchableOpacity>
            
        )
}

    return (
    <>  
        <SafeAreaView
            style={styles.Container}
        >
            <StatusBar backgroundColor="#f58084" />
               
            <YoutubePlayer 
                height={HEIGHT/3.8}
                width={WIDTH}
                play={false}
                videoId={result.data.url}
            />
            <View style={[styles.tabs]}>
                {tabs.map(tab => renderTab(tab))}
            </View>
            
                <View>
                    {active === '주요내용' ? (
                        <Text>
                            주요내용
                        </Text>
                    ) : (null)}
                    {active === '관련영상' ? (
                        <FlatList 
                            data={articles}
                            keyExtractor={(item) => item.title}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                            style={{width: '98%', marginBottom: 100}}
                        />

                    ) : (null)}
                    {active === '관련기출' ? (
                        <Text>
                            관련기출
                        </Text>
                    ) : (null)}
                    {active === '질문&답변' ? (
                        <Text>
                            질문과 답변
                        </Text>
                    ) : (null)}
                </View>
                
           
        </SafeAreaView>         
    </> 
    );
};

export default Detail;


const styles = StyleSheet.create({
    
    Container: {
        backgroundColor: "white",
        justifyContent: "center",
        marginLeft: 0,
        marginRight: 0
    },
    tab: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: 'gray',
        // themes.colors.title,
        borderBottomWidth: 3
    },
    tabs: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});