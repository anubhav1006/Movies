import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import FitImage from 'react-native-fit-image';
import Card from './Card';

const SingleMovie = (props) => {
  const {selected, selectedHandler, movie} = props;
  const redIcon = require('../../res/images/heart_red.png');
  const icon = require('../../res/images/heart.png');
  const [favIcon, setFavIcon] = useState(icon);
  const dimension = Dimensions.get('window');
  const rat = dimension.height / dimension.width;

  useEffect(() => {
    setFavIcon(props.type == 'fav' ? redIcon : icon);
  }, []);

  return (
    <View style={styles.outerComponent}>
      <Card style={styles.cardExtn}>
        <FitImage
          source={
            movie.Poster != 'N/A'
              ? {uri: movie.Poster}
              : require('../../res/images/popcorn.png')
          }
          style={
            (movie.Poster != 'N/A'
              ? [
                  styles.thumbnailImage,
                  {
                    height: (5 / 3) * dimension.width * 0.42,
                    width: dimension.width * 0.42,
                  },
                ]
              : styles.thumbnailImageNA,
            {
              height: (5 / 3) * dimension.width * 0.42,
              width: dimension.width * 0.42,
            })
          }
          resizeMode={movie.Poster != 'N/A' ? 'cover' : 'contain'}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.year}>{movie.Year}</Text>
          </View>
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={() => {
              if (props.type != 'fav') {
                if (favIcon != redIcon) {
                  setFavIcon(redIcon);
                }
                selectedHandler({movie: movie});
              } else {
                if (favIcon == redIcon) {
                  setFavIcon(icon);
                  selectedHandler({movie: movie});
                }
              }
            }}>
            <Image style={styles.favouriteImage} source={favIcon}></Image>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.directedBy}>{movie.directedBy}</Text> */}
      </Card>
    </View>
  );
};

export default SingleMovie;

const styles = StyleSheet.create({
  outerComponent: {
    marginVertical: 6,
    marginHorizontal: 4,
    // flex: 1,
    alignItems: 'flex-start',
  },
  cardExtn: {flex: 1},
  thumbnailImage: {
    // flex: 3,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailImageNA: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    // transform: [{scale: 0.6}],
  },
  imageContainer: {},
  title: {
    // flex: 0.5,
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '600',
  },
  year: {
    // flex: 0.5,
    fontFamily: 'roboto',
    fontWeight: '600',
  },
  favouriteImage: {
    height: 30,
    width: 30,
  },
  bottomContainer: {
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // flexShrink: 1,
  },
  leftContainer: {
    flex: 5,
    flexShrink: 1,
  },
  rightContainer: {
    flex: 1,
    marginRight: 1,
    marginTop: 5,
  },
  //   directedBy: {},
});
