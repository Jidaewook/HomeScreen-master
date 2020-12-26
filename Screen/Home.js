import React, {useState, useEffect} from 'react';
import {View, Button, Modal, StyleSheet, StatusBar, Image, TouchableOpacity, ActivityIndicator, FlatList, Platform} from 'react-native';
import styled from 'styled-components';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import themes from '../config/themes';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {SearchInput, SearchTap} from '../component/common/Search';
import SearchBar from 'react-native-search-bar';

import NoticeCard from '../component/common/NoticeCard';
import NcsCard from '../component/common/NcsCard';
import PsatCard from '../component/common/PsatCard';
import {colors} from '../config/themes';

import ContentTitle from '../component/common/ContentTitle';
import {H, H4, H1} from '../config/Typography';

import {lectureApi, noticeApi} from '../api';
import { AsyncStorage } from 'react-native';


const Common = styled.SafeAreaView`
    ${Platform.select({
        ios: {
            fontFamily: "Avenir",
        },
        android: {
            fontFamily: "Roboto",
            paddingTop: StatusBar.currentHeight,
        },
    })}
    background-color: white;
    flex: 1;
`;

const Container = styled.View`
    flex: 1;
`;

const SearchArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Safe = styled.SafeAreaView`
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
    flex: 1;
`;

const HLine = styled.View`
    width: 100%;
    margin: 0 auto;
    height: 1px;
background-color: ${'#f4f4f4'};
`;

const InputArea = styled.TextInput`
    margin-left: 10px;
`;

const CancelBtn = styled.Text`
    color: ${'gray'};
    text-decoration: underline;
    margin-left: 10px;
    margin-top: 5px;
    font-size: 15 ;   
`;

const ResultWrapper = styled.ScrollView`
    flex: 1;
    padding: 18px;
`;

const HeroText = styled.View`
    padding-top: 15px;
    padding-Left: 15px;
    padding-bottom: 15px;
`;

const Home = ({}) => {

    const [lectures, setLectures] = useState({
        ncs: [],
        psat: [],
        ncsError: null,
        psatError: null
    });

    const [notices, setNotices] = useState([])

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice(); 

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError
        });

        setNotices(notice);

        // console.log('-----', notice)
        setLoading(false);
    };

    useEffect(() => {
        getData();
        // console.log("+++++++++++", AsyncStorage.getItem("token"))
    }, []);

    const navigation = useNavigation();
    const goToDetail = (id) => {
        // console.log("ID", id)
        navigation.navigate("Detail", {id})
    };

    const [searchModal, setSearchModal] = useState(false);
    const [keyword, setKeyword] = useState("");

    const InitialCities = [
        { title: "Seoul" },
        { title: "Busan" },
        { title: "Jeju" },
    ];

    const filteredCity = InitialCities.filter((city) => {
        return city.title.toLowerCase().includes(keyword.toLocaleLowerCase());
    });

    const renderNCS = ({item, index}) => {
            return (
                <NcsCard 
                    onPress={() => goToDetail(item.id)}
                    title={item.title}
                    // src={require('../images/Notice001.png')}
                />
            )
    }

    const renderNotice = ({item}) => {
        return (
            <NoticeCard 
                onPress={() => goToDetail(item.id)}
                name={item.title}
                desc={item.desc}
                src={item.thumbnail[0].url}
            />
        )
    }

    const renderPSAT = ({item}) => {
        return (
            <PsatCard 
                onPress={() => goToDetail(item.id)}
                name={item.title}
                desc={item.desc}
                src={item.thumbnail[0].url}
            />
        )
    }

    return (
        <Common>
            <Container>
                <View
                    style={{felx: 1, flexDirection: 'row'}}
                >
                <HeroText>
                    <H1 colors={'gray'}>패스매니저 PassMeNCS</H1>
                </HeroText>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Setting")}
                    style={{padding: 20, marginLeft: 60}}
                >
                    <SimpleLineIcons
                        name="settings"
                        size={22}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 10
                        }}                        
                    />
                </TouchableOpacity>
                </View>
                <HLine />
                <SearchTap 
                    placeholder={"Search Contents"}
                    icon={"search"}
                    size={20}
                    setSearch={() => setSearchModal(true)}
                />
                <Modal
                    visible={searchModal}
                    animationType={"slide"}
                >
                    <Safe>
                        <FlatList 
                            ListHeaderComponent={
                                <SearchArea>
                                    <SearchInput 
                                        placeholder={"search"}
                                        onChangeText={(text) => setKeyword(text)}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setSearchModal(false)}
                                    >
                                        <CancelBtn>
                                            Cancel
                                        </CancelBtn>
                                    </TouchableOpacity>
                                </SearchArea>
                            }   
                            keyboardShouldPersistTaps={"handled"}
                            data={filteredCity}
                        />
                    </Safe>
                </Modal>
                <HLine />
                
                <ScrollView>
                    
                    {loading ? ( 
                            <View style={{marginTop: 200, justifyContent: 'center'}}>
                                <ActivityIndicator color={'black'} size={'large'} />
                            </View> 
                    ) : (
                        <>
                            <ContentTitle 
                                title={"NOTICE"}
                            />
                                <FlatList 
                                    data={notices}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderNotice}
                                />
                            <ContentTitle 
                                title={"NCS"}
                            />
                            <FlatList 
                                data={lectures.ncs}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderNCS}
                            />
                            <ContentTitle 
                                title={"PSAT"}
                            />
                            <FlatList 
                                data={lectures.psat}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderPSAT}
                            />
                        </>
                    )}
                </ScrollView>
            </Container>
        </Common>

        // <ScrollView
        //     showsVerticalScrollIndicator={false}
        //     style={styles.ScrollContainter}
        // >
        //     {loading ? <ActivityIndicator /> : (
        // <>
        //     <View style={styles.ViewContainer}>
        //         <View style={styles.ViewBox}>
        //             <Text style={styles.TitleFont}>
        //                 Main
        //             </Text>
        //         </View>
        //         <View style={styles.ViewSetting}>
        //             <TouchableOpacity
        //                 onPress={() => navigation.navigate("Setting")}
        //             >
        //                 <SimpleLineIcons
        //                     name="settings"
        //                     size={22}
        //                     style={{
        //                         width: 24,
        //                         height: 24,
        //                         marginRight: 10
        //                     }}                        
        //                 />
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        //     <TouchableOpacity 
        //         style={styles.SearchView}
        //         onPress={() => {setSearchModal(true)}}
        //     >
        //         <SearchTap 
        //             placeholder={"Search..."}
        //             icon={"search"}
        //             size={20}
        //             setSearch={() => setSearchModal(true)}
        //         />
        //         {/* <View style={styles.SearchBar}>
        //             <Octicons 
        //                 name="search"
        //                 size={22}
        //             />
                        
        //                 <View style={styles.ViewSort}>
        //                     {/* <Text
        //                         style={styles.SearchInput}
        //                     />
        //                         123123
        //                     </Text> */}
        //                     {/* <MaterialCommunityIcons
        //                         name="sort"
        //                         size={22}
        //                         style={styles.IconSort}
        //                     />
        //                 </View>
        //         </View> */} 
        //     </TouchableOpacity>
        //     <View style={{flex: 1, flexDirection: 'row'}}>
        //     <ContentTitle 
        //         title={"NOTICE"}
        //     />
            
        //     </View>
           
        //     <ScrollView
        //         horizontal
        //         showsHorizontalScrollIndicator={false}
        //         style={{marginLeft: 15, marginRight: 10, marginTop: 5}}
        //     >
                
        //         {notices.notice.map(item => (
        //                 <NoticeCard 
        //                     onPress={() => goToDetail(item.id)}
                            
        //                     name={item.title}
        //                     src={item.thumbnail[0].url}
        //                     desc={item.desc}
        //                 />
        //         ))}
        //     </ScrollView>
            
        //     <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
        //         <ContentTitle 
        //             title={"NCS Class"}
        //         />
        //     </View>
        //     <ScrollView
        //         horizontal
        //         showsHorizontalScrollIndicator={false}
        //         style={{marginLeft: 15, marginRight: 10, marginTop: 5, marginBottom: 20}}
        //     >
        //         {lectures.ncs.map(item => (
        //                 <NcsCard
        //                     // src={item.thumbnail[0].url}
        //                     title={item.title}
        //                 />
        //         ))}
                      
        //     </ScrollView>
        //     <ContentTitle 
        //             title={"PSAT Class"}
        //         />
        //     <ScrollView
        //         horizontal
        //         showsHorizontalScrollIndicator={false}
        //     >
        //         {lectures.psat.map(item => (
        //                 <PsatCard  
        //                     title={item.title}
        //                     src={item.thumbnail[0].url}
        //                     desc={item.desc}
        //                 />
        //         ))}
        //     </ScrollView>
            
        //         </>
        //     )}
        //   <Modal
        //         animationType="slide"
        //         visible={searchModal}
        //         onRequestClose={() => setSearchModal(false)}
        //     >
        //         <View>
        //             <SafeAreaView
        //                 style={{
        //                     paddingTop: 100,
        //                     flex: 1,
        //                     width: '100%',
        //                     height: '100%',
        //                     backgroundColor: 'black'
        //                 }}
        //             >
        //                 <FlatList
        //                     ListHeaderComponent={
        //                         <View
        //                             style={{
        //                                 flexDirection: 'row',
        //                                 alignItems: 'center',
        //                                 justifyContent: 'center',
        //                                 padding: 10
        //                             }}
        //                         >
        //                             <SearchInput 
        //                                 placeholder={"search"}
        //                                 onChangeText={(text) => setKeyword(text)}
        //                             />
        //                             <TouchableOpacity
        //                                 onPress={() => setSearchModal(false)}
        //                             >
        //                                 <Button
        //                                     title="Cancle"
        //                                 />
        //                             </TouchableOpacity>
        //                         </View>
        //                     }   
        //                     keyboardShouldPersistTaps={"handled"}
        //                     data={filteredCity}
        //                 />
        //             </SafeAreaView>
        //             {/* <Button 
        //                 onPress={() => setSearchModal(false)}
        //                 title="I understand"
        //             /> */}
        //         </View>
        //     </Modal>
        // </ScrollView>
    
    );
    
};

export default Home;

// const styles = StyleSheet.create({
//     TopContainer: {
//         backgroundColor: themes.colors.theme
//     },
//     ScrollContainter: {
//         backgroundColor: themes.colors.view,
//         paddingHorizontal: 0
//     },
//     ViewContainer : {
//         flexDirection: 'row',
//         width: '100%',
//         marginTop: 40,
//         alignItems: 'center',
//         // backgroundColor: themes.colors.basic
//     }, 
//     ViewBox: {
//         width: '50%',
//         backgroundColor: themes.colors.view
//     },
//     TitleFont: {
//         fontWeight: 'bold',
//         fontSize: 24,
//         marginLeft: 20
//     },
//     MoreFont: {
//         fontWeight: '200',
//         fontSize: 15,
        
//     },
//     ViewSetting: {
//         width: '50%',
//         alignItems: 'flex-end'
//         // backgroundColor: themes.colors.view

//     }, 
//     SearchView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '100%',
//         marginVertical: 30
//     },
//     SearchBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         elevation: 2,
//         width: '90%',
//         backgroundColor: themes.colors.search,
//         paddingHorizontal: 20,
//         height: 35,
//         borderRadius: 10,
//         marginLeft: 20
//     },
//     SearchInput: {
//         fontWeight: '600',
//         // backgroundColor: '#1111',
//         paddingHorizontal: 10,
//         fontSize: 20,
//         marginLeft: 15
//     },
//     ViewSort: {
//         alignItems: 'center',
//         elevation: 2,
//         width: 50,
//         backgroundColor: '#fff',
//         marginLeft: 5,
//         height: 35,
//         borderRadius: 10,
//         justifyContent: 'center'
//     },
//     IconSort: {
//         marginLeft: 10
//     },
//     add: {
//         alignItems: 'flex-end'
//     }
// })
