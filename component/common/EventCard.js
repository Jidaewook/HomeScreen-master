import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import themes from '../../config/themes';

// import { argonTheme } from '../constants';


class EventCard extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} muted={!ctaColor} color={ctaColor} bold>{item.cta}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

EventCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
    
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 160,
    resizeMode: 'stretch',
    width: '100%'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(EventCard);

// import React from 'react';
// import PropTypes from 'prop-types';
// import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
// import {Block, Text, theme} from 'galio-framework';
// // import {withNavigation} from '@react-navigation/compat';
// import {withNavigation} from '@react-navigation/compat';



// const Card = ({item, horizontal, full, ctaColor, imageStyle}) => {
    
//     const imageStyles = [
//         full ? styles.fullImage : styles.horizontalImage,
//         imageStyle
//     ]

//     const cardContainer = [
//         styles.card, styles.shadow, style
//     ];

//     const imageContainer = [
//         horizontal ? styles.horizontalStyles : styles.verticalStyles,
//         styles.shadow
//     ]
    
//     return (
//         <Block row={horizontal} card flex style={cardContainer}>
//             <TouchableWithoutFeedback>
//                 <Block flex style={imageContainer}>
//                     <Image source={{uri: item.image}} style={imageStyle}/>
//                 </Block>
//             </TouchableWithoutFeedback>
//             <TouchableWithoutFeedback>
//                 <Block flex space="between" style={styles.cardDescription}>
//                     <Text size={14} style={styles.cardTitle}>
//                         {item.title}
//                     </Text>
//                     <Text size={12} muted={!ctaColor} color={cataColor} bold>
//                         {item.cta}
//                     </Text>

//                 </Block>
//             </TouchableWithoutFeedback>
//         </Block>
//     );
// };

// Card.propTypes = {

    
//     item: PropTypes.object,
//     horizontal: PropTypes.bool,
//     full: PropTypes.bool,
//     ctaColor: PropTypes.string,
//     imageStyle: PropTypes.any
// };

// export default withNavigation(Card);

// const styles = StyleSheet.create({
//     card: {
//       backgroundColor: theme.COLORS.WHITE,
//       marginVertical: theme.SIZES.BASE,
//       borderWidth: 0,
//       minHeight: 114,
//       marginBottom: 16
//     },
//     cardTitle: {
//       flex: 1,
//       flexWrap: 'wrap',
//       paddingBottom: 6
//     },
//     cardDescription: {
//       padding: theme.SIZES.BASE / 2
//     },
//     imageContainer: {
//       borderRadius: 3,
//       elevation: 1,
//       overflow: 'hidden',
//     },
//     image: {
//       // borderRadius: 3,
//     },
//     horizontalImage: {
//       height: 122,
//       width: 'auto',
//     },
//     horizontalStyles: {
//       borderTopRightRadius: 0,
//       borderBottomRightRadius: 0,
//     },
//     verticalStyles: {
//       borderBottomRightRadius: 0,
//       borderBottomLeftRadius: 0
//     },
//     fullImage: {
//       height: 215
//     },
//     shadow: {
//       shadowColor: theme.COLORS.BLACK,
//       shadowOffset: { width: 0, height: 2 },
//       shadowRadius: 4,
//       shadowOpacity: 0.1,
//       elevation: 2,
//     },
//   });