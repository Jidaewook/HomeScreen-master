/**
 * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
 *
 */
 import React, {useEffect, useState, useRef} from 'react';
 import {
   StatusBar,
   Text,
   View,
   StyleSheet,
   FlatList,
   Image,
   Dimensions,
   Animated,
   TouchableOpacity,
   Platform,
 } from 'react-native';
 const { width, height } = Dimensions.get('window');
 import { getMovies } from '../../../api2';
 import BadgePill from '../../../component/common/BadgePill';
 import themes from '../../../config/themes';
 import {COLORS, theme} from '../../../consts';
 import {useNavigation} from '@react-navigation/native'
 
 import Genres from '../../../component/common/Genres';
//  import Rating from './Rating';
 import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
 
 const SPACING = 10;
 const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
 const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
 const BACKDROP_HEIGHT = height * 0.65;
 

 const Loading = () => (
   <View style={styles.loadingContainer}>
     <Text style={styles.paragraph}>Loading...</Text>
   </View>
 );
 
 const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={(item) => item.key + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: item.poster }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

 
 export default function App() {
   const [movies, setMovies] = useState([]);
   const navigation = useNavigation();

    const goToDetail = (id) => {
        navigation.navigate("Detail", {id, isNcs: true})
    };
   const scrollX = useRef(new Animated.Value(0)).current;
   useEffect(() => {
     const fetchData = async () => {
       const movies = await getMovies();
       setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
     };
 
     if (movies.length === 0) {
       fetchData(movies);
     }
   }, [movies]);
 
   if (movies.length === 0) {
     return <Loading />;
   }
 
   return (
     <View style={styles.container}>
       <Backdrop movies={movies} scrollX={scrollX} />
       <StatusBar hidden />
       <Animated.FlatList
         showsHorizontalScrollIndicator={false}
         data={movies}
         keyExtractor={(item) => item.key}
         horizontal
         bounces={false}
         decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
         renderToHardwareTextureAndroid
         contentContainerStyle={{ alignItems: 'center' }}
         snapToInterval={ITEM_SIZE}
         snapToAlignment='start'
         onScroll={Animated.event(
           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
           { useNativeDriver: false }
         )}
         scrollEventThrottle={16}
         renderItem={({ item, index }) => {
           if (!item.poster) {
             return <View style={{ width: EMPTY_ITEM_SIZE }} />;
           }
 
           const inputRange = [
             (index - 2) * ITEM_SIZE,
             (index - 1) * ITEM_SIZE,
             index * ITEM_SIZE,
           ];
 
           const translateY = scrollX.interpolate({
             inputRange,
             outputRange: [100, 50, 100],
             extrapolate: 'clamp',
           });
 
           return (
             <View style={{ width: ITEM_SIZE }}>
               <Animated.View
                 style={{
                   marginHorizontal: SPACING,
                   padding: SPACING * 2,
                   alignItems: 'center',
                   transform: [{ translateY }],
                   backgroundColor: 'white',
                   borderRadius: 34,
                 }}
               >
                 <Image
                   source={{ uri: item.poster }}
                   style={styles.posterImage}
                 />
                 <Text style={{ fontSize: 24 }} numberOfLines={1}>
                   {item.title}
                 </Text>
                 <Genres genres={item.genres} />
                 <Text style={{ fontSize: 12 }} numberOfLines={3}>
                   {item.description}
                 </Text>
                 <TouchableOpacity onPress={() => goToDetail(item.key)}>
                   <View style={styles.button}>
                     <Text style={styles.buttonText}>
                      자세히 보기

                     </Text>
                   </View>
                 </TouchableOpacity>
               </Animated.View>
             </View>
           );
         }}
       />
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   loadingContainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   container: {
     flex: 1,
   },
   paragraph: {
     margin: 24,
     fontSize: 18,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   posterImage: {
     width: '100%',
     height: ITEM_SIZE * 1,
     resizeMode: 'cover',
     borderRadius: 24,
     margin: 0,
     marginBottom: 10,
   },
   badgePill: {
    fontSize: 10, 
    letterSpacing: -0.6, 
    color: themes.colors.darkgray, 
    opacity: .5
},
  button: {
    width: 120,
    height: 30,
    marginTop: 15,
    borderRadius: 24,
    backgroundColor: COLORS.main4,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold'

  }
 });
 