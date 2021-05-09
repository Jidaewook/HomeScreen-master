import React, {useState, useEffect} from 'react';
import {View, Image, Text, StatusBar, StyleSheet, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Button, ActivityIndicator} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {lectureApi, noticeApi} from '../api';
import Section from '../component/common/Section';
import Card from '../component/common/Card';
import themes from '../config/themes';
import { Feather } from '@expo/vector-icons';
import { theme } from 'galio-framework';

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

                                {articles.slice(0, 1).map(i => (
                                    <View>
                                        <Text style={styles.MainTitle}>
                                        {i.title.slice(0, 20)}
                                    </Text>
                                    <Text style={styles.MainDesc}>
                                        {i.desc}
                                    </Text>
                                    </View>
                                    
                                ))}
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
                            data={articles}
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

export default Detail;


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