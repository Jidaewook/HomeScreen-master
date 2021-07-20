import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import themes from '../../config/themes';

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.containter}>
            <Switch 
                trackColor={{ false: 'white', true: themes.colors.view}}
                thumbColor={isEnabled ? themes.colors.brightGray : '#f4f3f4'}
                ios_backgroundColor={themes.colors.gray}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />            
        </View>
    );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20,
        justifyContent: 'center',
        marginTop: 15
    }
})