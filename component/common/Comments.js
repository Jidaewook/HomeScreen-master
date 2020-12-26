import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Comments = ({comments, styleOption}) => 
    <Text style={[styles.Container, styleOption]}>
        ✍ {comments}
    </Text>

export default Comments;

const styles = StyleSheet.create({
    Container : {
        color: 'black',
        marginBottom: 7,
        fontWeight: '500',
        fontSize: 20
    }
})