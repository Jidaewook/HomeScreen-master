import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Button, ActivityIndicator} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation, useRoute} from '@react-navigation/native';

// import {lectureApi, noticeApi} from '../api';
import movieApi from '../movieApi';
import Section from '../component/common/Section';
import Card from '../component/common/Card';
import themes from '../config/themes';
import { Feather } from '@expo/vector-icons';
import { theme } from 'galio-framework';
import axios from 'axios';

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
    // console.log('kkkkk', route.params.id)

    // const navigation = useNavigation();

    const route = useRoute();

    console.log("route!!!!!!!", route.params.id)

    const [detail, setDetail] = useState({});

    const [loading, setLoading] = useState(true);

    const getDetail = async () => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/${route.params.id}`)
                    .then(res => {
                        // console.log(res.data)
                        setDetail(res.data)
                        setLoading(false)
                        console.log("!!!!!!!!", detail.results.title)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }

    useEffect(() => {
        getDetail();
    }, {})


    // const [result, setResult] = useState({
    //     loading: true,
    //     data: {}, 
    //     dataError: null
    // });

    // const [moviesDetail, setMoviesDetail] = useState({});

    // const [loading, setLoading] = useState(true);
    // const [youtubeLoading, setYoutubeLoading] = useState(true);

    // const getData = async ({id}) => {


    //     // NCS 디테일과 PSAT 디테일 키값을 따로 가져갈 수 없을까

    //     // await Axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/${route.params.id}`)

    //     // // console.log("xxxxxxxxx", category)

    //     // if (category === "notice") {
    //     //     const [notice, noticeError] = await movieApi.noticeDetail(id)
    //     //     setResult({
    //     //         loading: false,
    //     //         data: notice,
    //     //         dataError: noticeError
    //     //     })
    //     // } else if (category === "ncs") {
    //     //     const [ncs, ncsError] = await movieApi.ncsDetail(id);
    //     //     console.log("ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ", ncs)

    //     //     setResult({
    //     //         loading: false,
    //     //         data: ncs,
    //     //         dataError: ncsError
    //     //     })
    //     // } else if (category === "psat") {
    //     //     const [psat, psatError] = await movieApi.psatDetail(id);
    //     //     setResult({
    //     //         loading: false,
    //     //         data: psat,
    //     //         dataError: psatError
    //     //     })
    //     // };

    //     // setLectures({
            
    //     // });

    //     // setResult({
    //     //     loading: false,
    //     //     data,
    //     //     dataError
    //     // })
    // }

    // useEffect(() => {
    //     getData({id}),
    //     setYoutubeLoading(true)
    // }, {})

    // // const navigation = useNavigation();
    // // const goToDetail = (id) => {
    // //     console.log("ID", id)
    // //     navigation.navigate("Detail", {id})
    // // };

    // const [active, setActive] = useState('주요내용');

    // const tabs = ['주요내용', '관련영상', '관련기출', '질문&답변'];

    // const [text, onChangeText] = React.useState("Useless Text");

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
            <View style={{flex: 1, width: '100%', height: '100%', alignItems: 'center'}}>
                <Text style={{width: 100, height: 100}}>
                    {detail.results.title}
                    {/* Detail */}
                </Text>
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