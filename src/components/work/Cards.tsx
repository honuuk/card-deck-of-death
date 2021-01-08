import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CardsProps, CardType } from '../../../types';
import Card from './Card';

const styles = StyleSheet.create({
  card_wrap: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf1d2',
  },
  result: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
    fontSize: 60,
    fontWeight: '800',
    color: 'red',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
    transform: [{ rotate: '-15deg' }],
  },
});

const Cards = (props: CardsProps) => {
  const { isEnd, cards, imageMap, selectedCard, handlePressCard } = props;
  return (
    <View style={styles.card_wrap}>
      {isEnd ? (
        <Text style={styles.result}>{cards.length ? 'Fail' : 'Success'}</Text>
      ) : (
        <>
          <Card source={cards.length && imageMap[CardType.back]} handlePress={handlePressCard} />
          <Card source={selectedCard !== null && imageMap[selectedCard]} />
        </>
      )}
    </View>
  );
};

export default Cards;
