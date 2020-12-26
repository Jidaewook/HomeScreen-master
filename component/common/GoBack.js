import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';


const GoBack = ({icon, page}) => {

    const navigation = useNavigation();

    return (
    <>  
        <View
            style={styles.ViewContainer}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("Main")}
            >
                <AntDesign
                    name={icon}
                    size={22}
                    style={{
                        width: 24,
                        height: 24,
                        marginRight: 10
                    }}                        
                />
            </TouchableOpacity>
        </View> 
    </>
    );
};

export default GoBack;

const styles = StyleSheet.create({
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});