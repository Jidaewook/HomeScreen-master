import React, {useState, useEffect} from 'react';
import {View, Image, Text, StatusBar, StyleSheet, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Button, ActivityIndicator} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {lectureApi, noticeApi} from '../../../api';
import MovieApi, { getMovies } from '../../../movieApi';
import Section from '../../../component/common/Section';
import Card from '../../../component/common/Card';
import themes from '../../../config/themes';
import Genres from '../../../component/common/Genres';
import { Feather } from '@expo/vector-icons';
import { theme } from 'galio-framework';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const articles = [
    {
        id: 1101822001,
        title: '시간, 속력, 거리 (1)',
        desc: "수리능력 중 응용수리 영역의 첫 번째 난관, 시간/속력/거리 첫번째 시간",
        genre_ids: [
          14,
          101
        ],
        rating: 5.5,
        poster_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        backdrop_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        professor: {},
        comments: [],
        likes: [],
        url: `https://youtu.be/16iF_hKs034`
        },
        {
          id: 1101822002,
          title: '상황구성_위치추론 (1)',
          desc: "문제해결능력, 위치추론 기초이론",
          genre_ids: [
            14,
            100
          ],
          rating: 6.5,
          poster_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
          backdrop_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',

        //   poster_path: require("../assets/images/thumb/sample2.png"),
        //   backdrop_path: require('../assets/images/thumb/back2.jpeg'),
          professor: {},
          comments: [],
          likes: [],
          url: `https://youtu.be/X3nq35bfJmA`
        },
        {
          id: 1101822003,
          title: '상황구성_위치추론 (2)',
          desc: "문제해결능력, 위치추론 기본이론. 문제해결 접근법을 적용하라",
          genre_ids: [
            14,
            102
          ],
          rating: 6.5,
        //   poster_path: require("../assets/images/thumb/sample3.jpeg"),
        //   backdrop_path: require('../assets/images/thumb/back3.jpeg'),
          professor: {},
          comments: [],
          likes: [],
          url: `https://youtu.be/h03HjVWloQU`
        },
        {
          id: 1101822004,
          title: '상황구성_요일추론 (1)',
          desc: "문제해결능력, 요일문제는 단순하다. 정해진 틀에서 빠르게 해결하라",
          genre_ids: [
            14,
            102
          ],
          rating: 8.5,
        //   poster_path: require("../assets/images/thumb/sample4.jpeg"),
        //   backdrop_path: require('../assets/images/thumb/back4.jpeg'),
          professor: {},
          comments: [],
          likes: [],
          url: `https://youtu.be/X3nq35bfJmA`
        },
        {
          id: 1101822005,
          title: '상황구성_요일추론 (2)',
          desc: "문제해결능력, 요일추론 접근법 확인과 실전 적용",
          genre_ids: [
            14,
            102
          ],
          rating: 10.0,
        //   poster_path: require("../assets/images/thumb/sample5.jpeg"),
        //   backdrop_path: require('../assets/images/thumb/back5.jpeg'),
          professor: {},
          comments: [],
          likes: [],
          url: `https://youtu.be/X3nq35bfJmA`
        },
  ]


// const Detail = ({route: {params: {id, category}}}) => {
const RecDetail = ({route: {params: {id}}}) => {
    
    const navigation = useNavigation();

    const [result, setResult] = useState({
        loading: true,
        data: {}, 
        dataError: null
    });

    const getData = async () => {
        const filteredItem = articles.filter(i => i.id.includes(id))
        if (category === "notice") {
            const [notice, noticeError] = await noticeApi.noticeDetail(id)
            setResult({
                loading: false,
                data: notice,
                dataError: noticeError
            })
        } else if (category === "ncs") {
            const [ncs, ncsError] = await lectureApi.ncsDetail(id);
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
    }

    useEffect(() => {
        getData()
        
    }, {})

    const [loading, setLoading] = useState(true);

    const [active, setActive] = useState('주요내용');

    const tabs = ['주요내용', '관련영상', '관련기출', '질문&답변'];

    const [text, onChangeText] = React.useState("Useless Text");

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
                style={{marginLeft: 20, marginBottom: 20, backgroundColor: themes.colors.view, height: 50, flexDirection: 'row', alignItems: 'center'}}
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

    function renderReply(data) {
        return(
            <FlatList 
                data={data}
                keyExtractor={(item) => item.name}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderComment}
                // style={{marginBottom: 100}}
            />
        )
    }

    const renderComment = ({item}) => {
        return (
            <ScrollView style={{height: 500}}>
                {comments.map(item => (
                    <View 
                        style={{
                            borderWidth: 0.5, 
                            borderColor: themes.colors.brightGray,
                            marginTop: 5
                        }}
                    >
                        <Text style={styles.CommentName}>
                            {item.name.slice(0,5)}
                        </Text>
                        <Text style={styles.CommentFirst}>
                            {item.comment}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.CommentDate}>
                                {item.date}
                            </Text>
                            <TouchableOpacity
                                onPress={() => alert("삭제하시겠습니까?")}
                                style={{justifyContent: 'center'}}
                            >
                                <Text style={styles.CommentAlert}>
                                    삭제
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => alert("좋아요")}
                                style={{justifyContent: 'center', alignItems: 'flex-end', width: '40%'}}
                            >
                                <Feather name="thumbs-up" size={20} color="black" />
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10, marginTop: 5}}>
                                20
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            
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
                width='100%'
                play={false}
                videoId={result.data.url}
            />
            <View style={[styles.tabs]}>
                {tabs.map(tab => renderTab(tab))}
            </View>
        </SafeAreaView>
        {/* <SafeAreaView style={{
            backgroundColor: "white",
            justifyContent: "center",
            // marginTop: 80       
        }}> */}
        <View style={{backgroundColor: 'white'}}>
                    {active === '주요내용' ? (
                        // <View>
                                <ScrollView contentContainerStyle={{height: 1000}}>
 
                                    {/* <View>
                                        <Genres genres={i.genre_ids}/>
                                        <Text style={styles.MainTitle}>
                                            {i.title.slice(0, 20)}
                                        </Text>
                                        <Text style={styles.MainDesc}>
                                            {i.desc}
                                        </Text>
                                    </View> */}
                                    
                                
                                
                                    <View>
                                        <Text style={styles.slogan}>
                                            "각종 적성검사의 기본기를 
                                        </Text>
                                        <Text style={styles.slogan}> 
                                            탄탄하게 다집니다."
                                        </Text>
                                    </View>
                                    {/* <View style={{height: 150}}>
                                            
                                    </View> */}
                                    <View>
                                    <Text style={styles.TeacherSub}>
                                        | 경력
                                    </Text>
                                    <Text style={styles.MainDesc}>
                                        8년(2014년 ~)
                                    </Text>
                                    <Text style={styles.TeacherSub}>
                                        | 전공
                                    </Text>
                                    <Text style={styles.MainDesc}>
                                        경영학 박사과정
                                    </Text>
                                    <Text style={styles.TeacherSub}>
                                        | 성적
                                    </Text>
                                    <Text style={styles.MainDesc}>
                                        2012년 자료해석 90점,{"\n"}
                                        '13~'18 평균 85점 이상{"\n"}
                                        LH 등 각종 기관 필기 합격{"\n"}{"\n"}
                                    </Text>
                                    <Text style={styles.TeacherSub}>
                                        | 참여
                                    </Text>
                                    <Text style={styles.MainDesc}>
                                        NCS 기출문제 출제위원{"\n"}
                                        PSAT 전국 모의고사 출제위원{"\n"}
                                    </Text>
                                </View>
                                </ScrollView>
                                

                        // </View>
                        
                    ) : (null)}
                    {active === '관련영상' ? (
                        <FlatList 
                            data={getMovies}
                            keyExtractor={(item) => item.title}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                            style={{width: '98%', marginBottom: 10}}
                        />

                    ) : (null)}
                    {active === '관련기출' ? (
                        <ScrollView style={{height: 500}}>
                            <View style={{margin: 10}}>
                                <Section title={'추론형'} show={false}>
                                    {articles.map(i => (
                                        <Card 
                                            item={i}
                                            // horizontal
                                            full
                                            style={{marginRight: theme.SIZES.BASE, width: 250}}
                                        />
                                    ))}
                                </Section>
                            </View>
                            {/* <View style={{margin: 10}}>
                                <Section title={'2016년'} show={false}>
                                    {articles.map(i => (
                                        <Card 
                                            item={i}
                                            // horizontal
                                            full
                                            style={{marginRight: theme.SIZES.BASE, width: 250}}
                                        />
                                    ))}
                                </Section>
                            </View> */}
                        </ScrollView>
                    ) : (null)}
                    {active === '질문&답변' ? (
                        <View>
                            <View>
                            
                                <Text style={styles.CommentTitle}>
                                    질문과 답변
                                </Text>
                                <Text style={{marginLeft: 20, marginRight: 20, color: themes.colors.gray, marginTop: 5}}>
                                    질문에 대한 답변은 개인 쪽지나 영상 콘텐츠로 제공됩니다.
                                </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        onChangeText={onChangeText}
                                        value={text}
                                        style={styles.CommentInput}
                                    />
                                    <TouchableOpacity
                                        style={styles.RegisterButton}
                                    >
                                        <Text style={{fontSize: 16, fontWeight: 'bold', justifyContent: 'center', color: 'white'}}>등록</Text>
                                    </TouchableOpacity>
                                </View>  
                                {renderComment(comments)}
                            </View>
                        </View>
                    
                    ) : (null)}
                </View>
        {/* </SafeAreaView>          */}
    </> 
    );
};

export default RecDetail;


const styles = StyleSheet.create({
    
    Container: {
        backgroundColor: "white",
        justifyContent: "center",
        marginLeft: 0,
        marginRight: 0,
        // height: HEIGHT+150
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
    },
    MainTitle: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.fontsColor.Title,

    },
    TeacherSub: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.fontsColor.contentTitle,
        marginLeft: 20,
        marginTop: 10,
        height: 30
        
    },
    MainDesc: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 14,
        color: themes.colors.darkgray,
        // fontWeight: 'bold'
    }, 
    slogan: {
        fontSize: 25,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        color: themes.colors.lightgray,
        marginLeft: 25,
        marginTop: 10, 
        marginRight: 25,
        textAlign: 'center'

    },
    Button: {
        // flex: 1,
        backgroundColor: themes.colors.lightgray,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0.1,

    },
    question: {
        margin: 10,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    CommentTitle: {
        // marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%'
    },
    CommentCount: {
        marginTop: 15,
        marginLeft: 5,
        fontSize: 16,
        width: '68%'
    },
    CommentMore: {
        marginTop: 15,
        marginLeft: 5,
        fontSize: 16,
        color: themes.colors.gray
    },
    CommentFirst: {
        marginBottom: 15,
        marginLeft: 30,
        fontSize: 16,
        width: '85%'
    },
    CommentName: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        // width: '30%'
    },
    CommentInput: {
        width: '75%',
        height: 35,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: themes.colors.brightGray
    },
    CommentDate: {
        marginLeft: 30,
        marginTop: 5, 
        justifyContent: 'center',
        width: '25%'
    }, 
    CommentAlert: {
        marginLeft: 10,
        marginTop: 6,
        justifyContent: 'center',
        width: 50
    },  
    RegisterButton: {
        backgroundColor: 'black',
        width: '16%',
        height: 35,
        marginLeft: 5,
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});