import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';

import themes from '../config/themes';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { COLORS, theme } from '../consts';
import {BASE_URL} from '../constants';
import HLine from '../component/common/HLine';


  const comments = [
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
    {
        comment: '위에꺼 거짓말임',
        name: '나도 관리자는 아님',
        date: '2021-01-21'

    },
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
  ]

const Detail = ({route}) => {

    const navigation = useNavigation();
    
    const {id, isNcs} = route.params;
    // console.log("isNCSisNCSisNCSisNCSisNCS", isNcs)

    // console.log("route!!!!!!!", route.params.id)

    const [detail, setDetail] = useState({});
    // const [detailPsat, setDetailPsat] = useState({});
    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, onChangeText] = useState('Useless Text');
    const [playing, setPlaying] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, [])



    const getDetail = async (detailId) => {
        try {
            const {data} = isNcs 
                ? await axios.get(`${BASE_URL}/ncs/${detailId}`)
                : await axios.get(`${BASE_URL}/psat/${detailId}`)
            setDetail(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    // const getData = async () => {
    //     try {
    //         const {data} = await axios.get(`${BASE_URL}/ncs`)
    //         setData(data.results)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    useEffect(() => {
        getDetail(id);
        // getData();
    }, {})

    const renderComment = ({item}) => {
        return (
            <View style={{height: '200%'}}>
                {comments.map(item => (
                    <View 
                        style={{
                            borderWidth: 0.5, 
                            borderColor: themes.colors.white,
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
            </View>
            
        )
    }

    return (
        <>
            <SafeAreaView style={styles.Container}>
                <View>
                    <YoutubePlayer 
                        height={230}
                        play={true}
                        videoId={detail.url}
                    />
                </View>
                
                <View style={{height: 1200}} showsVerticalScrollIndicator={false}> 
                    <View>
                        <Text style={styles.MainTitle}>
                            {detail.title}
                        </Text>
                        <Text style={styles.MainDesc}>
                            {detail.desc}
                        </Text>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <Text style={styles.slogan}>
                            각종 적성검사의 기본기를
                        </Text>
                        <Text style={styles.slogan}>
                            탄탄하게 다집니다!!
                        </Text>
                    </View>
                    <HLine />
                    <ScrollView style={[styles.Container]}  contentContainerStyle={{height: '170%', paddingBottom: 30, paddingHorizontal: 10, marginTop: 15}}>
                        <View>
                            <Text style={styles.CommentTitle}>
                                질문과 답변
                            </Text>
                            <Text style={{marginTop: 20, marginHorizontal: 20, color: COLORS.gray}}>
                                질문에 대한 답변은 개인 쪽지로 드리거나 영상 콘텐츠로 제작되어 공개됩니다.
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput 
                                    style={styles.CommentInput}
                                    value={text}
                                    onChangeText={onChangeText}
                                />
                                <TouchableOpacity 
                                    style={styles.CommentBtn}
                                    onPress={() => alert("등록하시겠습니까?")}

                                >
                                    <Text style={styles.CommentBtnTxt}>
                                        등록
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                            {renderComment(detail)}

                        </View>
                    </ScrollView>
                
                </View>

            </SafeAreaView>   
        </> 
    );
};

export default Detail;


const styles = StyleSheet.create({
    
    Container: {
        backgroundColor: "white",
        marginLeft: 0,
        marginRight: 0,
        marginHorizontal: 20,        
    },
    tab: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: 'gray',
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
    }, 
    slogan: {
        fontSize: 25,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        color: themes.colors.lightgray,
        marginLeft: 25,
        marginTop: 10, 
        marginBottom: 10,
        marginRight: 25,
        textAlign: 'center'

    },
    Button: {
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
        marginTop: 15,
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
        marginTop: 10,
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
        borderColor: 'gray',
        borderWidth: 1,
        width: '16%',
        height: 35,
        marginLeft: 5,
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    category: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 3
    },
    safeView: {

    },
    categories: {
        borderBottomColor: COLORS.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 1,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    bbsList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingRight: 10

    }, 
    
    badgePill: {
        fontSize: theme.sizes.h5,
        letterSpacing: -0.6,
        color: COLORS.black,
        opacity: .5
    },
    bgImage: {
        flex: 1, 
        width: '100%', 
        height: '100%', 
        resizeMode: 'stretch', 
        marginTop: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        opacity: 0.9
    },
    cardView: {
        flex: 1, 
        margin: 20,
        width: 350,
        height: 200,
        marginLeft: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    cardContent: {
        flex: 1,
        marginTop: 0,
        width: '90%',
        height: 30,
        textAlign: 'left',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        fontSize: themes.sizes.h3
    },
    cardDesc: {
        flex: 1,
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
    },  
    footer: {
        backgroundColor: COLORS.tertiary,
        margin: 0,
        height: 30,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    CommentBtn: {
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.gray5,
        width: 50,
        height: 35, 
        marginLeft: 10,
        marginTop: 20
    },
    CommentBtnTxt: {
        textAlign: 'center',
        marginTop: 10
    },
    Gichul: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 20,
        fontSize: theme.sizes.h3,
        fontWeight: 'bold'
    }
});