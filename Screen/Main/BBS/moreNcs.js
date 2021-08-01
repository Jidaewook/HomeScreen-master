import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, FlatList, Image, Dimensions, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import moment from 'moment';
import Moment from 'react-moment';

import {COLORS, theme} from '../../../consts';
import BadgePill from '../../../component/common/BadgePill';
import themes from '../../../config/themes';

const {width, height} = Dimensions.get('window');

const moreNcs = () => {
    const navigation = useNavigation();

    const categories = ['전체강의', '수리능력', '학습지', '모듈과목', '썰방']
    
    const [active, setActive] = useState('전체강의');

    const [loading, setLoading] = useState(true);

    const [ncs, setNcs] = useState([]);

    const nowTime = Date.now();

    const [filteredData, setFilteredData] = useState([]);

    const getNcsData = async() => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs`)
                .then(res => {
                    console.log('$$$$$$$$$$$$$$$', res.data.results)
                    setNcs(res.data.results)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                });
    }

    useEffect(() => {
        getNcsData();
        console.log('!!!!!!!!', ncs)
    }, [])

    const renderCategory = (category) => {
        const isActive = active === category;
        return (
            <TouchableOpacity
                key={`category-${category}`}
                onPress={() => handleCategory(category)}
                style={[styles.category, isActive ? styles.active : null]}
            >
                <Text style={{fontSize: theme.sizes.h4, fontWeight: 'bold', color: isActive ? COLORS.main4 : COLORS.black }}>
                    {category}
                </Text>
            </TouchableOpacity>
        )
    }

    const handleCategory = category => {
        const filtered = ncs.filter(item => 
            item.genres_ids.includes(category.toLowerCase())
        );
        console.log("filtered", filtered)
        setActive(category)
        setFilteredData(filtered)
    }

    return (
        <SafeAreaView style={{backgroundColor: COLORS.light, height: '100%'}}>
            <View style={styles.categories}>
                {categories.map(category => renderCategory(category))}
            </View>
            <View style={{backgroundColor: COLORS.light}}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    // ListHeaderComponent={
                    //     <ScrollView
                    //         pagingEnabled={true}
                    //         horizontal
                    //         showsHorizontalScrollIndicator={false}
                    //         style={{
                    //             height: 150,
                    //             width: '100%'
                    //         }}
                    //     >
                    //         <Text>
                    //             광고영역
                    //         </Text>
                    //     </ScrollView>
                    // }
                    data={filteredData.length == 0 ? (ncs) : (filteredData)}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => (
                        <View style={styles.cardView}>
                            <ImageBackground source={require('../../../assets/cloudy.jpeg')} style={styles.bgImage}>
                            
                            <View style={{height: 20, marginTop: 240 }}>
                                <Text style={styles.cardContent}>
                                    {item.title.slice(0,15)}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.cardDesc}>
                                    {item.desc.slice(0,20)}
                                </Text>
                            </View>
                            </ImageBackground>
                            <View style={styles.footer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Detail', {id: item._id})}
                                >

                                    <Text>바로가기</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    )}
                />
            </View>

        </SafeAreaView>
    );
};

export default moreNcs;

const styles = StyleSheet.create({
    category: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 3
    },
    safeView: {

    },
    categories: {
        borderBottomColor: COLORS.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 1,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    bbsList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingRight: 10

    }, 
    // titleStyle: {
    //     fontSize: theme.sizes.h4,
    //     letterSpacing: -.72,
    //     fontWeight: '500',
    //     color: COLORS.black,
    //     paddingVertical: 10,
    //     marginHorizontal: 15
    // },
    badgePill: {
        fontSize: theme.sizes.h5,
        letterSpacing: -0.6,
        color: COLORS.black,
        opacity: .5
    },
    bgImage: {
        flex: 1, 
        width: '100%', 
        height: '100%', 
        resizeMode: 'stretch', 
        marginTop: 5, 
        // marginRight: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        // borderRadius: 100,
        opacity: 0.9
    },
    cardView: {
        // backgroundColor: COLORS.gray1,
        flex: 1, 
        margin: 20,
        // width: width,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flexGrow: 0
    }, 
    cardContent: {
        // backgroundColor: COLORS.gray1,
        flex: 1,
        marginTop: 0,
        // marginLeft: 10,
        // marginRight: 10,
        width: '90%',
        height: 30,
        textAlign: 'left',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        fontSize: themes.sizes.h3
    },
    cardDesc: {
        flex: 1,
        // marginLeft: 10,
        // marginRight: 10,
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        // backgroundColor: COLORS.purple
    },  
    footer: {
        backgroundColor: COLORS.tertiary,
        margin: 0,
        height: 30,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
})