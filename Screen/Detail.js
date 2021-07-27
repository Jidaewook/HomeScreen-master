import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StatusBar, StyleSheet, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Button, ImageBackground, ActivityIndicator} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation, useRoute} from '@react-navigation/native';

import Section from '../component/common/Section';
import Card from '../component/common/Card';
import themes from '../config/themes';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { COLORS, theme } from '../consts';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const articles = [
    {
      title: 'Ice cream is made with carrageenan …',
      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      cta: 'View article', 
      desc: '아이스크림은 캐리건으로부터 만들어졌다. 본 강의에서 다룰 내용은 아이스크림의 연혁과 아이스크림을 처음 제조한 사람에 대한 내용이 될 것이다.',
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
    
    const {id} = route.params;

    console.log("route!!!!!!!", route.params.id)

    const [detail, setDetail] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState('주요내용');
    const tabs = ['주요내용', '관련영상', '관련기출', '질문&답변'];
    const [text, onChangeText] = useState('Useless Text');
    const [playing, setPlaying] = useState(false);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, [])

    const getDetail = async () => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        setDetail(res.data.results)
                        setLoading(false)
                        console.log("!!!!!!!!", detail.results.title)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }

    const getData = async () => {
            await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/`)
                        .then(res => {
                            setData(res.data.results)
                            console.log('Deatil!!!', res.data.results)
                        })
                        .catch(err => {
                            console.log(err)
                        })
    }


    useEffect(() => {
        getDetail();
        getData();
    }, {})

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
                onPress={() => navigation.navigate('Detail', {id: item._id})}
                style={{marginLeft: 20, marginBottom: 20, backgroundColor: COLORS.gray4, height: 50, flexDirection: 'row', alignItems: 'center'}}
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
                
            />

            
        )
    }

    const renderGichul = ({item, index}) => {
        return(
            <FlatList 
                showsVerticalScrollIndicator={false}

                data={data}
                // 기출 별도의 api 필요
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <View style={styles.cardView}>
                        <ImageBackground source={require('../assets/half-moon.png')} style={styles.bgImage}>
                        <View style={{height: 20, marginTop: 240 }}>
                            <Text style={styles.cardContent}>
                                {item.title.slice(0,15)}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.cardDesc}>
                                {item.desc.slice(0,20)}
                            </Text>
                        </View>
                        </ImageBackground>
                        <View style={styles.footer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', {id: item._id})}
                            >
                                <Text>바로가기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            // <FlatList 
            //         showsVerticalScrollIndicator={false}
            //         numColumns={2}
            //         // ListHeaderComponent={
            //         //     <ScrollView
            //         //         pagingEnabled={true}
            //         //         horizontal
            //         //         showsHorizontalScrollIndicator={false}
            //         //         style={{
            //         //             height: 150,
            //         //             width: '100%'
            //         //         }}
            //         //     >
            //         //         <Text>
            //         //             광고영역
            //         //         </Text>
            //         //     </ScrollView>
            //         // }
            //         data={ncs}
            //         keyExtractor={(item) => item._id}
            //         renderItem={({item}) => (
            //             <View style={styles.cardView}>
            //                 <ImageBackground source={require('../../../assets/cloudy.jpeg')} style={styles.bgImage}>
                            
            //                 <View style={{height: 20, marginTop: 240 }}>
            //                     <Text style={styles.cardContent}>
            //                         {item.title.slice(0,15)}
            //                     </Text>
            //                 </View>
            //                 <View>
            //                     <Text style={styles.cardDesc}>
            //                         {item.desc.slice(0,20)}
            //                     </Text>
            //                 </View>
            //                 </ImageBackground>
            //                 <View style={styles.footer}>
            //                     <TouchableOpacity
            //                         onPress={() => navigation.navigate('Detail', {id: item._id})}
            //                     >

            //                         <Text>바로가기</Text>
            //                     </TouchableOpacity>
            //                 </View>
                            
            //             </View>
            //         )}
            //     />
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
            <StatusBar backgroundColor="black" />
            <View 
                style={{width: WIDTH, height: HEIGHT/3, alignItems: 'center'}}
            >
                <YoutubePlayer 
                    videoId={detail.url}
                    play={playing}
                    height={300}

                />
                <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
                
            </View>
            <View style={[styles.tabs]}>
                {tabs.map(tab => renderTab(tab))}
            </View>
            {/* <Text style={{width: 100, height: 200}}>
                    {detail.title}
                    {detail.url}
            </Text> */}
           
        </SafeAreaView>      
        <View>
        {active === '주요내용' ? (
                    <ScrollView 
                        style={styles.Container}
                        
                    >
                        <SafeAreaView>
                            <Text style={styles.MainTitle}>
                                {detail.title}
                            </Text>
                            <Text style={styles.MainDesc}>
                                {detail.desc}
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView>
                            <Text style={styles.slogan}>
                                각종 적성검사의 기본기를
                            </Text>
                            <Text style={styles.slogan}>
                                탄탄하게 다집니다!!
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView>
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
                        </SafeAreaView>
                    </ScrollView>
                ) : (null)}
                {active === '관련영상' ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        style={{width: '90%', marginBottom: 10}}
                    />
                        
                ) : (null)}
                {active === '관련기출' ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id}
                        horizontal={true}
                        // numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderGichul}
                        style={{width: '90%', marginBottom: 10}}
                    />
                        
                ) : (null)}
                {active === '질문&답변' ? (
                    <View>
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
                                    style={styles.RegisterButton}
                                >
                                    <Text style={styles.CommentBtnTxt}>
                                        등록
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                            {renderComment(detail)}
                            {/* {renderComment(Detail.comments)} */}

                        </View>
                    </View>
                ) : (null)}
        </View>   
    </> 
    );
};

export default Detail;


const styles = StyleSheet.create({
    
    Container: {
        backgroundColor: "white",
        // justifyContent: "center",
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
        // backgroundColor: 'black',
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
    // titleStyle: {
    //     fontSize: theme.sizes.h4,
    //     letterSpacing: -.72,
    //     fontWeight: '500',
    //     color: COLORS.black,
    //     paddingVertical: 10,
    //     marginHorizontal: 15
    // },
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
        // marginRight: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        // borderRadius: 100,
        opacity: 0.9
    },
    cardView: {
        // backgroundColor: COLORS.gray1,
        flex: 1, 
        margin: 20,
        // width: width,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flexGrow: 0
    }, 
    cardContent: {
        // backgroundColor: COLORS.gray1,
        flex: 1,
        marginTop: 0,
        // marginLeft: 10,
        // marginRight: 10,
        width: '90%',
        height: 30,
        textAlign: 'left',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        fontSize: themes.sizes.h3
    },
    cardDesc: {
        flex: 1,
        // marginLeft: 10,
        // marginRight: 10,
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        // backgroundColor: COLORS.purple
    },  
    footer: {
        backgroundColor: COLORS.tertiary,
        margin: 0,
        height: 30,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
});