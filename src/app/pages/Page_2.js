import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import {removeFromFavourites} from '../../actionCreators/favourites';
import SingleMovie from '../components/SingleMovie';

class Page_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteMovies: {},
    };
  }
  componentDidMount() {}

  render() {
    const {favouriteMovies} = this.props;
    console.log('Favourite movies: ' + JSON.stringify(this.props));
    const {removeFromFavourites} = this.props;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.mainHeader}>Here's your watchlist!!</Text>
        </View>
        <View style={styles.line} />
        {favouriteMovies != undefined && favouriteMovies.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            data={favouriteMovies}
            renderItem={({item}) => {
              return item != undefined ? (
                <SingleMovie
                  type="fav"
                  movie={item}
                  selectedHandler={(payload) =>
                    removeFromFavourites(payload)
                  }></SingleMovie>
              ) : null;
            }}
            numColumns={2}
            initialNumToRender={100}
            keyExtractor={(item) => item.imdbID}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          //   Alert.alert('Please add some items to view watchlist')
          <View style={styles.emptyMessgeContaienr}>
            <Text style={styles.emptyMessge}>
              Please add some items to view in watchlist by pressing heart icon
              on bottom right of the movie card.
            </Text>
          </View>
        )}
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
  headerContainer: {
    justifyContent: 'flex-start',
    //marginBottom: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 0,
    margin: 10,
    alignSelf: 'center',
    borderWidth: 1.3,
    borderColor: '#011111',
    height: 0,
    width: '80%',
    borderRadius: 5,
  },
  emptyMessge: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessgeContaienr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

Page_2.options = {
  topBar: {
    title: {
      text: 'Watchlist',
    },
  },
  bottomTab: {
    text: 'Watchlist',
    icon: require('../../res/images/wishlist.png'),
    selectedIconColor: colors.primaryComplement,
    animate: true,
    drawBehind: false,
    iconInsets: {top: 5, bottom: -5, left: 20, right: 20},
  },
};

const mapStateToProps = (state) => ({
  favouriteMovies: state.favourites.favouriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (payload) => dispatch(removeFromFavourites(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page_2);
