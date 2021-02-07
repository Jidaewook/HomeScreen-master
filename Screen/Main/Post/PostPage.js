import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';
import {FontAwesome, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import PostModal from '../../../component/common/modal/Post';
import { ScrollView } from 'react-native-gesture-handler';
import BadgePill from '../../../component/common/BadgePill';
import HLine from '../../../component/common/HLine';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';

const PostPage = () => {

    const SECTIONS = [
        
    ];

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    //게시판 초기 탭 설정
    const [active, setActive] = useState('QNA');

    const [qna, setQna] = useState([]);

    const [free, setFree] = useState([]);

    const [pass, setPass] = useState([]);

    const getQnaData = async () => {
        axios.get("https://hidden-earth-75958.herokuapp.com/bbs")
            .then(qnas => {
                setQna(qnas.data)
                setLoading(false)
            })
            // .then(qnas => console.log('QQQQQQ', qnas.data))
            .catch(err => console.log(err));
    }

    const getFreeData = async () => {
        axios.get("https://hidden-earth-75958.herokuapp.com/qnas")
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

    useEffect(() => {
        getQnaData();
        getFreeData();
        getPassData();
    }, [])


    //게시판 탭 설정
    const tabs = ['QNA', '자유게시판', '합격수기'];

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
                // contentContainerStyle={{flex: 1}}
            >
                {loading ? (
                    <View style={{marginTop: 200, justifyContent: 'center'}}>
                        <ActivityIndicator color={'black'} size={'large'} />
                    </View> 
                ) : (
                    <> 
                        {active === 'QNA' ? (
                        
                            <View
                                style={{backgroundColor: themes.colors.postListGray}}
                            >
                                {qna.map(q => (
                                    <View>
                                        <View
                                            style={styles.postList}
                                        >
                                            <View style={{flexDirection: 'row'}}>
                                                {q.tag.map(t => (
                                                    <View style={{paddingLeft: 10}}>
                                                        <BadgePill 
                                                            title={"#"+t}
                                                            textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1 }]}
                                                        />
                                                    </View>    
                                                ))}
                                            </View>
        
                                            <Text
                                                style={styles.badgePill}
                                            >
                                                {q.createdAt.slice(0,10)}
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.titleStyle, {width: '65%'}]}>
                                                {q.Title}
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
        
                        {active === '자유게시판' ? (
                            <View>
                                {free.map(f => (
                                    <View style={{backgroundColor: themes.colors.postListSky}}>
                                        <View style={styles.postList} >
                                            <View style={{flexDirection: 'row'}} >
                                                {f.tag.map(t => (
                                                    <View style={{paddingLeft: 10}} >
                                                        <BadgePill 
                                                            title={'#'+t}
                                                            textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1}]}
                                                        />
                                                    </View>
                                                ))}
                                            </View>
                                            <Text style={styles.badgePill}>
                                                {f.createdAt.slice(0, 10)}
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.titleStyle, {width: '65%'}]}>
                                                {f.title}
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
                        {active === '합격수기' ? (
                            <View>
                            {pass.map(p => (
                                <View style={{backgroundColor: themes.colors.postListOrange}}>
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
        backgroundColor: themes.colors.main,
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
        color: themes.colors.buttonText,
        paddingVertical: 10,
        marginHorizontal: 15
    },
    postProperty: {
        marginLeft: 5, 
        color: themes.colors.gray
    }

})
