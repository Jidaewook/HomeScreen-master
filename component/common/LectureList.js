import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Feather} from '@expo/vector-icons';

const LectureList = ({image, title, bg, onPress, duration}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                backgroundColor: bg,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: 'center',
                marginTop: 10
            }}
        >
            <Image 
                source={image}
                style={{width: 40, height: 40}}
            />
            <View>
                <Text style={{
                    color: "#345c74",
                    fontFamily: 'Bold',
                    fontSize: 13,
                    paddingHorizontal: 20,
                    width: 170
                }}>
                    {title}
                </Text>
                <Text
                    style={{
                        color: '#f58084', 
                        fontFamily: 'Medium',
                        fontSize: 12,
                        paddingHorizontal: 20
                    }}
                >
                    {duration}
                </Text>
                
            </View>
            <ProgressCircle
                percent={30}
                radius={17}
                borderWidth={1.5}
                color="f58084"
                shadowColor="#fff"
                bgColor="#fff"
            >
                <Feather
                    name="play"
                    size={24}
                    color="pink"
                />
            </ProgressCircle>
        </TouchableOpacity>
    );
};

export default LectureList;