import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import getMoviesUsingString from '../../actionCreators/movies';
import SingleMovie from '../components/SingleMovie';
import colors from '../../constants/colors';
import {addToFavourites} from '../../actionCreators/favourites';

class Page_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoviesLoading: false,
      movies: [],
    };
  }
  componentDidMount() {
    // const {getMoviesUsingString, isMoviesLoaded} = this.props;
    // if (!isMoviesLoaded) {
    //   getMoviesUsingString({string: 'Hangover'});
    // }
  }
  searchFilterFunction = (text) => {
    if (text) {
      //   this.setState({searchString: text});
      const {getMoviesUsingString} = this.props;
      getMoviesUsingString({string: text});
      //   console.log(JSON.stringify(this.props));
    }
  };
  render() {
    const {movies, isMoviesLoading} = this.props;
    const {addToFavourites} = this.props;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.searchFilterFunction(text)}
            underlineColorAndroid="transparent"
            placeholder="Search Here.."
          />
        </View>
        <View style={styles.moviesContainer}>
          {console.log(
            'bool: ' + isMoviesLoading + ' & ' + JSON.stringify(movies),
          )}
          {!isMoviesLoading ? (
            movies != undefined && movies.length ? (
              <FlatList
                contentContainerStyle={{
                  paddingBottom: 30,
                }}
                data={movies}
                renderItem={({item}) => {
                  return item != undefined ? (
                    <SingleMovie
                      movie={item}
                      selectedHandler={(payload) =>
                        addToFavourites(payload)
                      }></SingleMovie>
                  ) : null;
                }}
                numColumns={2}
                initialNumToRender={100}
                keyExtractor={(item) => item.imdbID}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View style={styles.emptyMessgeContaienr}>
                <Text style={styles.emptyMessge}>
                  Start typing in search field to show some items
                </Text>
              </View>
            )
          ) : (
            <ActivityIndicator size="large" color="Yellow" />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.primaryComplement,
  },
  searchContainer: {},
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: colors.primary,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  moviesContainer: {
    paddingBottom: 20,
  },
  singleItem: {
    // marginHorizontal: 4,
    // height: 150,
  },
  row: {flex: 1, justifyContent: 'space-around'},

  emptyMessge: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  emptyMessgeContaienr: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

Page_1.options = {
  topBar: {
    title: {
      text: 'Movies',
    },
  },
  bottomTab: {
    text: 'Movies',
    icon: require('../../res/images/video.png'),
    selectedIconColor: colors.primaryComplement,
    animate: true,
    drawBehind: false,
    iconInsets: {top: 5, bottom: -5, left: 5, right: -5},
  },
};
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isMoviesLoading: state.movies.isMoviesLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getMoviesUsingString: (payload) => dispatch(getMoviesUsingString(payload)),
  addToFavourites: (payload) => dispatch(addToFavourites(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Page_1);
