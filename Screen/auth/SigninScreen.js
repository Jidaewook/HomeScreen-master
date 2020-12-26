import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet, StatusBar, TextInput, Alert, AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {FontAwesome, Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

import {SocialIcon} from 'react-native-elements';
import Home from '../../Screen/Home';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from '../../navigation/Stack';
import {userApi} from '../../api';

const SigninScreen = ({navigation}) => {
    const [data, setData] = useState({
        check_textInputChange: false,
        secureTextEntry: true
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isAuth, setIsAuth] = useState(false)



    const textInputChange = (val) => {

    }

    const handlePasswordChange = (val) => {

    }

    const updateSecureTextEntry = (val) => {

    }

    const signInSubmit = async () => {
        const loginData = {
            identifier: email,
            password: password
        }
        setLoading(true);

        try {
            axios.post("https://hidden-earth-75958.herokuapp.com/auth/local/", loginData)
                .then(data => {
                    // console.log("logDATATATAT", data.data.jwt)
                    if(data.status === 200){
                        AsyncStorage.setItem('token', data.data.jwt)
                        setIsAuth(true)
                        Alert.alert(
                            "로그인 되었습니다.",
                            data.data.user.username + "님",
                        [
                            {
                                text: "확인",
                                onPress: () => {isAuth ? (
                                    navigation.navigate("MainStack")
                                ) : (
                                    null
                                ) }
                            },
                            {
                                text: "취소"
                            }
                        ])
                    } else if (data.status === 404){
                        Alert.alert("일치하는 아이디 또는 비밀번호가 없습니다.")
                    }
                })
                .catch(err => console.log("11111111111111111", err))
        } catch(e){
            Alert.alert("You have wrong Account")
        } finally {
            setLoading(false)
            // await AsyncStorage.getItem('token')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Login</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
            <Text style={styles.text_footer}>
                E-mail
            </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="envelope"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your E-mail"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => (
                            setEmail(text)
                        )}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View 
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />

                        </Animatable.View>
                    : null }
                </View>


                <Text style={[styles.text_footer, {marginTop: 35}]}>
                    Password
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        style={styles.textInput}
                        value={password}
                        onChangeText={text => (
                            setPassword(text)
                        )}                  
                    />

                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        : <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        /> 
                        }
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    onPress={signInSubmit}
                    style={styles.button}
                >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: '#fff'
                            }]}
                        >Signin</Text>

                    </LinearGradient>

                    
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => navigation.navigate('SignupScreen')}
                        style={[styles.signIn, {
                            borderColor: '#08d4c4', 
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: '#009387'
                            }]}
                        >Signup</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotpasswordScreen')}
                        style={{marginTop: 15, marginLeft: 250}}
                    >
                        <Text style={{fontWeight: 'bold', color: 'grey'}}>Forgot Password</Text>
                        
                    </TouchableOpacity>


                <View style={styles.socialIcons}>
                    <SocialIcon 
                        type="facebook"
                        onPress={() => {
                            alert('Facebook')
                        }}
                    />
                    <SocialIcon 
                        type="google"
                        onPress={() => {
                            alert('Google')
                        }}
                    />

                    
                </View>

            </Animatable.View>
 
        </View>
    );
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20

    }
  });