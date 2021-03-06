import React from 'react';
import {View, Text, ScrollView ,Button, Modal, Dimensions, StyleSheet, StatusBar, Image, TouchableOpacity, ActivityIndicator, FlatList, Platform} from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const PsatBbs = () => {
    return (
        <ScrollView
            style={styles.container}
        >
            <View>
                <Text style={styles.heading}>
                    PSAT게시판
                </Text>
                <Text style={styles.subHeading}>
                    For 민경채/7급/5급 공채
                </Text>
            </View>
            <View
                style={styles.sectionWrapper1}
            >
                <View style={styles.item1}>
                    <Image 
                        style={[styles.basicImg, {width: '50%', height: '40%', resizeMode: 'stretch', marginTop: 5, marginRight: 5}]}
                        
                        source={require('../../../assets/meteor.png')}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, {color: "white"}]}>
                            5급공채 기출해설
                        </Text>
                        <Text style={[styles.cardSubTitle, {color: "white"}]}>
                            시험의 기본
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    {backgroundColor: "white"}
                                ]}
                            >
                                <Text style={styles.btnLabel}>
                                    바로가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.item1, {backgroundColor: '#4293f5'}]}>
                    <Image 
                        style={[styles.basicImg, {width: '50%', height: '40%', resizeMode: 'stretch', marginTop: 5, marginRight: 5}]}
                        
                        source={require('../../../assets/planet.png')}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, {color: "white"}]}>
                            민경채 기출해설
                        </Text>
                        <Text style={[styles.cardSubTitle, {color: "white"}]}>
                            For NCS/7급/민경채
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    {backgroundColor: "white"}
                                ]}
                            >
                                <Text style={styles.btnLabel}>
                                    바로가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dailyThoughtsWrapper}>
                <Image
                style={styles.bgShape1}
                source={require('../../../assets/cloudy.jpeg')}
                />
                <Image
                style={styles.bgShape2}
                // source={require('../../../assets/bg2.png')}
                />
                <Image
                style={styles.bgShape3}
                // source={require('../../../assets/bg3.png')}
                />
                <View>
                <Text style={styles.dailyTitle}>습관을 만드는 영상 칼럼</Text>
                <Text style={styles.dailySubTitle}>조금씩 매일 앞으로</Text>
                </View>
                <View>
                {/* <Image source={require('../../..')} /> */}
                </View>
            </View>
            <View
                style={[styles.sectionWrapper1, {marginTop: 15}]}
            >
                <View style={[styles.item1, {backgroundColor: '#2ff5e4'}]}>
                    <Image 
                        style={[styles.basicImg, {width: '50%', height: '40%', resizeMode: 'stretch', marginTop: 5, marginRight: 5}]}
                        
                        source={require('../../../assets/searching.png')}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, {color: "black"}]}>
                            5급공채 기본강의
                        </Text>
                        <Text style={[styles.cardSubTitle, {color: "black"}]}>
                            쉽고 빠르게 익히는 PSAT
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    {backgroundColor: "white"}
                                ]}
                            >
                                <Text style={styles.btnLabel}>
                                    바로가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.item1, {backgroundColor: '#c4cfce'}]}>
                    <Image 
                        style={[styles.basicImg, {width: '50%', height: '40%', resizeMode: 'stretch', marginTop: 5, marginRight: 5}]}
                        
                        source={require('../../../assets/half-moon.png')}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, {color: "black"}]}>
                            7급공채 기본강의
                        </Text>
                        <Text style={[styles.cardSubTitle, {color: "black"}]}>
                            최고수준 + 무료강의
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    {backgroundColor: "white"}
                                ]}
                            >
                                <Text style={styles.btnLabel}>
                                    바로가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

export default PsatBbs;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    item1: {
    backgroundColor: '#8E97FD',
    flex: 1,
    height: 200,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    },
    item2: {
        backgroundColor: '#FFC97E',
        flex: 1,
        height: 200,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    basicImg: {
        alignSelf: 'flex-end',
        },
        cardContent: {
        position: 'absolute',
        top: '35%',
        padding: 15,
    },
    cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue',
    },
    cardSubTitle: {
    marginTop: 10,
    fontSize: 11,
    },
    cardFooterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: '0%',
    alignItems: 'center',
    },
    footerTitle: {
    fontSize: 11,
    fontFamily: 'HelveticaNeue',
    },
    cardBtn: {
    borderRadius: 50,
    },
    btnLabel: {
        fontFamily: 'HelveticaNeue',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        // color: colors.heading,
    },
    header: {},
    heading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 20,
        fontWeight: '300',
        marginTop: 5,
    },
    dailyThoughtsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        height: 95,
        borderRadius: 10,
        marginTop: 10,
      },
      bgShape1: {
        position: 'absolute',
        width: '100%',
        height: 95,
        left: 0,
        top: 0,
      },
      bgShape2: {
        position: 'absolute',
        width: '100%',
        right: 0,
        top: 0,
      },
      bgShape3: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
      },
      dailyTitle: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        color: "black",
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dailySubTitle: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
      },
});