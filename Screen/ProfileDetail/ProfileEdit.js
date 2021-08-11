import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import themes from '../../config/themes';

const ProfileEdit = () => {

    const [name, setName] = useState('관리자');
    const [institue, setInstitue] = useState('없음');
    const [area, setArea] = useState('대한민국');
    const [introduce, setIntroduce] = useState('2022년 상반기 토지주택공사에 합격하고 싶네요.자신 있는 과목은 의사소통이고,자신 없는 과목은 문제해결능력입니다.제가 토지주택공사에 입사하고 싶은 이유는, 횡령이 쉽기 때문입니다.');
    const [editing, setEditing] = useState(false);

    const toggleEdit = (name) => {
        setEditing(!editing ? name : null );
        
    }



    return (
        <ScrollView
            style={{marginLeft: 15}}
        >
            <View 
                style={{
                    flexDirection: 'row', 
                    width: '100%', 
                    marginTop: 20, 
                    alignItems: 'center'
                }}
            >
                <Text style={styles.ImageContainer}>
                    프로필 사진
                </Text>
                <TouchableOpacity style={{alignItems: 'flex-end'}}>
                    <Image 
                        source={require('../../images/profile_sample.jpeg')}
                        style={styles.avatar}
                    />  
                </TouchableOpacity>
            </View> 
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Text style={styles.TextContainer}>
                        닉네임
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.ContentContainer}>
                    {name}
                </Text>
                <TouchableOpacity style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={styles.EditContainer}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.divider} />
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Text style={styles.TextContainer}>
                        선호 기관
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.ContentContainer}>
                    {institue}
                </Text>
                <TouchableOpacity style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={styles.EditContainer}>
                        Edit
                    </Text>
                </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.divider} />
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Text style={styles.TextContainer}>
                        거주지
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ContentContainer}>
                        {area}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={styles.EditContainer}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>  
            <View style={styles.divider} />
            <View style={styles.divider} />
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <View>
                    <Text style={styles.TextContainer}>
                        자기소개
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 12, marginLeft: 20, color: themes.colors.gray}}>
                        자기소개는 최대 30자까지만 적어주세요
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.introduce}>
                    {introduce}
                </Text>
                <TouchableOpacity style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={styles.EditContainer}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileEdit;

const styles = StyleSheet.create({
    ImageContainer: {
        width: '81%',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: themes.colors.gray,

    },
    TextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: themes.colors.basic,
        fontSize: 14

    },
    EditContainer: {
        justifyContent: 'center',
        marginTop: 15,
        fontSize: 14,
        color: themes.colors.basic
    },

    ContentContainer: {
        width: '85%',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginRight: -10,
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.colors.darkgray
    },
    
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 62,
        borderWidth: 0,
        alignItems: 'flex-end'
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80,
        alignItems: 'center'
    },
    introduce: {
        fontSize: 12,
        borderColor: themes.colors.brightGray,
        width: '80%',
        fontWeight: '400',
        justifyContent: 'center',
        marginTop: 15,
        marginRight: 20
    },
    divider: {
        width: '95%',
        borderWidth: 0.3,
        marginTop: 10,
        borderColor: '#dbdbdb'
    }
})