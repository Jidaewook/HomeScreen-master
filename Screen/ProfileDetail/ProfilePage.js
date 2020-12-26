import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, AsyncStorage,Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';
import {ListItem} from '../../component/common/ListItem';
import axios from 'axios';


const ProfilePage = () => {
    // const state = {
    //     image: null
    // };
    
    // const getPermissionAsync = async () => {
    //     if (Constants.platform.ios) {
    //         const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (status !== 'granted') {
    //             // alert('Sorry');
    //         }
    //     }
    // };

    const [userData, setUserData] = useState({});
    

    const getUserData = async () => {

        const token = await AsyncStorage.getItem('token')

        const headers = {
            'Authorization' : 'Bearer ' + token
        }


        try {
            console.log("rrrrrrr")
            axios
                .get('https://hidden-earth-75958.herokuapp.com/users/me', {headers: headers})
                
                .then(data => {
                    setUserData(data.data)
                    // console.log("DDDDDDDD", data.data.email)
                })
                
                .catch(err => {
                    console.log("ERREREERERERERERER", err)
                })
        } catch(e) {
            alert(e)
        } finally {

        }
    }

    useEffect(() => {
        getUserData();
    }, {})

    const pickImage = async () => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if(!result.cancelled) {
            }
        } catch (E) {
        }
    };

    const navigation = useNavigation();
    
    // useEffect(() => {
    //     getPermissionAsync();
    //     getUserData();
    //     // console.log("TOKEN", headers)
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListItem
                    title={userData.username}
                    subtitle="환영합니다."
                    image={require("../../assets/adaptive-icon.png")}
                />
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../../assets/splash.png")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                    <View style={styles.active}></View>
                    
                    <TouchableOpacity 
                        // onPress={() => pickImage}
                    >
                        <View style={styles.add}>
                            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "400", fontSize: 36 }]}>패스미매니저</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Admin</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require("../../assets/icon.png")}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require("../../assets/icon.png")}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require("../../assets/icon.png")}
                                style={styles.image} resizeMode="cover"
                            />
                        </View>
                    </ScrollView>
                    
                    <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                    <View style={{ alignItems: "center", marginTop: 20, width: "80%" }}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following
                                    <Text style={{ fontWeight: "400" }}> Jake Challeahe </Text>
                                    and
                                    <Text style={{ fontWeight: "400" }}> Luis Poteer </Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        alignSelf: "center",
        marginTop: 32,
        marginBottom: 6,
        fontSize: 20,
        fontWeight: '600'
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});