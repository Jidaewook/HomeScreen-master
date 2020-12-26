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
        fontWeight: "200",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        height: 100

    }
})