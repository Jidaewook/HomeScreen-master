import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

import themes from '../../config/themes';
import BadgePill from './BadgePill';
import HLine from './HLine';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

const PostList = ({datas}) => {

    const navigation = useNavigation();

    const goToPostDetail = (id) => {
        navigation.navigate("PostDetail", {id})
    };

    const momentDate = (date) => {
        moment(date).format('L')
    };

    return (
        <View
            style={{backgroundColor: themes.bgColor.tablecolor}}
        >
            {datas.map(data => (
                <TouchableOpacity
                    onPress={() => goToPostDetail(data._id)}
                >
                    <View
                        style={styles.postList}
                    >
                        <View
                            style={{flexDirection: 'row'}}
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
                        <Moment from={Date.now()} element={Text} style={{color: themes.colors.gray, fontSize: 12}}>
                            {data.createdAt}
                        </Moment>
                            
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.titleStyle, {width: '65%'}]}>
                            {data.Title}
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
                    <HLine color={{backgroundColor: themes.colors.brightGray}} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default PostList;

const styles = StyleSheet.create({

    postList: {
        flexDirection: 'row', 
        alignItems: 'center', 
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
        letterSpacing: -.72,
        fontWeight: '500',
        color: themes.fontsColor.table,
        paddingVertical: 10,
        marginHorizontal: 15
    },
    postProperty: {
        marginLeft: 5, 
        color: themes.colors.gray
    }

})
