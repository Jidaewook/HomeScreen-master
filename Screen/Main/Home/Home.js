import React, { useEffect, useState } from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import themes from '../../../config/themes';
import Section from '../../../component/common/Section';
import Card from '../../../component/common/Card';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import { BASE_URL } from '../../../constants';
import { COLORS } from '../../../consts';

const {width} = Dimensions.get("screen");


const Home = () => {

  const navigation = useNavigation();

  const [ncs, setNcs] = useState([]);
  const [psat, setPsat] = useState([]);

  const getNcs = async() => {
    try {
      const {data} = await Axios.get(`${BASE_URL}/ncs`)
      setNcs(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const getPsat = async() => {
    try {
      const {data} = await Axios.get(`${BASE_URL}/psat`)
      setPsat(data.results)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNcs()
    getPsat()
  }, []);


  return (
    <View 
      style={{flex: 1, backgroundColor: themes.colors.main}}
    >
      
        <StatusBar 
          backgroundColor='black'
          barStyle={'light-content'}
        />
      
      <View style={styles.header}>
        <MaterialIcons name="sort" size={28} color={themes.colors.main} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")} 
        >
          <MaterialIcons 
            name="notifications-none" 
            size={28} 
            color={themes.colors.main} 
          />
        </TouchableOpacity>


      </View>
        <View
          style={{
            backgroundColor: themes.colors.basic,
            height: 120,
            paddingHorizontal: 20
          }}
        >
          <View style={{flex: 1}}>
            <Text style={styles.headerTitle}>PassMe</Text>
            <Text style={styles.headerTitle}>Explore Wisdom</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="search" size={28}/>
                <TextInput 
                  placeholder="Search lecture"
                  style={{color: 'gray'}}
                />
            </View>
          </View>
        </View>
        <View style={{height: 30}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.group}>                   
          <View style={{display:'flex'}}>
            <Section title={'주목! NCS'}>
              {ncs.map(i => (
                  <Card 
                    item={i}
                    style={{marginRight: themes.sizes.base, width: 150}}
                    goTo={() => navigation.navigate("Detail", {id: i._id, isNcs: true})}
                  />
              ))}
            </Section>            
          </View>
          <View style={{display:'flex', flexDirection: 'row'}}>
            <Section title={'주목! PSAT'}>
              {psat.map(i => (
                  <Card 
                      item={i}
                      full
                      style={{marginRight: themes.sizes.base, width: 250}}
                      goTo={() => navigation.navigate("Detail", {id: i._id, isNcs: false})}
                  />
              ))}
            </Section>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingTop: 50,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: themes.colors.basic,
    },
    headerTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
    },
    inputContainer: {
      height: 60,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 10,
      position: 'absolute',
      top: 90,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      elevation: 12,
      shadowOpacity: 0.3,
      shadowRadius: 15,
    },
    categoryContainer: {
      marginTop: 60,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      height: 60,
      width: 60,
      // backgroundColor: COLORS.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    sectionTitle: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontWeight: 'bold',
      fontSize: 20,
    },
    cardImage: {
      height: 220,
      width: width / 2,
      marginRight: 20,
      padding: 10,
      overflow: 'hidden',
      borderRadius: 10,
    },
    rmCardImage: {
      width: width - 40,
      height: 200,
      marginRight: 20,
      borderRadius: 10,
      overflow: 'hidden',
      padding: 10,
    },
    group: {
      paddingTop: themes.sizes.base,
      paddingHorizontal: 20
    },
})