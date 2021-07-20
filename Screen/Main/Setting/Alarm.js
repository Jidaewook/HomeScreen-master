import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ToggleSwitch from '../../ProfileDetail/ToggleSwitch';
import HLine from '../../../component/common/HLine';

const Alarm = () => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <Text style={styles.TitleContainer}>
                    공지 수신
                </Text>
                <ToggleSwitch />
            </View>
            <HLine />
            <View style={styles.Container}>
                <Text style={styles.TitleContainer}>
                    NCS 알람
                </Text>
                <ToggleSwitch />
            </View>
            <HLine />
            <View style={styles.Container}>
                <Text style={styles.TitleContainer}>
                    PSAT 알람
                </Text>
                <ToggleSwitch />
            </View>
            <HLine />
        </ScrollView>
    );
};

export default Alarm;

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    TitleContainer: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold'
    }
})