import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.cardContainer, ...props.style}}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
