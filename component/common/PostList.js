import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

import themes from '../../config/themes';
import BadgePill from './BadgePill';
import HLine from './HLine';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { COLORS } from '../../consts';

const PostList = ({datas}) => {

    const navigation = useNavigation();

    const goToPostDetail = (id) => {
        navigation.navigate("PostDetail", {id})
    };

    const momentDate = (date) => {
        moment(date).format('L')
    };

    const {width, height} = Dimensions.get('window');

    return (
        <View
            style={{backgroundColor: themes.bgColor.tablecolor}}
        >
            {datas.map(data => (
                <TouchableOpacity
                    onPress={() => goToPostDetail(data._id)}
                    style={{height: height/14, marginTop: 10, marginBottom: 5}}
                >
                    <View style={{flexDirection: 'row', height: height/10, marginTop: 0}}>
                        <View>
                            <Image 
                                source={require('../../assets/icons/car.png')}
                                style={{width: width/10, height: height/17, borderRadius: 1, opacity: 0.7}}
                            />
                        </View>

                        <View
                            style={[styles.postList, {width: width*0.95, height: height/10, marginTop: -10}]}
                        >
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View
                                    style={{flexDirection: 'row', justifyContent: 'flex-start'}}
                                >
                                    {data.tag.map(t => (
                                        <View style={{paddingLeft: 10}}>
                                            <BadgePill 
                                                title={"#"+t}
                                                textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1 }]}
                                            />
                                        </View>    
                                    ))}
                                </View>
                                <View style={{paddingRight: 40}}>
                                    <Moment from={Date.now()} element={Text} style={{color: themes.colors.gray, fontSize: 12}}>
                                        {data.createdAt}
                                    </Moment>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.titleStyle]}>
                                    {data.title}
                                </Text>
                                <View style={{width: '35%', flexDirection: 'row', marginTop: 15}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <AntDesign name="like2" size={16} color={themes.colors.gray} />
                                        <Text style={styles.postProperty}>
                                            50
                                        </Text>
                                    </View>
                                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="message-reply-text" size={16} color={themes.colors.gray} />
                                        <Text style={styles.postProperty}>
                                            10
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <HLine color={{backgroundColor: themes.colors.brightGray}} /> */}
                    <View
                        style={[{
                            width: '98%',
                            marginTop: -20,
                            height: 1,
                            backgroundColor: COLORS.gray5

                        }]}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default PostList;

const styles = StyleSheet.create({

    postList: {
        justifyContent: 'space-between', 
        paddingVertical: 10, 
        paddingRight: 10
    },
    badgePill: {
        fontSize: 10, 
        letterSpacing: -0.6, 
        color: themes.colors.darkgray, 
        opacity: .5
    },
    badgeDate: {
        fontSize: 10, 
        letterSpacing: -0.6, 
        color: 'black', 
        opacity: .5,
        paddingRight: 10
    },
    titleStyle: {
        fontSize: 16,
        // letterSpacing: -.72,
        fontWeight: '500',
        color: themes.fontsColor.table,
        paddingVertical: 10,
        marginHorizontal: 15,
        width: '57%'
    },
    postProperty: {
        marginLeft: 5, 
        color: themes.colors.gray
    }

})
