import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {FontAwesome, Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import axios from 'axios';

const ForgotpasswordScreen = ({navigation}) => {
    const [data, setData] = useState({
        check_textInputChange: false
    })
    
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const forgotSubmit = async () => {
        const forgotData = {
            email: email
        }
        console.log("forgotData: ", forgotData);
        setLoading(true);

        try {
            // console.log("Starttttt", forgotData)
            axios
                .post("https://hidden-earth-75958.herokuapp.com/auth/forgot-password", forgotData)
                .then(data => {
                    console.log("data", data.status)
                    // Alert.alert(
                    //     "다음의 이메일로 인증정보가 전달되었습니다.",
                    //     forgotData.email,
                    //     [
                    //         {
                    //             text: "확인"
                    //         }
                    //     ]
                    // )
                })
                .catch(err => {
                    console.log(err)
                    alert(err.response.data.error)
                })
        } catch(e) {
            alert("등록되지 않은 메일입니다.")
            console.log("catch", e);
        } finally {
            console.log("setLoading", setLoading);
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View 
                style={styles.header}
            >
                <Text style={styles.text_header}>Forgot Password</Text>

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
                    : null} 
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={forgotSubmit}
                >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: '#fff'
                            }]}
                        >Reset Password</Text>

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
                        >Sign In</Text>
                        
                    </TouchableOpacity>

            </Animatable.View>

            

        </View>
    )
};

export default ForgotpasswordScreen;

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
        
        flex:3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        marginTop: 15,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 1,
        marginBottom: 20
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        marginBottom: 50
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        marginBottom: 10,
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