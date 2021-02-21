import React from 'react';
import {View, Text} from 'react-native';
import themes from '../../config/themes'

const HLine = ({color}) => {
    return (
        <View
            style={[{
                width: '98%',
                margin: 5,
                height: 1,
                backgroundColor: themes.colors.line
                
            }, color]}
        />
    );
};

export default HLine;