import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import themes from '../../config/themes';

const LectureList = ({image, title, bg, onPress, duration}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                backgroundColor: bg,
                padding: 15,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: 'center',
                marginTop: 5
            }}
        >
            <Image 
                source={image}
                style={{width: 40, height: 40, borderRadius: 20}}
            />
            <View>
                <Text style={{
                    color: themes.fontsColor.contentTitle,
                    fontWeight: 'bold',
                    fontSize: 12,
                    paddingHorizontal: 20,
                    width: 170
                }}>
                    {title}
                </Text>
                <Text
                    style={{
                        color: themes.fontsColor.contentDuration, 
                        fontWeight: 'bold',
                        fontSize: 12,
                        paddingHorizontal: 20
                    }}
                >
                    {duration}
                </Text>
                
            </View>
            <AntDesign name="playcircleo" size={24} color="pink" />
        </TouchableOpacity>
    );
};

export default LectureList;