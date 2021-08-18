import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themes from '../../../config/themes';
import {FontAwesome} from '@expo/vector-icons';
import PostModal from '../../../component/common/modal/Post';
import { ScrollView } from 'react-native-gesture-handler';

import axios from 'axios';

import PostList from '../../../component/common/PostList';
import { theme } from 'galio-framework';
import { COLORS } from '../../../consts';


const PostPage = () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    //게시판 초기 탭 설정
    const [active, setActive] = useState('전체');
    
    const [bbs, setBbs] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    const getBbsData = async() => {
        axios   
            .get("http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/bbs")
            .then(bbss => {
                setBbs(bbss.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBbsData();
        setFilteredData();
    }, [])

    //게시판 탭 설정
    const tabs = ['전체', '자유게시판', '질문게시판', '합격수기'];

    const [postModal, setPostModal] = useState(false);

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerRight: () => (
    //         <TouchableOpacity
    //           onPress={() => setPostModal(true)}
    //           style={{marginRight: 10}}>
    //         <FontAwesome 
    //             size={24}
    //             color='black'
    //             name='pencil-square-o'
    //         />
    //         </TouchableOpacity>
    //       ),
    //     });
    //   }, [navigation]);

    const renderTab = (tab) => {
        const isActive = active === tab;

        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => handleTab(tab)}
                style={[styles.tab, isActive ? styles.active : null]}
            >
                <Text style={{fontSize: 15, fontWeight: 'bold', color: isActive ? themes.colors.basic : themes.colors.gray}}>
                    {tab}
                </Text>
                
            </TouchableOpacity>
        )
    }

    const handleTab = tab => {
        const filtered = bbs.filter(item =>
            item.tag.includes(tab.toLowerCase())
        );
        setActive(tab)
        setFilteredData(filtered)

        
    }

    return (
        <SafeAreaView style={styles.safeView} >
            <View style={[styles.tabs]}>
                {tabs.map(tab => renderTab(tab))}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {loading ? (
                    <View style={{marginTop: 200, justifyContent: 'center'}}>
                        <ActivityIndicator color={COLORS.black} size={'large'} />
                    </View> 
                ) : (
                    <> 
                        {active === '전체' && <PostList datas={bbs}/>}
                        {active === '자유게시판' && <PostList datas={filteredData} /> }
                        {active === '질문게시판' && <PostList datas={filteredData} /> }
                        {active === '합격수기' && <PostList datas={filteredData} /> }
                        {postModal && <PostModal />}
                       
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
        backgroundColor: themes.bgColor.bgcolor,
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
        borderBottomColor: themes.colors.basic,
        // themes.colors.title,
        borderBottomWidth: 3
    },
    postList: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingVertical: 10, 
        paddingRight: 10
    },


})
