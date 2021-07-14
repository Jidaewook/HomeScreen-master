import React, {useLayoutEffect} from 'react';
import {View, Button, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
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
    // {
    //     title: '제목4',
    //     image: '../../images/unnamed.png'
    // },
    // {
    //     title: '제목5',
    //     image: '../../images/1.png'
    // },
    // {
    //     title: '제목6',
    //     image: '../../images/12.png'
    // },
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
                    source={require('../../assets/images/profileBack.png')}
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
                                            5회 접속
                                        </Text>
                                        <Text style={{fontSize: 12, color: themes.colors.lightgray}}>
                                            내 활동
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
                                            2,337
                                        </Text>
                                        <Text style={{fontSize: 12, color: themes.colors.lightgray}}>
                                            강의보기
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{display: 'flex'}}>
                                <View style={styles.nameInfo}>
                                    <Text style={{fontSize: 28, color: themes.colors.darkgray, fontWeight: '800'}}>  
                                        관리자, 35
                                    </Text>
                                    <Text style={{fontSize: 16, color: themes.colors.lightgray, marginTop: 15, fontWeight: '800'}}>  
                                        경기도 부천, 대한민국
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginTop: 20, marginBottom: 15}}>
                                <View style={styles.divider} />
                                <View style={{paddingTop: 15, }}>
                                    <Text style={{fontSize: 14, color: themes.colors.gray, textAlign: 'center'}}>
                                        안녕하세요, 자기소개란입니다. 이곳에 자기소개를 해보세요.
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
        marginBottom: -50,
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





// import React, {useState, useEffect, useLayoutEffect} from 'react';
// import {StyleSheet, Alert, FlatList, AsyncStorage,Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, SectionList} from 'react-native';
// import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';
// import { useNavigation } from '@react-navigation/native';
// import {ListItem} from '../../component/common/ListItem';
// import axios from 'axios';
// import themes from '../../config/themes';
// import ProfileBox_1 from '../../component/common/ProfileBox_1';
// import { lectureApi, noticeApi } from '../../api';

// const ProfilePage = () => {


//     const [userData, setUserData] = useState({});
    

//     const getUserData = async () => {

//         const token = await AsyncStorage.getItem('token')

//         const headers = {
//             'Authorization' : 'Bearer ' + token
//         }


//         try {
//             console.log("rrrrrrr")
//             axios
//                 .get('https://hidden-earth-75958.herokuapp.com/users/me', {headers: headers})
                
//                 .then(data => {
//                     setUserData(data.data)
//                     // console.log("DDDDDDDD", data.data.email)
//                 })
                
//                 .catch(err => {
//                     console.log("ERREREERERERERERER", err)
//                 })
//         } catch(e) {
//             alert(e)
//         } finally {

//         }
//     }

//     useEffect(() => {
//         getUserData();
//     }, {})

//     const pickImage = async () => {
//         try{
//             let result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.All,
//                 allowsEditing: true,
//                 aspect: [4, 3],
//                 quality: 1,
//             });
//             if(!result.cancelled) {
//             }
//         } catch (E) {
//         }
//     };

//     const navigation = useNavigation();
    
//     const [recents, setRecent] = useState([]);

//     const [loading, setLoading] = useState(true);

//     const getData = async () => {
//         const [ncs, ncsError] = lectureApi.ncs();
//         const [psat, psatError] = lectureApi.psat();
//         const [notice, noticeError] = noticeApi.notice();

//         setLectures({
//             ncs,
//             ncsError,
//             psat,
//             psatError
//         });

//         setNotices(notice);

//         setLoading(false);
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     const goToDetail = (id, category) => {
//         navigation.navigate("Detail", {id, category})
//     };

//     useLayoutEffect(() => {
//         navigation.setOptions({
          
//           headerRight: () => (
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Setting")}
//                 style={{marginRight: 10}}>
//                 <AntDesign name="setting" size={24} color="black" />
//             </TouchableOpacity>
//           ),
//         });
//       }, [navigation]);

//     return (
//         <SafeAreaView style={styles.container}>
//             <SectionList
//                 contentContainerStyle={{paddingVertical: 5, backgroundColor: themes.colors.line}}
//                 ListHeaderComponent={
//                     <ListItem 
//                         title="관리자"
//                         subtitle="이메일 주소"
//                         image={require("../../images/profile_sample.jpeg")}
//                         onPress={() => {ProfilePage()}}
//                     />
//                 }
//                 ItemSeparatorComponent={() => <HLine />}
//             />
//             <ProfileBox_1 />
//             {/* <ScrollView showsVerticalScrollIndicator={false}>
//                 <ListItem
//                     title={userData.username}
//                     subtitle="환영합니다."
//                     image={require("../../assets/adaptive-icon.png")}
//                 />
//                 <View style={{ alignSelf: "center" }}>
//                     <View style={styles.profileImage}>
//                         <Image source={require("../../assets/splash.png")} style={styles.image} resizeMode="center"></Image>
//                     </View>
//                     <View style={styles.dm}>
//                         <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
//                     </View>
//                     <View style={styles.active}></View>
                    
//                     <TouchableOpacity 
//                         // onPress={() => pickImage}
//                     >
//                         <View style={styles.add}>
//                             <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.infoContainer}>
//                     <Text style={[styles.text, { fontWeight: "400", fontSize: 36 }]}>패스미매니저</Text>
//                     <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Admin</Text>
//                 </View>

//                 <View style={styles.statsContainer}>
//                     <View style={styles.statsBox}>
//                         <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
//                         <Text style={[styles.text, styles.subText]}>Posts</Text>
//                     </View>
//                     <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
//                         <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
//                         <Text style={[styles.text, styles.subText]}>Followers</Text>
//                     </View>
//                     <View style={styles.statsBox}>
//                         <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
//                         <Text style={[styles.text, styles.subText]}>Following</Text>
//                     </View>
//                 </View>

//                 <View style={{ marginTop: 32 }}>
//                     <ScrollView
//                         horizontal={true}
//                         showsHorizontalScrollIndicator={false}
//                     >
//                         <View style={styles.mediaImageContainer}>
//                             <Image
//                                 source={require("../../assets/icon.png")}
//                                 style={styles.image}
//                                 resizeMode="cover"
//                             />
//                         </View>
//                         <View style={styles.mediaImageContainer}>
//                             <Image
//                                 source={require("../../assets/icon.png")}
//                                 style={styles.image}
//                                 resizeMode="cover"
//                             />
//                         </View>
//                         <View style={styles.mediaImageContainer}>
//                             <Image
//                                 source={require("../../assets/icon.png")}
//                                 style={styles.image} resizeMode="cover"
//                             />
//                         </View>
//                     </ScrollView>
                    
//                     <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
//                     <View style={{ alignItems: "center", marginTop: 20, width: "80%" }}>
//                         <View style={styles.recentItem}>
//                             <View style={styles.activityIndicator}></View>
//                             <View style={{ width: 250 }}>
//                                 <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
//                                     Started following
//                                     <Text style={{ fontWeight: "400" }}> Jake Challeahe </Text>
//                                     and
//                                     <Text style={{ fontWeight: "400" }}> Luis Poteer </Text>
//                                 </Text>
//                             </View>
//                         </View>

//                         <View style={styles.recentItem}>
//                             <View style={styles.activityIndicator}></View>
//                             <View style={{ width: 250 }}>
//                                 <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
//                                     Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
//                                 </Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//             </ScrollView> */}
            
//         </SafeAreaView>
        
//     );
// };

// export default ProfilePage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFF"
//     },
//     text: {
//         fontFamily: "HelveticaNeue",
//         color: "#52575D"
//     },
//     image: {
//         flex: 1,
//         height: undefined,
//         width: undefined
//     },
//     titleBar: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginTop: 24,
//         marginHorizontal: 16
//     },
//     subText: {
//         fontSize: 12,
//         color: "#AEB5BC",
//         textTransform: "uppercase",
//         fontWeight: "500"
//     },
//     profileImage: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         overflow: "hidden"
//     },
//     dm: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         top: 20,
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     active: {
//         backgroundColor: "#34FFB9",
//         position: "absolute",
//         bottom: 28,
//         left: 10,
//         padding: 4,
//         height: 20,
//         width: 20,
//         borderRadius: 10
//     },
//     add: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         bottom: 0,
//         right: 0,
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     infoContainer: {
//         alignSelf: "center",
//         alignItems: "center",
//         marginTop: 16
//     },
//     statsContainer: {
//         flexDirection: "row",
//         alignSelf: "center",
//         marginTop: 32
//     },
//     statsBox: {
//         alignItems: "center",
//         flex: 1
//     },
//     mediaImageContainer: {
//         width: 180,
//         height: 200,
//         borderRadius: 12,
//         overflow: "hidden",
//         marginHorizontal: 10
//     },
//     mediaCount: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         top: "50%",
//         marginTop: -50,
//         marginLeft: 30,
//         width: 100,
//         height: 100,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 12,
//         shadowColor: "rgba(0, 0, 0, 0.38)",
//         shadowOffset: { width: 0, height: 10 },
//         shadowRadius: 20,
//         shadowOpacity: 1
//     },
//     recent: {
//         alignSelf: "center",
//         marginTop: 32,
//         marginBottom: 6,
//         fontSize: 20,
//         fontWeight: '600'
//     },
//     recentItem: {
//         flexDirection: "row",
//         alignItems: "flex-start",
//         marginBottom: 16
//     },
//     activityIndicator: {
//         backgroundColor: "#CABFAB",
//         padding: 4,
//         height: 12,
//         width: 12,
//         borderRadius: 6,
//         marginTop: 3,
//         marginRight: 20
//     }
// });