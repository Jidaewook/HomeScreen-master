import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';

const PostPage = () => {

    const navigation = useNavigation();

    //게시판 초기 탭 설정
    const [active, setActive] = useState('QNA');

    const [qna, setQna] = useState([]);

    const [free, setFree] = useState([]);

    const [pass, setPass] = useState([]);

    //게시판 탭 설정
    const tabs = ['QNA', '자유게시판', '합격수기'];

    

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
