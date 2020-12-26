import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Likes = ({likes}) => 
    <View
        style={{alignItems: 'flex-end'}}
    >
        <Text style={styles.LikesText}>👨‍🦰{likes}</Text>
    </View>;

Likes.propTypes = {
    likes: PropTypes.string.isRequired
};

export default Likes;

const styles = StyleSheet.create({
    LikesText: {
        fontWeight: '300',
        fontSize: 15        
    }
})