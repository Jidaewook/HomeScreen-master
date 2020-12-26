import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const ContentTitle = ({title, desc, addsize}) => {

    const navigation = useNavigation();

    return (
    <>  
    <View
        style={styles.ViewContainer}
    >
        <View
            style={styles.ViewBox}
        >
            <Text style={styles.TitleFont} >
                {title}
            </Text>            
        </View>
        <TouchableOpacity
                style={{alignItems: 'flex-end', paddingRight: 15, width: '20%', justifyContent: 'center'}}
                onPress={() => navigation.navigate("Detail")}
            >
                <Text>
                    더보기
                </Text>
            </TouchableOpacity>
    </View>
</>
    );
};

export default ContentTitle;

const styles = StyleSheet.create({
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        alignItems: 'center',
        // backgroundColor: themes.colors.basic
    }, 
    ViewSetting: {
        width: '50%',
        alignItems: 'flex-end'
    }, 
    ViewBox: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1, 
        // justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    TitleFont: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 24
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
    
});