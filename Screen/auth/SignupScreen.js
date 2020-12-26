import React, {useState, useEffect} from 'react';

import {View, Text,TouchableOpacity, Dimaensions, StyleSheet, StatusBar, TextInput, ActivityIndicator, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Feather, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

const SignupScreen = ({navigation}) => {

    const [data, setData] = useState({
        check_textInputChange : false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpw, setConfirmpw] = useState('')
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)



    // 이 함수 세트는 텍스트 인풋에 값이 들어가도록 하는 함수

    const textInputChange = (val) => {
  
    }

    const handlePasswordChange = (val) => {
        setPassword({
            password: val
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setConfirmpw({
            confirmpw: val
        })
    }

    const updateSecureTextEntry = () => {
        // setPassword({
        //     secureTextEntry: !data.secureTextEntry
        // })
    }

    const updateConfirmSecureTextEntry = () => {
        setConfirmpw
    }

    const signUpSubmit = async () => {
        const newData = {
            username: username,
            email: email,
            password: password

        }
        setLoading(true);
        // alert('Email');
        console.log("@@@@@@@")

        try {
            axios
            .post("https://hidden-earth-75958.herokuapp.com/auth/local/register", newData)
            .then(data => {
                // Alert.alert(email)
                console.log("msg::::::::::::::::::::::", data);
                if(data.status===200){
                    console.log("ALERTALERT")
                    Alert.alert(
                        '호갱님 감사합니다',
                        username,
                        [  
                            { text: '로그인', onPress: () => navigation.navigate("SigninScreen")}
                        ],
                        { cancelable: false }
                      );   
                }
            })
            .catch(err => {
                Alert.alert(err.response.data.error);
            })
        } catch(e) {
            Alert.alert("The Email is taken")
            
        } finally {
            setLoading(false)
        }
    }

    return (
    
        loading ? <View><ActivityIndicator size='large' color='green' /> </View> : (
            <View style={styles.container}>
                        <StatusBar backgroundColor='#009387' barStyle="light-content" />
                        <View style={styles.header}>
                            <Text style={styles.text_header}>Register Now!</Text>
                        </View>
                        
                        <Animatable.View
                            animation="fadeInUpBig"
                            style={styles.footer}
                        >


                        <Text style={styles.text_footer}>UserName</Text>

                            <View style={styles.action}>
                                <FontAwesome 
                                    name="user"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your username"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    value={username}
                                    
                                    onChangeText={text => (
                                        setUsername(text)
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
                            
                            <Text style={[styles.text_footer, {
                                marginTop: 35
                            }]}>E-mail</Text>

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
                                
                            </View>
                            
                            <Text style={[styles.text_footer, {
                                marginTop: 35
                            }]}>Password</Text>

                            <View style={styles.action}>
                                <FontAwesome 
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your Password"
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"
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
                                        :
                                        <Feather 
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />

                                    } 

                                </TouchableOpacity>
                            </View>
                            
                            <Text style={[styles.text_footer, {
                            }]}>Conrifm Password</Text>

                            <View style={styles.action}>
                                <FontAwesome 
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your Confirm Password"
                                    // secureTextEntry={data.confirm_secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    value={confirmpw}
                                    onChangeText={text => (
                                        setConfirmpw(text)
                                    )}
                                    // onChangeText={(val) => handleConfirmPasswordChange(val)}
                                />
                                <TouchableOpacity
                                    onPress={updateConfirmSecureTextEntry}
                                >
                                 
                                </TouchableOpacity>
                            </View>


                            <View style={styles.textPrivate}>
                                <Text style={styles.color_textPrivate}>
                                    By signing up you agree to our
                                </Text>
                                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                                <Text style={styles.color_textPrivate}>{" "}and</Text>
                                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                            </View>

                            <TouchableOpacity 
                                onPress={signUpSubmit}
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
                                    >Signup</Text>

                                </LinearGradient>
                            </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('SigninScreen')}
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
                                    >Signin</Text>
                                    
                                </TouchableOpacity>

                        </Animatable.View>
                    </View>
        )

        

    );
};

export default SignupScreen;

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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });