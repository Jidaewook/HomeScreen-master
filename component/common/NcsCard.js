import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {apiImage} from '../../api';
import {useNavigation} from '@react-navigation/native';


const NcsCard = ({onPress, src, title}) => {

    // const navigation = useNavigation();

    // const goToDetail = () => 
    // navigation.navigate("Detail");

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection:"row",
                height:100,
                width:240,
                backgroundColor:"#fff",
                elevation:2,
                padding:6,
                marginVertical:5,
                marginRight:20,
                marginLeft:2,
                borderRadius:10
            }}> 
        <View>
            <Image
            //  source={{uri: apiImage(src)}}
            source={{uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.spotvnews.co.kr%2F%3Fmod%3Dnews%26act%3DarticleView%26idxno%3D318254&psig=AOvVaw29ovpU7G_2rZ0EKbmgHQrM&ust=1607309642855000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCNxJStuO0CFQAAAAAdAAAAABAJ'}}
             style={{
                 height:80,
                 width:60,
                 borderRadius:10
             }}
            />
        </View>

        <View style={{
            width:"65%",
            justifyContent:"flex-end",
            paddingHorizontal:10,
            height:"100%"
        }}>
            <Text style={{
                fontSize:12,
                fontWeight:"600",

            }}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
    );
};

export default NcsCard;