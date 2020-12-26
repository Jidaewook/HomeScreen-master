import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Desc = ({desc}) => <Text style={styles.desc}>{desc}</Text>;

Desc.propTypes = {
    desc: PropTypes.string.isRequired
};

export default Desc;

const styles = StyleSheet.create({
    desc: {
        color: 'black',
        fontWeight: "400",
        fontSize: 13,
        width: '100%',
        textAlign: 'justify',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        backgroundColor: 'white'
    }
})