import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';
import {FontAwesome} from '@expo/vector-icons';
import PostModal from '../../../component/common/modal/Post';

const PostPage = () => {

    const navigation = useNavigation();

    //게시판 초기 탭 설정
    const [active, setActive] = useState('QNA');

    const [qna, setQna] = useState([]);

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
            {active === 'QNA' ? (
                <View>
                    <Text>
                        qna
                    </Text>
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
    }

})
