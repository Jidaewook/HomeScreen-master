import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';
import {FontAwesome} from '@expo/vector-icons';
import PostModal from '../../../component/common/modal/Post';
import { ScrollView } from 'react-native-gesture-handler';
import BadgePill from '../../../component/common/BadgePill';
import HLine from '../../../component/common/HLine';

const PostPage = () => {

    const SECTIONS = [
        
    ];

    const navigation = useNavigation();

    //게시판 초기 탭 설정
    const [active, setActive] = useState('QNA');

    const [qna, setQna] = useState([
        {
            tag: ['질문', '이벤트'],
            date: '21.01.15.',
            title: '질문있습니다',
            desc: '기출문제 꼭꼬꼭',
            id: 1,
            comments: [''],
            likes: 1
        },
        {
            tag: ['쇼맨쉽', '팔로우'],
            date: '21.01.15.',
            title: '질문있습니다호롤롤로롤로롤로로로로로ㅗ로로로로로ㅗ롤',
            desc: '기출문제 꼭꼬꼭, 어떤걸 풀어야 하나요',
            id: 2,
            comments: [''],
            likes: 2123
        },
        {
            tag: ['어그로', '맛집'],
            date: '21.01.15.',
            title: '2021년 어디에 시험보면 될까요',
            desc: '안녕하세요 통신보안, 히히히히히히',
            id: 3,
            comments: [''],
            likes: 123
        },
        {
            tag: ['신발', '헤어'],
            date: '21.01.15.',
            title: '안녕하세요 질문입니다.',
            desc: '2021년은 왜 졸린가요',
            id: 4,
            comments: [''],
            likes: 123
        },
        {
            tag: ['먹거리', '강의'],
            date: '21.01.15.',
            title: '처음알았습니다',
            desc: '날이 추우면 배고프다는 것을',
            id: 5,
            comments: [''],
            likes: 123129
        },
        {
            tag: ['영상미', '출시'],
            date: '21.01.20.',
            title: '합격수기는 뭐하는 ㄱ소인가요',
            desc: '진정한 합격수기란?',
            id: 6,
            comments: [''],
            likes: 1123
        },
        {
            tag: ['비타민', '문제풀이'],
            date: '21.01.22.',
            title: '초시생은 얼마나 공부해야 하나요',
            desc: '노베이스 초시생입니다',
            id: 7,
            comments: [''],
            likes: 1123
        },
        {
            tag: ['공부', '공기업'],
            date: '21.01.29.',
            title: '서울시 공기업',
            desc: '서울시가 공기업이다',
            id: 8,
            comments: [''],
            likes: 1
        },
    ]);

    const [free, setFree] = useState([]);

    const [pass, setPass] = useState([]);

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
                {active === 'QNA' ? (
                    <View
                        style={{backgroundColor: themes.colors.postList}}
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
                                        {q.date}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={styles.titleStyle}
                                    >
                                        {q.title}
                                    </Text>
                                </View>
                                <HLine color={{backgroundColor: '#bfbdb4'}} />
                            </View>
                        ))}
                    </View>
                ) : null}

                {active === '자유게시판' ? (
                    <View>
                        <Text>
                            자유게시판
                        </Text>
                    </View>
                ) : null}
                {active === '합격수기' ? (
                    <View>
                        <Text>
                            합격수기
                        </Text>
                    </View>
                ) : null}
                {postModal ? <PostModal visible={postModal} close={() => {setPostModal(false)}} /> : (null)}
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
        paddingVertical: 10
    },
    badgePill: {
        fontSize: 10, 
        letterSpacing: -0.6, 
        color: 'black', 
        opacity: .5
    },
    titleStyle: {
        fontSize: 16,
        letterSpacing: -.72,
        fontWeight: '500',
        color: themes.colors.buttonText,
        paddingVertical: 10,
        marginHorizontal: 15
    }

})
