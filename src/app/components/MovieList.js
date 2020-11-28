import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import SingleMovie from './SingleMovie';

export default function MovieList(props) {
  const {movies, selectedHandler, type} = props;
  console.log(movies);
  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 30,
      }}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={movies}
      renderItem={({item}) => {
        return item != undefined ? (
          <SingleMovie
            movie={item}
            type={type}
            selectedHandler={(payload) => selectedHandler(payload)}
          />
        ) : null;
      }}
      numColumns={2}
      initialNumToRender={100}
      keyExtractor={(item) => item.imdbID}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    // flexDirection: 'column',
    // flex: 1,
  },
});
