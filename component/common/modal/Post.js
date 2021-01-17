import React, {useState, useRef} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, View, ScrollView, Button, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import themes from '../../../config/themes';
import RegisterBtn from '../../common/RegisterBtn';
import RBSheet from 'react-native-raw-bottom-sheet';
import Category from '../Category';

const UselessTextInput = (props) => {
    return (
        <TextInput 
            {...props}
            editable
            maxLength={2000}
            multiline
        />
    )
};



const {height} = Dimensions.get("window");

const Post = ({visible, close}) => {

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
        setInquire(param);
        closeBottom();
    }

    return (
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
                    style={{marginVertical: 20}}
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
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={{flex: 1, paddingVertical: 10}}
                                >
                                    카테고리
                                </Text>
                                <TouchableOpacity
                                    onPress={()=> closeBottom()}
                                >
                                    <AntDesign name="close" size={20} color="black" />
                                </TouchableOpacity>
                                

                            </View>
                            <View
                                style={{alignItems: 'center'}}
                            >
                                {postCategory.map(category => (
                                    <Text style={{color: 'black'}}
                                        onPress={() => inquireMenu(category)}
                                    >
                                        {category}
                                    </Text>
                                ))}
                            </View>

                        </RBSheet>
                        <View
                            style={styles.textContainer}
                        >
                            <UselessTextInput 
                                placeholder={`내용을 입력해주세요. ${`\n`}자유롭게 입력하시면 됩니다.`}
                                placeholderText={{fontSize: 10}}
                                value={value}
                                style={{paddingVertical: 24, paddingHorizontal: 12}}
                            />
                        </View>
                        <View >
                            <TouchableOpacity
                                style={[styles.fileContainer, {marginTop: 15}]}
                                onPress={() => alert('파일 업로드')}
                            >
                                <Text>
                                    첨부파일 추가
                                </Text>
                                <MaterialIcons name="add" size={24} color="black" 
                                    style={{opacity:0.5}}
                                />
                            </TouchableOpacity>
                            <Text>
                                첨부파일 등록은 최대 5MB, 3장까지 등록가능합니다.
                            </Text>
                        </View>
                    </View>
                    
                </ScrollView>
                
                <RegisterBtn 
                    title={'등록'}
                    containerStyle={{
                        backgroundColor: themes.colors.lightgray,
                        borderColor: themes.colors.gray,
                        borderRadius: 4,
                        marginBottom: 0
                    }}
                    // 인콰이어메뉴 참고해서 등록으로 모달이 닫히게끔 설정
                />
            </SafeAreaView>
            
        </Modal>
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
        marginTop: 30

    },
    textContainer: {
        width: '100%',
        height: height/3,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        marginTop: 12,
        paddingVertical: 12,
        paddingHorizontal: 6
    },
    fileContainer: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: themes.colors.lightgray,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})