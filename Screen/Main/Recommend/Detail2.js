import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Detail2 = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
            Detail2
            </Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>
                    BBBBBBBBAKC
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Detail2;