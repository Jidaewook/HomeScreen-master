import React from 'react';
import {View, Text} from 'react-native';

const HLine = ({color}) => {
    return (
        <View
            style={[{
                width: '100%',
                margin: 5,
                height: 1,
                backgroundColor: '#f4f4f4',
                
            }, color]}
        />
    );
};

export default HLine;