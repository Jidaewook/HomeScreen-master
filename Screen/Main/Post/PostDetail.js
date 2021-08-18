import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { postApi } from '../../../api';

import themes from '../../../config/themes';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import HLine from '../../../component/common/HLine';

import Moment from 'moment';
import 'moment-timezone';
import moment from 'moment';
import axios from 'axios';


const PostDetail = ({
    route: {
        params: {id}
    }
}) => {

    const {height} = Dimensions.get("window");

    const navigation = useNavigation();

    const [result, setResult] = useState({
        loading: true,
        data: {},
        dataError: null
    })

    const [detailBbs, setDetailBbs] = useState([]);

    const refRBSheet = useRef();

    const openBottom = () => {
        refRBSheet.current.open();
    }

    const closeBottom = () => {
        refRBSheet.current.close();
    }

    const getDetailBbs = async (bbsId) => {
        try {
            const {data} = await axios.get(`${BASE_URL}/bbs/${bbsId}`)
            setDetailBbs(data.results)
        } catch (err) {
            console.log(err)
        }
    } 

    const [comments, setComments] = useState([
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
    ])

    const getPostData = async () => {

        const [bbs, bbsError] = await postApi.bbsDetail(id)
        const [qna, qnaError] = await postApi.qnaDetail(id)
        
        setResult({
            loading: false,
            data: qna,
            dataError: qnaError
        })
    }

    useEffect(() => {
        getPostData();
    }, {})

    const [postDetailModal, setPostDetailModal] = useState(false);

    const momentDate = (date) => {
        moment(date).format('L')
    }

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.Title}>
                {result.data.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.Writer}>
                    작성자
                </Text>
                <Text style={styles.Date}>
                    {momentDate(result.data.published_at)}
                </Text>
            </View>
            <View>
                <Text style={styles.Desc}>
                    {result.data.desc}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <AntDesign name="like2" style={styles.Likes} />
                <Text style={styles.Count}>20</Text>
            </View>
            <View>
                <Text>
                    {result.data.tag}
                </Text>
            </View>
            <View>
                <View>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                
                                <Text style={styles.CommentTitle}>
                                    댓글
                                </Text>
                                <Text style={styles.CommentCount}>
                                    20
                                </Text>
                                
                                <TouchableOpacity
                                    onPress={() => openBottom()}
                                >
                                    <Text style={styles.CommentMore}>
                                        더보기
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.CommentName}>
                                            {comments[0].name}
                                        </Text>
                                        <Text style={styles.CommentFirst}>
                                            {comments[0].comment}
                                        </Text>
                                    </View>
                            </>
                        </View>
                        
                    
                </View>
               
            </View>

            <RBSheet
                ref={refRBSheet}
                height={height/1.5}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: themes.colors.background
                        
                    },
                    draggableIcon: {
                        backgroundColor: themes.colors.basic,
                        
                    },
                    container: {
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        paddingHorizontal: 10,
                        backgroundColor: themes.colors.background
                    }
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 25, backgroundColor: themes.colors.background}}>
                    <Text
                        style={{flex: 1, fontSize: 16, color: themes.colors.basic, fontWeight: 'bold', textAlign: 'center'}}
                    >
                        댓글 더 보기
                    </Text>
                        <AntDesign 
                            name="close" 
                            size={20} 
                            color={themes.colors.basic}
                            style={{marginLeft: 'auto'}}
                            onPress={()=> closeBottom()}
                        />
                </View>
                
                <HLine />
                <ScrollView style={{backgroundColor: themes.colors.background}}>
                    {comments.map(c => (
                        <>
                            <View style={{backgroundColor: themes.colors.background, marginTop: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '55%'}}>
                                        <View>
                                            <MaterialCommunityIcons name="face-profile" size={24} color={themes.colors.basic} />
                                        </View>
                                        <View style={{marginLeft: 10, marginTop: 3}}>
                                            <Text style={{fontWeight: 'bold'}}>
                                                {c.name}
                                                
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{marginLeft: 10, marginTop: 4, alignItems: 'flex-end', width: '40%'}}>
                                        <Text style={{fontSize: 10, color: themes.colors.basic}}>
                                            {c.date}
                                        </Text>
                                    </View>
                                </View>
                            
                                <View style={{alignItems: 'flex-start', marginTop: 5, marginLeft: 35}}>
                                    <Text style={{fontSize: 15, color: themes.colors.basic, marginBottom: 10}}>
                                        {c.comment}
                                    </Text>
                                </View>
                            </View>
                            <HLine />
                        </>
                    ))}
                </ScrollView>
            </RBSheet>
        </ScrollView>
    );
};

export default PostDetail;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: themes.colors.background
    },
    Title: {
        backgroundColor: themes.colors.background,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '600',
        color: themes.colors.basic
    },
    Writer: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        width: '25%',
        color: themes.colors.basic
    },
    Date: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        width: '75%'
    },
    Desc: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: themes.colors.basic
    },
    Likes: {
        marginLeft: 20, 
        marginTop: 20,
        fontSize: 22,
        color: themes.colors.basic
    },
    Count: {
        marginLeft: 10, 
        marginTop: 20,
        fontSize: 22,
        color: themes.colors.basic
    },
    Tag: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 12,
        color: themes.colors.basic,
    },
    CommentTitle: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '8%',
        color: themes.colors.basic
    },
    CommentCount: {
        marginTop: 15,
        marginLeft: 5,
        fontSize: 16,
        width: '68%',
        color: themes.colors.basic
    },
    CommentMore: {
        marginTop: 15,
        marginLeft: 5,
        fontSize: 16,
        color: themes.colors.basic
    },
    CommentFirst: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        width: '85%',
        color: themes.colors.basic

    },
    CommentName: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '15%',
        color: themes.colors.basic

    }
})