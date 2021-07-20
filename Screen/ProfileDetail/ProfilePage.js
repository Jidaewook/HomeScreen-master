import React, {useLayoutEffect} from 'react';
import {View, Button, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import themes from '../../config/themes';
import {useNavigation} from '@react-navigation/native';

const viewItems = [
    {
        title: '제목1',
        image: require('../../images/13.png')
    },
    {
        title: '제목2',
        image: require('../../images/15.png')
    },
    {
        title: '제목3',
        image: require('../../images/14.png')
    },
    
]

const ProfilePage = () => {
    
    const navigation = useNavigation();

    const goToEdit = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.profile}>
            <View style={{display: 'flex'}}  >
                <ImageBackground 
                    source={require('../../assets/profile/profile_Back.jpeg')}
                    style={styles.profileContainer}
                    imageStyle={styles.profileBackground}
                >
                    <View style={styles.editGear}>
                        <AntDesign name="edit" size={24} color={themes.colors.brightGray} onPress={()=> goToEdit("ProfileEdit")}  />
                        <AntDesign name="setting" size={24} color={themes.colors.brightGray} onPress={()=> goToEdit("Setting")} />
                    </View>
                    
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{width: '100%', marginTop: '20%'}}
                    >
                        <View style={styles.profileCard}>
                            <View style={styles.avatarContainer}>
                                <Image 
                                    source={require('../../images/profile_sample.jpeg')}
                                    style={styles.avatar}
                                />
                            </View>
                            <View style={styles.info}>
                                <View style={{marginTop: 20, paddingBottom: 24, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.activeInfo}>
                                            LH
                                        </Text>
                                        <Text style={{fontSize: 12, color: themes.colors.lightgray}}>
                                            희망 기관
                                        </Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.activeInfo}>
                                            137
                                        </Text>
                                        <Text style={{fontSize: 12, color: themes.colors.lightgray}}>
                                            좋아요
                                        </Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.activeInfo}>
                                            37
                                        </Text>
                                        <Text style={{fontSize: 12, color: themes.colors.lightgray}}>
                                            즐겨찾기
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{display: 'flex'}}>
                                <View style={styles.nameInfo}>
                                    <Text style={{fontSize: 28, color: themes.colors.darkgray, fontWeight: '800'}}>  
                                        지대욱, 35
                                    </Text>
                                    <Text style={{fontSize: 16, color: themes.colors.lightgray, marginTop: 15, fontWeight: '800'}}>  
                                        경기도 부천, 대한민국
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginTop: 20, marginBottom: 15}}>
                                <View style={styles.divider} />
                                <View style={{paddingTop: 15, }}>
                                    <Text style={{fontSize: 14, color: themes.colors.gray, textAlign: 'flex-start'}}>
                                        2022년 상반기 토지주택공사에 합격하고 싶네요.
                                        자신 있는 과목은 의사소통이고,
                                        자신 없는 과목은 문제해결능력입니다. 
                                        제가 토지주택공사에 입사하고 싶은 이유는, 횡령이 쉽기 때문입니다.
                                    </Text>
                                </View>
                                <View style={[styles.divider, {marginTop: 20}]} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 14, color: themes.colors.gray, marginTop: 15,}}>
                                        최근에 본 영상
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{color: themes.colors.gray, fontSize: 12, marginTop: 20, marginRight: 5}}>
                                            전체보기
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView horizontal={true} style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                                    {viewItems.map(item => (
                                        <>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("Detail")} 
                                            >
                                                <Image 
                                                    style={{width: 100, height: 100, borderRadius: 10, marginRight: 10, marginTop: 10}}
                                                    source={item.image}
                                                >
                                                </Image>    
                                            </TouchableOpacity>
                                        </>
                                    ))} 
                                </ScrollView>
                                <View style={[styles.divider, {marginTop: 20}]} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 14, color: themes.colors.gray, marginTop: 15,}}>
                                        좋아요 한 영상
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{color: themes.colors.gray, fontSize: 12, marginTop: 20, marginRight: 5}}>
                                            전체보기
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView horizontal={true} style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                                    {viewItems.map(item => (
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("Detail")} 
                                        >
                                            <Image 
                                                style={{width: 100, height: 100, borderRadius: 10, marginRight: 10, marginTop: 10}}
                                                source={item.image}
                                            >
                                            </Image>   
                                        </TouchableOpacity>
                                    ))} 
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>

            </View>        
               
        </View>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        marginTop: 0,
        
    },
    editGear: {
        paddingTop: 50,
        marginBottom: -80,
        marginLeft: 20,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'  
    },
    profileContainer: {
        width: '100%',
        height: '100%',
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width: '100%',
        height: '50%',

    },
    profileCard: {
        display: 'flex',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: 'white',
        shadowColor: themes.colors.black,        
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80,
        alignItems: 'center'

    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0,
        alignItems: 'center'

    },
    info: {
        paddingHorizontal: 40,

    },
    nameInfo: {
        alignItems: 'center',
        marginTop: 15,

    },
    activeInfo: {
        fontSize: 18, 
        color: themes.colors.gray, 
        fontWeight: 'bold', 
        marginTop: 4, 
        marginBottom: 10
    },
    divider: {
        width: '100%',
        borderWidth: 1,
        borderColor: themes.colors.brightGray
    }

});


