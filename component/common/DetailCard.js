import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const DetailCard = (title, src, desc) => {
    return (
    <>
        <View
            style={styles.SlideFrame}
        >
            <View>
                <Image 
                    source={require('../../assets/adaptive-icon.png')}
                    style={styles.SlideImage}
                />
                
            </View>
            
        </View>
    </>    
    );
};

export default DetailCard;

const styles = StyleSheet.create({
    SlideFrame: {
        flexDirection:"row",
        height:120,
        width:150,
        backgroundColor:"#fff",
        elevation:2,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,
        marginTop: 20,
        borderRadius:10  
    },
    SlideImage: {
        height:100,
        width:130,
        borderRadius:10
    }
})