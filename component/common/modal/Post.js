import React, {useState, useRef} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, View, ScrollView, Button, StyleSheet, SafeAreaView, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import themes from '../../../config/themes';
import RegisterBtn from '../../common/RegisterBtn';
import RBSheet from 'react-native-raw-bottom-sheet';
import HLine from '../HLine';
import Category from '../Category';
import { color, set } from 'react-native-reanimated';
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

    const [inquire, setInquire] = useState('문의구분');
    const [value, setValue] = useState('');

    const refRBSheet = useRef();

    const openBottom = () => {
        refRBSheet.current.open();
    }

    const closeBottom = () => {
        refRBSheet.current.close();
    }

    const postCategory = ['QNA', '자유게시판', '합격수기'];

    const inquireMenu = (param) => {

        if(param === "QNA") {
            setInquire("bbs")
        } else if (param === "자유게시판") {
            setInquire("qnas")
        } else if (param === "합격수기") {
            setInquire("pass")
        }
        closeBottom();
    }

    const registerPost = () => {   
        
        
        if(inquire === "문의구분" || title === "" || desc === ""){
            return alert("빈 칸이 있으면 등록할 수 없습니다.")
        } 

        axios.post(`https://hidden-earth-75958.herokuapp.com/${inquire}`, {
            title: title,
            desc: desc,
            tag: [tag]
        })
            .then(result => complete)
            .catch(err => console.log(err))
            

    }



    return (
        <DismissKeyboard>

            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={close}
            >
                <SafeAreaView
                    style={{ marginLeft: 20, marginRight: 20}}
                >
                    <View
                        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}
                    >
                        <Text
                            style={{fontSize: 30, fontWeight: 'bold'}}
                        >
                            글쓰기
                        </Text>
                        
                        <TouchableOpacity
                            onPress={close}
                            style={{marginRight: 15}}
                        >
                            <AntDesign name="close" size={24} color="black" />
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
                                    style={{color: 'black', fontWeight: 'bold'}}
                                >
                                    {inquire}
                                </Text>
                                <AntDesign name="down" size={12} color="black" 
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
                                        카테고리
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

                                <View
                                    style={{alignItems: 'center'}}
                                >
                                    {postCategory.map(category => (
                                        <>
                                            <Text style={{color: 'black', margin: 10, fontSize: 16, fontWeight: 'bold', color: themes.colors.buttonText}}
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
                                backgroundColor: themes.colors.lightgray,
                                borderColor: themes.colors.gray,
                                borderRadius: 4
                            }}
                            onPress={registerPost} 
                            // 인콰이어메뉴 참고해서 등록으로 모달이 닫히게끔 설정
                        />
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