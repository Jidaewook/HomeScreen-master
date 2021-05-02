import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, StyleSheet, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';
import {FontAwesome, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import PostModal from '../../../component/common/modal/Post';
import { ScrollView } from 'react-native-gesture-handler';
import BadgePill from '../../../component/common/BadgePill';
import HLine from '../../../component/common/HLine';
import axios from 'axios';
import { postApi } from '../../../api';

import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

const PostPage = () => {

    const SECTIONS = [
        
    ];

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    //게시판 초기 탭 설정
    const [active, setActive] = useState('자유게시판');

    const [qna, setQna] = useState([]);

    const [free, setFree] = useState([]);

    const [pass, setPass] = useState([]);

    const getQnaData = async () => {
        axios.get("https://hidden-earth-75958.herokuapp.com/qnas")
            .then(qnas => {
                setQna(qnas.data)
                setLoading(false)
            })
            // .then(qnas => console.log('QQQQQQ', qnas.data))
            .catch(err => console.log(err));
    }

    const getFreeData = async () => {
        axios.get("https://hidden-earth-75958.herokuapp.com/bbs")
            .then(frees => {
                setFree(frees.data)
                setLoading(false)
            })
            .catch(err => console.log(err));
    }

    const getPassData = async () => {
        axios.get("https://hidden-earth-75958.herokuapp.com/reviews")
            .then(pass => {
                setPass(pass.data)
                setLoading(false)
            })
    }

    const goToPostDetail = (id) => {
        navigation.navigate("PostDetail", {id})
        console.log("+++++++++++++", id)
    };

    const [posts, setPosts] = useState({
        bbs: [],
        qna: [],
        pass: [],
        bbsError: null,
        qnaError: null,
        passError: null
    });
    

    const getPostData = async () => {
        const [bbsData, bbsDataError] = await postApi.bbs();
        const [qnaData, qnaDataError] = await postApi.qna();
        const [passData, passDataError] = await postApi.pass();
        
        setPosts({
            qna,
            qnaError,
            pass,
            passError,
            free,
            freeError
        });
    }

    useEffect(() => {
        getQnaData();
        getFreeData();
        getPassData();
        getPostData();
        
        console.log(new Date().getDate());
    }, [])

    const momentDate = (date) => {
        moment(date).format('L')
    }

    // const now = () => (
    //     const date = new Date().getDate(); //Current Date
    //     const month = new Date().getMonth() + 1; //Current Month
    //     const year = new Date().getFullYear(); //Current Year
    //     const hours = new Date().getHours(); //Current Hours
    //     const min = new Date().getMinutes(); //Current Minutes
    //     const sec = new Date().getSeconds(); //Current Seconds

    //     return (
    //         console.log(            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    //         )
    //         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    //     )

        
    // )

    //게시판 탭 설정
    const tabs = ['자유게시판', '질문게시판', '합격수기'];

    const [postModal, setPostModal] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setPostModal(true)}
              style={{marginRight: 10}}>
            <FontAwesome 
                size={24}
                color='black'
                name='pencil-square-o'
            />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

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

    return (
        <SafeAreaView style={styles.safeView} >
            <View style={[styles.tabs]}>
                {tabs.map(tab => renderTab(tab))}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {loading ? (
                    <View style={{marginTop: 200, justifyContent: 'center'}}>
                        <ActivityIndicator color={'black'} size={'large'} />
                    </View> 
                ) : (
                    <> 
                        {active === '자유게시판' ? (
                        
                            <View
                                style={{backgroundColor: themes.bgColor.tablecolor}}
                            >
                                {free.map(f => (
                                    <TouchableOpacity
                                        onPress={() => goToPostDetail(f._id)}
                                    >
                                        <View
                                            style={styles.postList}
                                        >
                                            <View
                                                style={{flexDirection: 'row'}}
                                                // onPress={() => goToPostDetail(item.id)}
                                            >
                                                {f.tag.map(t => (
                                                    <View style={{paddingLeft: 10}}>
                                                        <BadgePill 
                                                            title={"#"+t}
                                                            textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1 }]}
                    
                                                        />
                                                    </View>    
                                                ))}
                                            </View>
        
                                            {/* <Text
                                                style={styles.badgePill}
                                            > */}
                                                <Moment from={Date.now()} element={Text}>
                                                    <Text>
                                                        {f.createdAt}
                                                    </Text>
                                                </Moment>
                                                {/* {moment(f.createdAt).format('YYYY/MM/DD')} */}
                                                {/* {momentDate(f.createdAt)} */}
                                                {/* {f.createdAt.slice(0,10)} */}
                                            {/* </Text> */}
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.titleStyle, {width: '65%'}]}>
                                                {f.Title}
                                            </Text>
                                            <View style={{width: '35%', flexDirection: 'row', marginTop: 15}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <AntDesign name="like2" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        50
                                                    </Text>
                                                </View>
                                                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                                    <MaterialCommunityIcons name="message-reply-text" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        10
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <HLine color={{backgroundColor: '#bfbdb4'}} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : null}
        
                        {active === '질문게시판' ? (
                            <View>
                                {qna.map(q => (
                                    <TouchableOpacity style={{backgroundColor: '#ffffff'}}
                                        onPress={() => goToPostDetail(q._id)}

                                    >
                                        <View style={styles.postList} 
                                        >
                                            <View style={{flexDirection: 'row'}} >
                                                {q.tag.map(t => (
                                                    <View style={{paddingLeft: 10}} >
                                                        <BadgePill 
                                                            title={'#'+t}
                                                            textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1}]}
                                                        />
                                                    </View>
                                                ))}
                                            </View>
                                            <Text style={styles.badgePill}>
                                                {q.createdAt.slice(0, 10)}
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.titleStyle, {width: '65%'}]}>
                                                {q.title}
                                            </Text>
                                            <View style={{width: '35%', flexDirection: 'row', marginTop: 15}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <AntDesign name="like2" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        50
                                                    </Text>
                                                </View>
                                                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                                    <MaterialCommunityIcons name="message-reply-text" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        10
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <HLine color={{backgroundColor: '#bfbdb4'}} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : null}
                        {active === '합격수기' ? (
                            <View>
                            {pass.map(p => (
                                <View style={{backgroundColor: '#ffffff'}}>
                                    <View style={styles.postList} >
                                        <View style={{flexDirection: 'row'}} >
                                                    {p.tag.map(t => (
                                                        <View style={{paddingLeft: 10}} >
                                                            <BadgePill 
                                                                title={'#'+t}
                                                                textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1}]}
                                                            />
                                                        </View>
                                                    ))}
                                                </View>
                                                <Text style={styles.badgePill}>
                                                    {p.createdAt.slice(0, 10)}
                                                </Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.titleStyle, {width: '65%'}]}>
                                                {p.title}
                                            </Text>
                                            <View style={{width: '35%', flexDirection: 'row', marginTop: 15}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <AntDesign name="like2" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        50
                                                    </Text>
                                                </View>
                                                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                                    <MaterialCommunityIcons name="message-reply-text" size={16} color={themes.colors.gray} />
                                                    <Text style={styles.postProperty}>
                                                        10
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    <HLine color={{backgroundColor: '#bfbdb4'}} />
                                </View>
                            ))}
                        </View>
                        ) : null}
                        {postModal ? <PostModal visible={postModal} close={() => {setPostModal(false)}} complete={() => {setPostModal(false)}} /> : (null)}
                    </>
                )}
                
            </ScrollView>

        </SafeAreaView>
    );
};

export default PostPage;

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: themes.bgColor.bgcolor,
        paddingHorizontal: 10
    },
    tabs: {

        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
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
    postList: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        // marginBottom: 10,
        // marginTop: 10,
        paddingVertical: 10, 
        paddingRight: 10
    },
    badgePill: {
        fontSize: 10, 
        letterSpacing: -0.6, 
        color: 'black', 
        opacity: .5
    },
    badgeDate: {
        fontSize: 10, 
        letterSpacing: -0.6, 
        color: 'black', 
        opacity: .5,
        paddingRight: 10
    },
    titleStyle: {
        fontSize: 16,
        letterSpacing: -.72,
        fontWeight: '500',
        color: themes.fontsColor.table,
        paddingVertical: 10,
        marginHorizontal: 15
    },
    postProperty: {
        marginLeft: 5, 
        color: themes.colors.gray
    }

})
