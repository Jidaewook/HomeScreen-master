import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const TextBasic = ({Text}) => {
    return (
        <View>
            <Text>
                {Text}
            </Text>
        </View>
    );
};

export default TextBasic;