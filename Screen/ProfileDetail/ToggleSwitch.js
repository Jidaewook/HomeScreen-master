import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.containter}>
            <Switch 
                trackColor={{ false: '#767577', tre: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
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
        alignItems: 'center'
    }
})