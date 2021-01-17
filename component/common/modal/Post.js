import React from 'react';
import {Modal, Text, View, ScrollView, Button, StyleSheet, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';

const Post = ({visible, close}) => {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={close}
        >
            <SafeAreaView
                style={{marginTop: 30, marginLeft: 20}}
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
            </SafeAreaView>
            
        </Modal>
    );
};

export default Post;