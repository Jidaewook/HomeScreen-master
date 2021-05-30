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
import themes from '../config/themes';

import {lectureApi, noticeApi} from '../api';
import movieApi from '../movieApi';
import Axios from 'axios';

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

const you_Sam_Data = [
    {
        id: 1101822001,
        title: '시간, 속력, 거리 (1)',
        desc: "수리능력 중 응용수리 영역의 첫 번째 난관, 시간/속력/거리 첫번째 시간",
        genre_ids: [
          14,
          101
        ],
        rating: 5.5,
        poster_path: require("../assets/images/thumb/sample1.png"),
        backdrop_path: require('../assets/images/thumb/back1.jpeg'),
        professor: {},
        comments: [],
        likes: [],
        url: `https://youtu.be/16iF_hKs034`
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
        // const [ncs, ncsError] = await lectureApi.ncs();
        const [ncs, ncsError] = Axios('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs');
        const [psat, psatError] = await lectureApi.psat();
        // const [notice, noticeError] = await noticeApi.notice(); 
        const [movie, movieError] = await movieApi.movie();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError
        });

        setNotices(notice);

        setMovies(movie);

        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const navigation = useNavigation();
    const goToDetail = (id, genre) => {
        navigation.navigate("Detail", {id, genre})
        console.log("112391283019283012983", genre)
    };

    const [searchModal, setSearchModal] = useState(false);
    const [keyword, setKeyword] = useState("");

    const renderNCS = ({item, index}) => {
            return (
                <NcsCard 
                    onPress={() => goToDetail(item.id, item.genre)}
                    title={item.title}
                    image={item.image}
                />
            )
    }

    const renderNotice = ({item}) => {
        return (
            <NoticeCard 
                onPress={() => goToDetail(item.id, item.genre_ids)}
                name={item.title}
                desc={item.desc}
                image={item.poster_path}
                // src={item.thumbnail[0].url}
            />
        )
    }

    const renderPSAT = ({item}) => {
        return (
            <PsatCard 
                onPress={() => goToDetail(item.id, item.category)}
                name={item.title}
                desc={item.desc}
                image={item.image}

                // src={item.thumbnail[0].url}
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
                    <H1 colors={themes.fontsColor.Title}>패스매니저 PassMeNCS</H1>
                </HeroText>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style={{padding: 20, marginLeft: 55}}
                >
                    <Image
                        source={require('../images/profile_sample.jpeg')}
                        style={{width: 30, height: 30, borderRadius: 15}}

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
                            <ContentTitleNotice
                                title={"NOTICE"}
                            />
                                {/* <FlatList 
                                    // data={movie}
                                    data={you_Sam_Data}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderNotice}
                                    style={{width: '98%', marginBottom: -30}}
                                /> */}
                            <ContentTitleNcs
                                title={"NCS"}
                            />
                            <FlatList 
                                // data={lectures.ncs}
                                // data={testData}
                                data={you_Sam_Data}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderNCS}
                                style={{width: '98%'}}

                            />
                            <ContentTitlePsat 
                                title={"PSAT"}         
                            />
                            <FlatList 
                                // data={lectures.psat}
                                data={you_Sam_Data}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderPSAT}
                                style={{width: '98%'}}

                            />
                        </>
                    )}
                </ScrollView>
            </Container>
        </Common>

    );
    
};

export default Home;
