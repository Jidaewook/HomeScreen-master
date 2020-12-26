import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { apiImage } from '../../api';
import Likes from './Likes';


const NoticeCard = ({onPress, src, name, desc}) => {
    return (
        <TouchableOpacity 
             onPress={onPress}
             style={{
                 marginTop:10,
                 backgroundColor:"#FFF",
                 height:230,
                 width:200,
                 elevation:2,
                 borderRadius:20,
                 padding:15,
                 marginRight:5,
                 marginLeft:2,
                 marginBottom:5            
             }}
            >
                <Image
                source={{uri: apiImage(src)}}
                style={{
                    width:175,
                    height:115,
                    borderRadius:20
                }}
                />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginVertical:10
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"#4f4a4a",
                        fontSize:12
                    }}>
                        {name}
                 </Text>
                 <View style={{
                     height:4,
                     width:4,
                     borderRadius:4,
                     backgroundColor:"red",
                     marginHorizontal:4
                 }}>

                 </View>
                 <Text style={{
                     color:"red",
                     fontSize:9,
                     fontWeight:"bold"
                 }}>
                     New
                 </Text>
               
                </View>
                <Text style={{
                     fontSize:9,
                     color:"#4f4a4a",
                     fontWeight:"400"
                 }}>
                     {desc}
                 </Text>


                 <View style={{
                     flexDirection:"row",
                     marginTop:5,
                     alignItems:"center",
                     width:"100%"
                 }}>
                     <View style={{
                         width:"95%", alignItems: 'flex-end'
                     }}>
                         <Likes 
                            likes={"25"}
                            
                        />
                     </View>
                     
                 </View>
                
            </TouchableOpacity>
    );
};

export default NoticeCard;