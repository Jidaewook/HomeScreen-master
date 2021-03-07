import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { apiImage } from '../../api';

const PsatCard = ({title, desc, src, image}) => {
    return (
        <ImageBackground
        //    source={{uri: apiImage(src)}}
            source={image}
            style={{
            height:130,
            width:240,
            borderRadius:10,
            // opacity:0.3,
            backgroundColor:"gray",
            elevation:2,
            // padding:10,
            marginVertical:5,
            marginRight:1,
            marginLeft:20,

                
            }}
        >
        <View style={{backgroundColor: 'black', opacity: 0.5, height: '100%', width: '100%'}}>
            <Text style={{
                fontWeight:"700",
                color:"white",
                fontSize:14,
                padding: 0
            }}>
                {title}
                
            </Text>
            <Text style={{
                fontWeight:"bold",
                color:"white",
                fontSize: 12,
                padding: 10,
                
            }}>
                {desc.slice(0,100)}
                {/* {title} */}
            </Text>
            
        </View>
        <View style={{height: 100}}>
            <Text>
            {desc}

            </Text>
        </View>
               
        </ImageBackground>
    );
};

export default PsatCard;