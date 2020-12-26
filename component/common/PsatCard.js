import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { apiImage } from '../../api';

const PsatCard = ({title, desc, src}) => {
    return (
        <ImageBackground
           source={{uri: apiImage(src)}}
           style={{
           height:130,
           width:240,
           borderRadius:10,
           opacity:0.7,
           backgroundColor:"gray",
           elevation:2,
           padding:6,
           marginVertical:5,
           marginRight:1,
           marginLeft:20,

            
           }}
        >
               <Text style={{
                   fontWeight:"700",
                   color:"black",
                   fontSize:15
               }}>
                   {title}
               </Text>
               <Text style={{
                   fontWeight:"bold",
                   color:"black",
                   fontSize: 12,
                   marginTop: 10
               }}>
                   {desc}
               </Text>
           </ImageBackground>
    );
};

export default PsatCard;