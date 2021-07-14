// import React from 'react';
// import { render } from 'react-dom';
// import {View, ScrollView, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
// import {Block, theme, Text} from 'galio-framework';
// import Card from '../../../component/common/Card';
// import EventCard from '../../../component/common/EventCard';
// import Section from '../../../component/common/Section';
// import themes from '../../../config/themes';
// import {useNavigation} from '@react-navigation/native';
// import Swiper from 'react-native-web-swiper';
// import Slide from '../../../component/common/Slide';
// import { AntDesign } from '@expo/vector-icons';


// const {width} = Dimensions.get("screen");
// const thumbMeasure = (width - 48 - 32) / 3;
// const cardWidth = width - theme.SIZES.BASE * 2;

// const articles = [
//   {
//     id: 1101822001,
//     title: '시간, 속력, 거리 (1)',
//     desc: "수리능력 중 응용수리 영역의 첫 번째 난관, 시간/속력/거리 첫번째 시간",
//     genre_ids: [
//       14,
//       101
//     ],
//     rating: 5.5,
//     poster_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
//     backdrop_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
//     professor: {},
//     comments: [],
//     likes: [],
//     url: `https://youtu.be/16iF_hKs034`
//     },
//     {
//       id: 1101822002,
//       title: '상황구성_위치추론 (1)',
//       desc: "문제해결능력, 위치추론 기초이론",
//       genre_ids: [
//         14,
//         100
//       ],
//       rating: 6.5,
//       poster_path: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
//       backdrop_path: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
//       professor: {},
//       comments: [],
//       likes: [],
//       url: `https://youtu.be/X3nq35bfJmA`
//     },
//     // {
//     //   id: 1101822003,
//     //   title: '상황구성_위치추론 (2)',
//     //   desc: "문제해결능력, 위치추론 기본이론. 문제해결 접근법을 적용하라",
//     //   genre_ids: [
//     //     14,
//     //     102
//     //   ],
//     //   rating: 6.5,
//     //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample2.png"),
//     //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back3.jpeg'),
//     //   professor: {},
//     //   comments: [],
//     //   likes: [],
//     //   url: `https://youtu.be/h03HjVWloQU`
//     // },
//     // {
//     //   id: 1101822004,
//     //   title: '상황구성_요일추론 (1)',
//     //   desc: "문제해결능력, 요일문제는 단순하다. 정해진 틀에서 빠르게 해결하라",
//     //   genre_ids: [
//     //     14,
//     //     102
//     //   ],
//     //   rating: 8.5,
//     //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample3.jpeg"),
//     //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back4.jpeg'),
//     //   professor: {},
//     //   comments: [],
//     //   likes: [],
//     //   url: `https://youtu.be/X3nq35bfJmA`
//     // },
//     // {
//     //   id: 1101822005,
//     //   title: '상황구성_요일추론 (2)',
//     //   desc: "문제해결능력, 요일추론 접근법 확인과 실전 적용",
//     //   genre_ids: [
//     //     14,
//     //     102
//     //   ],
//     //   rating: 10.0,
//     //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample4.jpeg"),
//     //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back5.jpeg'),
//     //   professor: {},
//     //   comments: [],
//     //   likes: [],
//     //   url: `https://youtu.be/X3nq35bfJmA`
//     // }
//   ]

// const Home = () => {

//     // const renderArticles = () => {
//     //     return (
//     //         <ScrollView
//     //             showsVerticalScrollIndicator={false}
//     //             contentContainerStyle={styles.articles}
//     //         >
//     //             <Block flex>
//     //                 {/* <Card item={articles[0]} horizontal/> */}
//     //                 <Text>
//     //                     1111
//     //                     2222
//     //                     3333
//     //                     4444
//     //                     242423423
//     //                     ;skdjf;
                        
//     //                 </Text>
//     //             </Block>
//     //         </ScrollView>
//     //     )
//     // }

//     const navigation = useNavigation();

//     return (
//         <View style={styles.Container}>
//             <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={styles.articles}
//             >
//               <View style={{display:'flex', flexDirection: 'row', width: '100%', height: 200, marginTop: 15}}>
//                   <Swiper
//                       controlsEnabled={true}
//                       loop={false}
//                       timeout={7}
//                       controlsProps={{
//                         prevTitle: '이전',
//                         nextTitle: '다음',
//                         prevTitleStyle: {color: 'black', backgroundColor: themes.colors.Gray},
//                         nextTitleStyle: {color: 'black', backgroundColor: themes.colors.Gray}
//                       }}

//                     >
//                       {articles.map(i => (
//                         <Slide 
//                           src={i.poster_path}
//                           title={i.title}
//                           desc={i.desc}
//                           tag={i.genre_ids}
//                         />
//                       ))}
//                     </Swiper>
//                   </View>
//                 <View style={styles.group}>
//                   <View>
                    
//                   </View>
//                     <View style={{display:'flex', flexDirection: 'row'}}>
//                         <Section title={'NCS'}>
//                             {articles.map(i => (
//                                 <TouchableOpacity
//                                   onPress={()=> navigation.navigate('Detail')}
//                                 >
//                                   <Card 
//                                     item={i}
//                                     style={{marginRight: theme.SIZES.BASE, width: 150}}
//                                   />
//                                 </TouchableOpacity>
                                
//                             ))}
//                         </Section>
//                     </View>
//                     <View style={{display:'flex', flexDirection: 'row'}}>
//                         <Section title={'PSAT'}>
//                             {articles.map(i => (
//                                 <Card 
//                                     item={i}
//                                     // horizontal
//                                     full
//                                     style={{marginRight: theme.SIZES.BASE, width: 250}}
//                                 />
//                             ))}
//                         </Section>
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     title: {
//       paddingBottom: theme.SIZES.BASE,
//       paddingHorizontal: theme.SIZES.BASE * 2,
//       marginTop: 22,
//     //   color: argonTheme.COLORS.HEADER
//     },
//     group: {
//       paddingTop: theme.SIZES.BASE
//     },
//     albumThumb: {
//       borderRadius: 4,
//       marginVertical: 4,
//       alignSelf: "center",
//       width: thumbMeasure,
//       height: thumbMeasure
//     },
//     articles: {
//         width: width - theme.SIZES.BASE * 2,
//         paddingVertical: theme.SIZES.BASE
//     },
//     category: {
//       backgroundColor: theme.COLORS.WHITE,
//       marginVertical: theme.SIZES.BASE / 2,
//       borderWidth: 0
//     },
//     categoryTitle: {
//       height: "100%",
//       paddingHorizontal: theme.SIZES.BASE,
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       justifyContent: "center",
//       alignItems: "center"
//     },
//     Container: {
//         display: 'flex',
//         alignItems: 'center',
//         width: width,
//         backgroundColor: themes.bgColor.bgcolor
//     },
//     imageBlock: {
//       overflow: "hidden",
//       borderRadius: 4
//     },
//     productItem: {
//       width: cardWidth - theme.SIZES.BASE * 2,
//       marginHorizontal: theme.SIZES.BASE,
//       shadowColor: "black",
//       shadowOffset: { width: 0, height: 7 },
//       shadowRadius: 10,
//       shadowOpacity: 0.2
//     },
//     productImage: {
//       width: cardWidth - theme.SIZES.BASE,
//       height: cardWidth - theme.SIZES.BASE,
//       borderRadius: 3
//     },
//     productPrice: {
//       paddingTop: theme.SIZES.BASE,
//       paddingBottom: theme.SIZES.BASE / 2
//     },
//     productDescription: {
//       paddingTop: theme.SIZES.BASE
//       // paddingBottom: theme.SIZES.BASE * 2,
//     }
//   });

// // const styles = StyleSheet.create({
// //     Home: {
// //         width: width
// //     },
// //     articles: {
// //         width: width - theme.SIZES.BASE * 2,
// //         paddingVertical: theme.SIZES.BASE
// //     }
// // })









import React, { useEffect, useState } from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';

import NcsBbs from '../Detail/NcsBbs';
import Slide from '../../../component/common/Slide';
import themes from '../../../config/themes';
import Section from '../../../component/common/Section';
import Card from '../../../component/common/Card';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import { Alert } from 'react-native';
import { theme } from 'galio-framework';


const {width} = Dimensions.get("screen");

const articles = [
  {
    id: 1101822001,
    title: '시간, 속력, 거리 (1)',
    desc: "수리능력 중 응용수리 영역의 첫 번째 난관, 시간/속력/거리 첫번째 시간",
    genre_ids: [
      14,
      101
    ],
    rating: 5.5,
    poster_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    professor: {},
    comments: [],
    likes: [],
    url: `https://youtu.be/16iF_hKs034`
    },
    {
      id: 1101822002,
      title: '상황구성_위치추론 (1)',
      desc: "문제해결능력, 위치추론 기초이론",
      genre_ids: [
        14,
        100
      ],
      rating: 6.5,
      poster_path: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
      backdrop_path: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
      professor: {},
      comments: [],
      likes: [],
      url: `https://youtu.be/X3nq35bfJmA`
    },
    // {
    //   id: 1101822003,
    //   title: '상황구성_위치추론 (2)',
    //   desc: "문제해결능력, 위치추론 기본이론. 문제해결 접근법을 적용하라",
    //   genre_ids: [
    //     14,
    //     102
    //   ],
    //   rating: 6.5,
    //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample2.png"),
    //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back3.jpeg'),
    //   professor: {},
    //   comments: [],
    //   likes: [],
    //   url: `https://youtu.be/h03HjVWloQU`
    // },
    // {
    //   id: 1101822004,
    //   title: '상황구성_요일추론 (1)',
    //   desc: "문제해결능력, 요일문제는 단순하다. 정해진 틀에서 빠르게 해결하라",
    //   genre_ids: [
    //     14,
    //     102
    //   ],
    //   rating: 8.5,
    //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample3.jpeg"),
    //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back4.jpeg'),
    //   professor: {},
    //   comments: [],
    //   likes: [],
    //   url: `https://youtu.be/X3nq35bfJmA`
    // },
    // {
    //   id: 1101822005,
    //   title: '상황구성_요일추론 (2)',
    //   desc: "문제해결능력, 요일추론 접근법 확인과 실전 적용",
    //   genre_ids: [
    //     14,
    //     102
    //   ],
    //   rating: 10.0,
    //   poster_path: require("../HomeScreen-master/assets/images/thumb/sample4.jpeg"),
    //   backdrop_path: require('../HomeScreen-master/assets/images/thumb/back5.jpeg'),
    //   professor: {},
    //   comments: [],
    //   likes: [],
    //   url: `https://youtu.be/X3nq35bfJmA`
    // }
]



const Home = () => {
  const [ncs, setNcs] = useState([]);
  const [psat, setPsat] = useState([]);
  const [notice, setNotice] = useState([]);
  
  const getData = async() => {
    Axios.get("http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs")
      .then(res => {
        // console.log(res.data.results)
        setNcs(res.data.results)
      })
      .catch(err => {
        console.log(err)
      });
  }

  const getPsat = async() => {
    Axios.get("http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/psat")
      .then(res => {
        // console.log(res.data.results)
        setPsat(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getNotice = async() => {
    Axios.get("http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/notice")
      .then(res => {
        setNotice(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
    getPsat()
    getNotice()
  }, []);
  
  const navigation = useNavigation();
  const goToDetail = (id, genre) => {
    navigation.navigate("Detail", {id, genre})
    console.log("112391283019283012983", genre)
};

  return (
    <SafeAreaView 
      style={{flex: 1, backgroundColor: themes.colors.main}}
    >
      <StatusBar 
        backgroundColor={themes.colors.main}
        translucent={false} 
        animated={true}
        hidden={false}
        barStyle={'dark-content'}
        
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
        <View style={{height: 50}} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.group}>                   
          <View style={{display:'flex', flexDirection: 'row'}}>
            <Section title={'NCS'}>
              {ncs.map(i => (
                // <TouchableOpacity
                //   onPress={()=> navigation.navigate("Detail", {key})}
                  
                // >
                  <Card 
                    item={i}
                    style={{marginRight: themes.sizes.base, width: 150}}
                  />
                // </TouchableOpacity>
              ))}
            </Section>
          </View>
          <View style={{display:'flex', flexDirection: 'row'}}>
            <Section title={'PSAT'}>
              {psat.map(i => (
                <TouchableOpacity
                  onPress={()=> goToDetail(i.key)}
                >
                  <Card 
                      item={i}
                      full
                      style={{marginRight: themes.sizes.base, width: 250}}
                  />
                </TouchableOpacity>
              ))}
            </Section>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>




  );
};

export default Home;

const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
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