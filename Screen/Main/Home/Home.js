import React from 'react';
import { render } from 'react-dom';
import {View, ScrollView, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {Block, theme, Text} from 'galio-framework';
import Card from '../../../component/common/Card';
import EventCard from '../../../component/common/EventCard';
import Section from '../../../component/common/Section';
import themes from '../../../config/themes';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../../component/common/Slide';
import { AntDesign } from '@expo/vector-icons';


const {width} = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const articles = [
    {
      title: 'Ice cream is made with carrageenan …',
      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      cta: 'View article', 
      desc: '마감기한 3/6',
      horizontal: true
    },
    {
      title: 'Is makeup one of your daily esse …',
      image: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
      cta: 'View article',
      desc: '마감기한 3/6',

    },
    {
      title: 'Coffee is more than just a drink: It’s …',
      image: 'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      cta: 'View article' ,
      desc: '마감기한 3/6',

    },
    {
      title: 'Fashion is a popular style, especially in …',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80',
      cta: 'View article' ,
      desc: '마감기한 3/6',

    },
    {
      title: 'Argon is a great free UI packag …',
      image: 'https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=1947&q=80',
      cta: 'View article', 
      desc: '마감기한 3/6',

      horizontal: true
    },
  ]

const Home = () => {

    // const renderArticles = () => {
    //     return (
    //         <ScrollView
    //             showsVerticalScrollIndicator={false}
    //             contentContainerStyle={styles.articles}
    //         >
    //             <Block flex>
    //                 {/* <Card item={articles[0]} horizontal/> */}
    //                 <Text>
    //                     1111
    //                     2222
    //                     3333
    //                     4444
    //                     242423423
    //                     ;skdjf;
                        
    //                 </Text>
    //             </Block>
    //         </ScrollView>
    //     )
    // }

    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}
            >
              <View style={{display:'flex', flexDirection: 'row', width: '100%', height: 200, marginTop: 15}}>
                  <Swiper
                      controlsEnabled={true}
                      loop={false}
                      timeout={7}
                      controlsProps={{
                        prevTitle: '이전',
                        nextTitle: '다음',
                        prevTitleStyle: {color: 'black', backgroundColor: themes.colors.shinyGray},
                        nextTitleStyle: {color: 'black', backgroundColor: themes.colors.shinyGray}
                      }}

                    >
                      {articles.map(i => (
                        <Slide 
                          src={i.image}
                          title={i.title}
                          desc={i.desc}
                        />
                      ))}
                    </Swiper>
                  </View>
                <View style={styles.group}>
                  <View>
                    
                  </View>
                    <View style={{display:'flex', flexDirection: 'row'}}>
                        <Section title={'NCS'}>
                            {articles.map(i => (
                                <TouchableOpacity
                                  onPress={()=> navigation.navigate('Detail')}
                                >
                                  <Card 
                                    item={i}
                                    style={{marginRight: theme.SIZES.BASE, width: 150}}
                                  />
                                </TouchableOpacity>
                                
                            ))}
                        </Section>
                    </View>
                    <View style={{display:'flex', flexDirection: 'row'}}>
                        <Section title={'PSAT'}>
                            {articles.map(i => (
                                <Card 
                                    item={i}
                                    // horizontal
                                    full
                                    style={{marginRight: theme.SIZES.BASE, width: 250}}
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
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
    //   color: argonTheme.COLORS.HEADER
    },
    group: {
      paddingTop: theme.SIZES.BASE
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0
    },
    categoryTitle: {
      height: "100%",
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center"
    },
    Container: {
        display: 'flex',
        alignItems: 'center',
        width: width,
        backgroundColor: themes.bgColor.bgcolor
    },
    imageBlock: {
      overflow: "hidden",
      borderRadius: 4
    },
    productItem: {
      width: cardWidth - theme.SIZES.BASE * 2,
      marginHorizontal: theme.SIZES.BASE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 7 },
      shadowRadius: 10,
      shadowOpacity: 0.2
    },
    productImage: {
      width: cardWidth - theme.SIZES.BASE,
      height: cardWidth - theme.SIZES.BASE,
      borderRadius: 3
    },
    productPrice: {
      paddingTop: theme.SIZES.BASE,
      paddingBottom: theme.SIZES.BASE / 2
    },
    productDescription: {
      paddingTop: theme.SIZES.BASE
      // paddingBottom: theme.SIZES.BASE * 2,
    }
  });

// const styles = StyleSheet.create({
//     Home: {
//         width: width
//     },
//     articles: {
//         width: width - theme.SIZES.BASE * 2,
//         paddingVertical: theme.SIZES.BASE
//     }
// })