import React, {useState, useRef} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, View, ScrollView, Button, StyleSheet, SafeAreaView, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import themes from '../../../config/themes';
import RegisterBtn from '../../common/RegisterBtn';
import RBSheet from 'react-native-raw-bottom-sheet';
import HLine from '../HLine';
import axios from 'axios';

const UselessTextInput = (props) => {
    return (
        <TextInput 
            {...props}
            editable
            maxLength={2000}
            multiline={true}
        />
    )
};

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
        {children}
    </TouchableWithoutFeedback>
);

const {height} = Dimensions.get("window");

const Post = ({visible, close, complete}) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tag, setTag] = useState('');

    const [inquire, setInquire] = useState('게시판');
    const [list, setList] = useState('게시판');
    const [value, setValue] = useState('');
    const [show, setShow] = useState(true);

    const refRBSheet = useRef();

    const openBottom = () => {
        refRBSheet.current.open();
    }

    const closeBottom = () => {
        refRBSheet.current.close();
    }

    const postCategory = ['자유게시판', '질문게시판', '합격수기'];

    const inquireMenu = (param) => {

        if(param === "자유게시판") {
            setInquire("bbs")
            setList("자유게시판")
        } else if (param === "질문게시판") {
            setInquire("qnas")
            setList("질문게시판")
        } else if (param === "합격수기") {
            setInquire("pass")
            setList("합격수기")
        }
        closeBottom();
    }

    const registerPost = () => {   
        const userData = {
            category: list,
            title: title,
            desc: desc,
            tag: tag
        }
        
        if(inquire === "게시판" || title === "" || desc === ""){
            return alert("빈 칸이 있으면 등록할 수 없습니다.")
        } 

        axios
            .post(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/bbs`, userData)
            .then(() => {
                
                
            })
            .catch(err => console.log("!!!!!!!!!", err))
        

    }



    return (
        <DismissKeyboard>

            <Modal
                animationType="slide"
                visible={show}
                onRequestClose={setShow(false)}
                presentationStyle={'overfullScreen'}
            >
                <SafeAreaView
                    style={{ backgroundColor: themes.colors.background
                    }}
                >
                    <View
                    style={{ marginLeft: 20, marginRight: 20, backgroundColor: themes.colors.background
                    }}
                    >

                    <View
                        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: themes.colors.background }}
                    >
                        <Text
                            style={{fontSize: 30, fontWeight: 'bold', color: themes.colors.black
                        }}
                        >
                            글쓰기
                        </Text>
                        
                        <TouchableOpacity
                            onPress={setShow(false)}
                            style={{marginRight: 15}}
                        >
                            <AntDesign name="close" size={24} color={themes.colors.basic} />
                        </TouchableOpacity>
                            
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{marginVertical: 10, height: '80%'}}
                    >
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() => openBottom()}
                            >
                                <Text
                                    style={{color: 'black', fontWeight: 'bold', color: themes.colors.basic}}
                                >
                                    {list}
                                </Text>
                                <AntDesign name="down" size={12} color={themes.colors.basic}
                                    style={{opacity: 0.3}}
                                />
                            </TouchableOpacity>
                            <RBSheet
                                ref={refRBSheet}
                                height={height/3.5}
                                closeOnDragDown={true}
                                closeOnPressMask={true}
                                customStyles={{
                                    wrapper: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                                        
                                    },
                                    draggableIcon: {
                                        backgroundColor: themes.colors.main,
                                        
                                    },
                                    container: {
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        paddingHorizontal: 10,
                                        backgroundColor: themes.colors.background
                                    }
                                }}
                            >
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginLeft: 25}}>
                                    <Text
                                        style={{flex: 1, fontSize: 16, color: themes.colors.basic, fontWeight: 'bold', textAlign: 'center'}}
                                    >
                                        게시판 선택
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

                                <View
                                    style={{alignItems: 'center'}}
                                >
                                    {postCategory.map(category => (
                                        <>
                                            <Text style={{margin: 10, fontSize: 16, fontWeight: 'bold', color: themes.colors.darkgray}}
                                                onPress={() => inquireMenu(category)}
                                            >
                                                {category}
                                                
                                            </Text>
                                            <HLine />
                                        </>
                                    ))}
                                </View>

                            </RBSheet>
                            <View
                                style={styles.titleContainer}
                            >
                                <TextInput 
                                    editable
                                    maxLength={100}
                                    placeholder={'제목을 입력해주세요'}
                                    placeholderText={{fontSize: 10, color: 'black'}}
                                    value={title}
                                    style={{paddingHorizontal: 12}}
                                    onChangeText={text => (
                                        setTitle(text)
                                    )}
                                />
                                
                            </View>
                            <View
                                style={styles.textContainer}
                            >
                                <UselessTextInput 
                                    placeholder={`내용을 입력해주세요. ${`\n`}자유롭게 입력하시면 됩니다.`}
                                    placeholderText={{fontSize: 10}}
                                    value={desc}
                                    style={{paddingVertical: 24, paddingHorizontal: 12}}
                                    onChangeText={text => (
                                        setDesc(text)
                                    )}
                                />
                            </View>
                            <View
                                style={styles.titleContainer}
                            >
                                <TextInput 
                                    editable
                                    maxLength={100}
                                    placeholder={'태그는 4글자 이내, 4개까지 입력 가능합니다.'}
                                    placeholderText={{fontSize: 10}}
                                    value={tag}
                                    style={{paddingHorizontal: 12}}
                                    onChangeText={text => (
                                        setTag(text)
                                    )}
                                />
                            </View>
                            <View >
                                <TouchableOpacity
                                    style={[styles.fileContainer, {marginTop: 10}]}
                                    onPress={() => alert('파일 업로드')}
                                >
                                    <Text
                                        style={{alignItems: 'center', justifyContent: 'center'}}
                                    >
                                        첨부파일 추가
                                    </Text>
                                    <MaterialIcons name="add" size={20} color="black" 
                                        style={{opacity:0.5}}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.footnote}>
                                    첨부파일 등록은 최대 5MB, 3장까지 등록가능합니다.
                                </Text>
                            </View>
                        </View>
                        
                    </ScrollView>
                    <View
                        style={{marginBottom: 10}}
                    >
                        <RegisterBtn 
                            title={'등록'}
                            containerStyle={{
                                backgroundColor: themes.colors.brightGray,
                                borderColor: themes.colors.black,
                                borderRadius: 4,
                            }}
                            textStyle={{
                                color: themes.colors.basic,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}
                            onPress={registerPost} 
                            // 인콰이어메뉴 참고해서 등록으로 모달이 닫히게끔 설정
                        />
                    </View>
                    </View>

                </SafeAreaView>
                
            </Modal>
        </DismissKeyboard>

    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,

    },
    titleContainer: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        borderRadius: 5,
        marginTop: 12,
        paddingVertical: 12,
        paddingHorizontal: 6,
        color: 'black'
    },
    textContainer: {
        width: '100%',
        height: height/3,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        marginTop: 12,
        paddingVertical: 12,
        paddingHorizontal: 6,
        borderRadius: 5,

    },
    fileContainer: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footnote: {
        marginTop: 10, 
        marginLeft: 5, 
        fontSize: 12, 
        color: themes.colors.gray
    }
})