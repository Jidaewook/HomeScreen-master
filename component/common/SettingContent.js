import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';


const SettingContent = ({title, desc}) => {

    const navigation = useNavigation();

    // const goToDetail = () => 
    // navigation.navigate("detail");

    return (
        <>  
            <View
                style={styles.ViewContainer}
            >
                <View
                    style={styles.ViewBox}
                >
                    <TouchableOpacity
                        style={{alignItems: 'flex-start', paddingRight: 15, width: '100%', flexDirection: 'row'}}
                        onPress={() => navigation.navigate("Detail")}
                    >
                        <View
                            style={{width: '50%'}}
                        >
                            <Text style={styles.TitleFont} >
                                {title}
                            </Text>
                        </View>
                        <View
                            style={{width: '50%', alignItems: 'flex-end', paddingRight: 20}}
                        >
                            <Text>
                                {desc}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </> 
    );
};

export default SettingContent;

const styles = StyleSheet.create({
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginLeft: 20,
        alignItems: 'center',
        // backgroundColor: themes.colors.basic
    }, 
    TitleFont: {
        fontWeight: '500',
        fontSize: 20
    },
    ContentTitleFont: {
        fontWeight: 'bold',
        fontSize: 18,
        // 칼라는 테마에 들어가야 한다.
        color: '#4f4a4a'
    },
    NoticeView: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'black',
        marginLeft: 10,
        // justifyContent: 'center'
    },
    ViewBox : {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    }, 
    
});