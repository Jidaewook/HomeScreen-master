import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
            PostPage
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

export default PostPage;