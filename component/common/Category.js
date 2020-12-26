import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Category = ({cate}) => <Text style={styles.cate}>{cate}</Text>;

Category.propTypes = {
    cate: PropTypes.string.isRequired
};

export default Category;

const styles = StyleSheet.create({
    cate: {
        color: 'black',
        fontWeight: "100",
        fontSize: 10,
        marginLeft: 10,
        marginTop: 5,
        width: '100%'
    }
})