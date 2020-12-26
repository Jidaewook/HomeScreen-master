import React, {useState, useEffect} from 'react';
import {ActivityIndicator,  AsyncStorage, View, SectionList, StatusBar, ScrollView, Text, Alert, Modal, Button, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import themes from '../config/themes';
import {ListItem, SingleItem, ToggleList} from '../component/common/ListItem';
import Slide from '../component/common/Slide';
import ProfilePage from './ProfileDetail/ProfilePage';
import SettingSection from '../component/common/SettingSection';
import axios from 'axios';

const Common = styled.SafeAreaView`
  background-color: white;
  ${Platform.select({
    android: {
        paddingTop: StatusBar.currentHeight,
    },
})}
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${'lightgray'};
`;

const MenuItem = [
    {
        title: "서비스 정보",
        data: [
            {title: '버전정보', icon: "user", screen: null}
        ]
    },
    {
        title: '개인정보',
        data: [
            {title: '계정정보', icon: 'user', screen: 'Account'},
            {title: '서비스 이용약관', icon: 'mail', screen: 'Agreement'}
        ]
    },
    {
        title: '고객센터/도움말',
        data: [
            {title: '고객센터/도움말', icon: 'mail', screen: 'SendMessage'}
        ]
    }
]

const Setting = ({navigation}) => {

    // const navigation = useNavigation();
    const ProfilePage = () => {
      navigation.navigate("ProfilePage")
    };
    const [modal, setModal] = useState(false);
    const [userData, setUserData] = useState({});

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    const getUserData = async () => {

      const token = await AsyncStorage.getItem('token')
      const headers = {
        'Authorization': 'Bearer ' + token
      }
      console.log("HEADERS", headers)


      try {
        axios 
          .get('https://hidden-earth-75958.herokuapp.com/users/me', {headers: headers})
          .then(data => {
            setUserData(data.data)
          })
          .catch(err => {
            alert(err)
          })

      } catch(e) {
        alert(e)
      } finally {

      }
    } 

    useEffect(() => {
      getUserData();
    }, {}) 

    const logout =  async () => {
      await Alert.alert(
        "로그아웃 하시겠습니까?",
        "Sub",
      [
          {
              text: "확인",
              onPress: () => {
                  AsyncStorage.clear(),
                  navigation.navigate("AuthStack")
                  console.log("JJJJJJJJJ", AsyncStorage.getItem('token'))
              }
          },
          {
              text: "취소"
          }
      ])
    }

    const renderTermService = () => {
    return (
          
        <Modal
            animationType="slide"
            visible={modal}
            onRequestClose={() => setModal(false)}
        >
          <Text 
              style={{fontSize: 24, fontWeight: '600', marginTop: 30, marginLeft: 20}}
          >
            Terms of Service
          </Text>

          <ScrollView style={styles.Scroll}>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={styles.Terms}
            >
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          
          </ScrollView>
                <View>
                    <Button 
                        onPress={() => setModal(false)}
                        title="I understand"
                    />
                </View>
        </Modal>
        );
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: 'white'}}
        >
            <Common>
                <Container>
                    <SectionList 
                        contentContainerStyle={{paddingVertical: 40}}
                        ListHeaderComponent={
                          
                            <ListItem 
                                title={userData.username}
                                subtitle="View Profile"
                                image={require("../images/13.png")}
                                onPress={() => {ProfilePage()}}
                            />
                        }
                        ItemSeparatorComponent={() => <HLine />}
                    />
                    
                    <SettingSection
                      title={"서비스 정보"}
                      
                    >
                      <SingleItem   
                        title={"버전정보"}
                        subTitle={"1.0.0"}
                      />
                    </SettingSection>
                    <HLine />
                    <SettingSection
                      title={"개인 정보"}
                      
                    >
                      <SingleItem   
                        title={"계정정보"}
                        onPress={() => {ProfilePage()}}
                      />
                      <SingleItem   
                        title={"서비스 이용약관"}
                        onPress={() => {setModal(true)}}
                      />
                    </SettingSection>
                    <HLine />

                    <SettingSection
                      title={"알람설정"}
                      
                    >
                      <ToggleList 
                        title={"공지수신"}
                      />
                      <ToggleList 
                        title={"학습알람"}
                      />
                      <ToggleList 
                        title={"푸시알림"}
                      />
                    </SettingSection>
                    <HLine />

                    <SettingSection
                      title={"고객센터/도움말"}
                      
                    >
                      <SingleItem   
                        title={"고객센터/도움말"}
                        icon={"mail"}
                        // 누르면 고객센터페이지
                        onPress={() => alert("MAIL")}
                      />
                      
                    </SettingSection>
                    <HLine />

                    <SettingSection
                      title={"계정설정"}
                      
                    >
                      <SingleItem   
                        title={"로그아웃"}
                        icon={"mail"}
                        // 누르면 고객센터페이지
                        onPress={ logout }
                        
                      />
                      
                    </SettingSection>
                    <HLine />

                    {modal ? (renderTermService()) : (null)}
                </Container>
            </Common>
        </ScrollView>
    );
};

export default Setting;

const styles = StyleSheet.create({
  Terms: {
    marginBottom: 10, 
    marginLeft: 10, 
    marginRight: 10,
    textDecorationStyle: 'solid',
    
  },
  Scroll: {
    marginVertical: 10, 
    backgroundColor: '#1231'
  }
})