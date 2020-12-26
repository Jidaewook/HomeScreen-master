import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Count = ({count}) => <Text style={styles.CountMain}>조회수 : {count}</Text>;

Count.propTypes = {
    count: PropTypes.string.isRequired
};

export default Count;

const styles = StyleSheet.create({
    CountMain: {
        fontWeight: '300',
        fontSize: 15,
        
    }
})