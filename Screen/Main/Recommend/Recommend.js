
import * as React from 'react';
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
  Button
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { getMovies } from '../../../movieApi';
import Genres from '../../../component/common/Genres';
import Rating from '../../../component/common/Ratings';
import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert } from 'react-native';
import themes from '../../../config/themes';
import { theme } from 'galio-framework';
 
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;



//  const Loading = () => (
//    <View style={styles.loadingContainer}>
//      <Text style={styles.paragraph}>Loading...</Text>
//    </View>
//  );
 
 const Backdrop = ({ movies, scrollX }) => {
   return (
     <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
       <FlatList
         data={movies.reverse()}
         keyExtractor={(item) => item.key + '-backdrop'}
         removeClippedSubviews={false}
         contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
         renderItem={({ item, index }) => {
           if (!item.backdrop) {
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
                //  source={item.backdrop}
                source={require('../../../assets/bg1.png')}
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
 
 export default function Recommmend() {
  const [movies, setMovies] = React.useState([]);
  const navigation = useNavigation();
  const goToRecommendDetail = (id) => {
    navigation.navigate("Detail", {id})
    console.log("+++++++++++++", id)
  };

   const scrollX = React.useRef(new Animated.Value(0)).current;
   React.useEffect(() => {
     const fetchData = async () => {


        //  await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8a919d63fb74ef8af3e7074f3f1ca20f&language=en-US&page=1')
        //             .then(data => {
        //                 setMovies(data.data.results)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             });
       const movies = await getMovies();
       console.log("++++++", movies)
    //    // Add empty items to create fake space
    //    // [empty_item, ...movies, empty_item]
       setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
     };
 
     if (movies.length === 0) {
       fetchData(movies);
     }
   }, [movies]);
 
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
          //  if (!item.poster) {
          //    return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          //  }
 
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
                   backgroundColor: themes.colors.table,
                   borderRadius: 34,
                 }}
                
               >
                    <Image
                      // source={item.poster}
                      source={require('../../../assets/images/baked-fries.jpg')}
                      style={styles.posterImage}
                    />
                    <Text onPress={() => Alert.alert('alertt')} style={{ fontSize: 16 }} numberOfLines={1}>
                    {item.title}
                    </Text>
                    {/* <Rating rating={item.rating} /> */}
                    {/* <Genres genres={item.genres} /> */}
                    <Text>
                      ***{item.genres}***
                    </Text>
                    <Text style={{ fontSize: 12, margin: 5 }} numberOfLines={3}>
                    {item.description}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        goToRecommendDetail(item.key)
                      }}
                      
                    >
                      <TouchableOpacity 
                        style={styles.showDetail}
                        onPress={() => navigation.navigate("Detail")} 
                      >
                        <Text style={{color: themes.fontsColor.buttonText}}>
                          자세히 보기
                        </Text>
                      </TouchableOpacity>
                      
                      
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
     backgroundColor: themes.colors.background
   },
   paragraph: {
     margin: 24,
     fontSize: 18,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   posterImage: {
     width: '100%',
     height: ITEM_SIZE * 1.2,
     resizeMode: 'cover',
     borderRadius: 24,
     margin: 0,
     marginBottom: 10,
   },
   showDetail: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 14,
    backgroundColor: themes.colors.basic,
    marginTop: 15,
   }
 });
