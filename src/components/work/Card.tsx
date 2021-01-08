import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { CardProps, CardType, EventHandler } from '../../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
    aspectRatio: 3 / 4,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
});

const Card = (props: CardProps) => {
  const { source, handlePress } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={handlePress ? 0.9 : 1}
      onPress={handlePress}>
      <Image style={styles.image} source={source} resizeMode='contain' />
    </TouchableOpacity>
  );
};

export default Card;
