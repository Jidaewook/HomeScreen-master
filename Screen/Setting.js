import React, {useState, useEffect} from 'react';
import {AsyncStorage, SectionList, StatusBar, View, Alert, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {ListItem, SingleItem, ToggleList} from '../component/common/ListItem';
import SettingSection from '../component/common/SettingSection';
import TermsofService from '../component/common/modal/TermsofService';
import Privacy from '../component/common/modal/Privacy';
import axios from 'axios';
import themes from '../config/themes';

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
    const [privacyModal, setPrivacyModal] = useState(false);
    const [termsModal, setTermsModal] = useState(false);
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

    // useEffect(() => {
    //   getUserData();
    // }, {}) 

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

    return (
      <SectionList
          sections={[
            {
              title: '알람설정',
              data: [
                '공지수신',
                '학습알림',
                '푸시알림'
              ],
            },
            {
              title: '개인정보',
              data: [
                '개인정보정책',
                '서비스이용약관'
              ],
            },
            {
              title: '고객센터',
              data: [
                '서비스문의',
                'FAQ',
                '오류신고'
              ],
            },
            {
              title: '서비스정보',
              data: [
                '버전정보',
                '구독문의'
              ],
            },
            {
              title: '',
              data: [
                '로그아웃'
              ],
            }
          ]}
          renderItem={({item}) => 
            <View style={styles.itemBox}>
              <Text style={styles.item}> 
                {item}
              </Text>
           </View> 
          }
          renderSectionHeader={({section}) => (
            <SettingSection
              title={section.title}
            />
          )}
          keyExtractor={(item, index) => index}
        />

        // <ScrollView
        //     showsVerticalScrollIndicator={false}
        //     style={{backgroundColor: 'white'}}
        // >
          
        //     <Common>
        //         <Container>
        //         <HLine />

        //             <SettingSection
        //               title={"서비스 정보"}
                      
        //             >
        //               <SingleItem   
        //                 title={"버전정보"}
        //                 subTitle={"1.0.0"}
        //               />
        //             </SettingSection>
        //             <HLine />
        //             <SettingSection
        //               title={"개인 정보"}
                      
        //             >
        //               <SingleItem   
        //                 title={"개인정보정책"}
        //                 onPress={() => {setPrivacyModal(true)}}
        //               />
        //               <SingleItem   
        //                 title={"서비스 이용약관"}
        //                 onPress={() => {setTermsModal(true)}}
        //               />
        //             </SettingSection>
        //             <HLine />

        //             <SettingSection
        //               title={"알람설정"}
                      
        //             >
        //               <ToggleList 
        //                 title={"공지수신"}
        //               />
        //               <ToggleList 
        //                 title={"학습알람"}
        //               />
        //               <ToggleList 
        //                 title={"푸시알림"}
        //               />
        //             </SettingSection>
        //             <HLine />

        //             <SettingSection
        //               title={"고객센터/도움말"}
                      
        //             >
        //               <SingleItem   
        //                 title={"고객센터/도움말"}
        //                 icon={"mail"}
        //                 // 누르면 고객센터페이지
        //                 onPress={() => alert("MAIL")}
        //               />
                      
        //             </SettingSection>
        //             <HLine />

        //             <SettingSection
        //               title={"계정설정"}
                      
        //             >
        //               <SingleItem   
        //                 title={"로그아웃"}
        //                 icon={"mail"}
        //                 // 누르면 고객센터페이지
        //                 onPress={ logout }
                        
        //               />
                      
        //             </SettingSection>
        //             <HLine />

        //             {termsModal ? <TermsofService visible={termsModal} close={() => {setTermsModal(false)}} /> : (null)}
        //             {privacyModal ? <Privacy visible={privacyModal} close={() => setPrivacyModal(false)} /> : (null)}
        //         </Container>
        //     </Common>
        // </ScrollView>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      height: 30,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: themes.colors.gray,
    },
    sectionList: {
      marginLeft: 10,
      width: '100%',
      justifyContent: 'center'
    },
    itemBox: {
      paddingLeft: 20,
      height: 40,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    item: {
      fontSize: 20
    }
});
