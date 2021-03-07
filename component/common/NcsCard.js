import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {apiImage} from '../../api';
import {useNavigation} from '@react-navigation/native';
import { ListItem } from 'react-native-elements';


const NcsCard = ({onPress, src, image, title}) => {

    // const navigation = useNavigation();

    // const goToDetail = () => 
    // navigation.navigate("Detail");

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                // flexDirection:"row",
                height:150,
                width:200,
                backgroundColor:"#fff",
                elevation:2,
                padding:6,
                marginVertical:5,
                marginRight:5,
                marginLeft:15,
                borderRadius:10
            }}> 
        <View>
            <Image
                source={image}
            //  source={{uri: apiImage(src)}}
            // source={{uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.spotvnews.co.kr%2F%3Fmod%3Dnews%26act%3DarticleView%26idxno%3D318254&psig=AOvVaw29ovpU7G_2rZ0EKbmgHQrM&ust=1607309642855000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCNxJStuO0CFQAAAAAdAAAAABAJ'}}
                style={{
                    height:100,
                    width:200,
                    borderRadius:5,
                    // backgroundColor: 'gray'
                }}
            />
        </View>

        <View style={{
            width:"65%",
            justifyContent:"flex-end",
            paddingHorizontal:10,
            height: 30
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