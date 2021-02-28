import React, {useState, useEffect} from 'react';
import {View, Modal, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList, Platform} from 'react-native';
import styled from 'styled-components';
import {ScrollView} from 'react-native-gesture-handler';
import {SimpleLineIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {SearchInput, SearchTap} from '../component/common/Search';

import NoticeCard from '../component/common/NoticeCard';
import NcsCard from '../component/common/NcsCard';
import PsatCard from '../component/common/PsatCard';

import ContentTitleNotice from '../component/common/ContentTitleNotice';
import ContentTitleNcs from '../component/common/ContentTitleNCS';
import ContentTitlePsat from '../component/common/ContentTitlePSAT';
import {H1} from '../config/Typography';

import {lectureApi, noticeApi} from '../api';

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

const Heading = styled.View`
        font-Family: 'HelveticaNeue';
        font-Size: 28;
        font-Weight: 'bold';
        margin-Top: 5;
`;

const testData = [
    {
        title: '예시1',
        image: require('../images/thumb/thumb_01.jpg')
    },
    {
        title: '예시2',
        image: require('../images/thumb/thumb_02.jpg')
    },
    {
        title: '예시3',
        image: require('../images/thumb/thumb_03.jpg')
    },
    {
        title: '예시4',
        image: require('../images/thumb/thumb_04.jpg')
    },
    {
        title: '예시5',
        image: require('../images/thumb/thumb_05.jpg')
    },
    
]

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

        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const navigation = useNavigation();
    const goToDetail = (id, category) => {
        navigation.navigate("Detail", {id, category})
        console.log("112391283019283012983", category)
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
                    onPress={() => goToDetail(item.id, item.category)}
                    title={item.title}
                    // image={item.image}
                />
            )
    }

    const renderNotice = ({item}) => {
        return (
            <NoticeCard 
                onPress={() => goToDetail(item.id, item.category)}
                name={item.title}
                desc={item.desc}
                src={item.thumbnail[0].url}
            />
        )
    }

    const renderPSAT = ({item}) => {
        return (
            <PsatCard 
                onPress={() => goToDetail(item.id, item.category)}
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
                    onPress={() => navigation.navigate("Profile")}
                    style={{padding: 20, marginLeft: 60}}
                >
                    <Image
                        source={require('../images/profile_sample.jpeg')}
                        style={{width: 30, height: 30, borderRadius: 15}}

                    />

                    {/* <SimpleLineIcons
                        name="settings"
                        size={22}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 10
                        }}                        
                    /> */}
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
                            <ContentTitleNotice
                                title={"NOTICE"}
                            />
                                <FlatList 
                                    data={notices}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderNotice}
                                />
                            <ContentTitleNcs
                                title={"NCS"}
                            />
                            <FlatList 
                                data={lectures.ncs}
                                // data={testData}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderNCS}
                            />
                            <ContentTitlePsat 
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

    );
    
};

export default Home;
