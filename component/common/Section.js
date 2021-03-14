import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'galio-framework';
import themes from '../../config/themes';

const Section = ({title, horizontal=true, children}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text size={18} bold color={themes.fontsColor.SubTitle} style={styles.title}>
                    {title}
                </Text>
                <Text size={12} color={themes.fontsColor.SubTitle} style={styles.more}>
                    더보기
                </Text>
            </View>
            
            <ScrollView
                horizontal={horizontal}
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        
        </View>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])

};

export default Section;

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,

    },
    title: {
        paddingLeft: 10,
        marginBottom: 0,
        width: '80%'
    },
    more: {
        paddingLeft: 15,
        marginBottom: 0,
        justifyContent: 'space-between'
    }
})