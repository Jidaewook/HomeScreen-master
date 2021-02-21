import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { postApi } from '../../../api';

import themes from '../../../config/themes';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import HLine from '../../../component/common/HLine';

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

    const refRBSheet = useRef();

    const openBottom = () => {
        refRBSheet.current.open();
    }

    const closeBottom = () => {
        refRBSheet.current.close();
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

        // console.log("getPostData", result.data)
    }

    useEffect(() => {
        // console.log(result)   
        getPostData();
    }, {})

    const [postDetailModal, setPostDetailModal] = useState(false);

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
                    {result.data.published_at}
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
                {/* {console.log(result.data.tag.length)} */}
                {/* {result.data.tag.map(t => (
                    <Text>
                        {t}
                    </Text>
                ))} */}
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
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        
                    },
                    draggableIcon: {
                        backgroundColor: themes.colors.main,
                        
                    },
                    container: {
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        paddingHorizontal: 10
                    }
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 25}}>
                    <Text
                        style={{flex: 1, fontSize: 16, color: themes.colors.gray, fontWeight: 'bold', textAlign: 'center'}}
                    >
                        댓글 더 보기
                    </Text>
                        <AntDesign 
                            name="close" 
                            size={20} 
                            color="black" 
                            style={{marginLeft: 'auto'}}
                            onPress={()=> closeBottom()}
                        />
                </View>
                
                <HLine />
                <ScrollView>
                    {comments.map(c => (
                        <>
                            <View style={{backgroundColor: themes.colors.main, marginTop: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '55%'}}>
                                        <View>
                                            <MaterialCommunityIcons name="face-profile" size={24} color="black" />
                                        </View>
                                        <View style={{marginLeft: 10, marginTop: 3}}>
                                            <Text style={{fontWeight: 'bold'}}>
                                                {c.name}
                                                
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{marginLeft: 10, marginTop: 4, alignItems: 'flex-end', width: '40%'}}>
                                        <Text style={{fontSize: 10, color: themes.colors.gray}}>
                                            {c.date}
                                        </Text>
                                    </View>
                                </View>
                            
                                <View style={{alignItems: 'flex-start', marginTop: 5, marginLeft: 35}}>
                                    <Text style={{fontSize: 15, color: themes.colors.darkgray, marginBottom: 10}}>
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
        backgroundColor: themes.colors.main
    },
    Title: {
        backgroundColor: themes.colors.main,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '600'
    },
    Writer: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        width: '25%'
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
        color: themes.colors.black
    },
    Likes: {
        marginLeft: 20, 
        marginTop: 20,
        fontSize: 22,
        color: themes.colors.gray
    },
    Count: {
        marginLeft: 10, 
        marginTop: 20,
        fontSize: 22,
        color: themes.colors.gray
    },
    Tag: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 12,
        color: themes.colors.gray,
    },
    CommentTitle: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '8%'
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
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        width: '85%'
    },
    CommentName: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '15%'
        
    }
})