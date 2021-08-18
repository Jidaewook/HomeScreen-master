import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {COLORS, theme} from '../../consts/index';
import themes from '../../config/themes';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import axios from 'axios';
import {BASE_URL} from '../../constants';

const ContentsList = () => {

    const navigation = useNavigation();

    const [notice, setNotice] = useState([]);
    const [ncs, setNcs] = useState([]);
    const {width, height} = Dimensions.get('window');
        
    const getNotice = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/ncs`)
            setNotice(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    const getNcs = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/ncs`)
            setNcs(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getNotice();
        getNcs();
    }, {})

    const renderNotice = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    getNotice(item._id)
                }}
                style={{marginLeft: 20, marginBottom: 5, backgroundColor: COLORS.gray4, height: 40, flexDirection: 'row', alignItems: 'center'}}
            >
                <Text style={{width: '90%', marginLeft: 5}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderNcs = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    getNcs(item._id)
                }}
                style={{marginLeft: 20, marginBottom: 5, backgroundColor: COLORS.gray4, height: 40, flexDirection: 'row', alignItems: 'center'}}
            >
                <Text style={{width: '90%', marginLeft: 5}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={styles.title}>
                공지사항
            </Text>
            <FlatList
                data={notice}
                keyExtractor={(item) => item.title}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderNotice}
                style={{width: '90%', marginTop: 10, marginBottom: 10, height: height/3}}
            />
            <Text style={styles.title}>
                좋아하는 게시물
            </Text>
            <FlatList
                data={ncs}
                keyExtractor={(item) => item.title}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderNcs}
                style={{width: '90%', marginTop: 10, marginBottom: 10, height: height/3}}
            />
        </View>
    );
};

export default ContentsList;

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: theme.sizes.h2,
        color: COLORS.black,
        fontWeight: 'bold'
    }
})