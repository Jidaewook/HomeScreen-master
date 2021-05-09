import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import themes from '../../config/themes';

const BadgePill = ({title, containerStyle, textStyle}) => {
    return (
        <View
            style={[styles.badge, containerStyle]}
        >
            <Text
                style={[{fontSize: 12, letterSpacing: -0.78, color: 'red'}, textStyle]}
            >
                {title}
            </Text>
        </View>
    );
};

export default BadgePill;

const styles = StyleSheet.create({
    badge: {
        backgroundColor: themes.colors.main,
        borderColor: themes.colors.lightgray,
        color: themes.colors.darkgray,
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});