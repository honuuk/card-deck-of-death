import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { CardProps, CardType } from '../types';

const back = require('../public/card_back.png');
const spade10 = require('../public/spade10.png');
const spade2 = require('../public/spade2.png');
const spade3 = require('../public/spade3.png');
const spade4 = require('../public/spade4.png');
const spade5 = require('../public/spade5.png');
const spade6 = require('../public/spade6.png');
const spade7 = require('../public/spade7.png');
const spade8 = require('../public/spade8.png');
const spade9 = require('../public/spade9.png');
const spadeA = require('../public/spadeA.png');
const spadeJ = require('../public/spadeJ.png');
const spadeK = require('../public/spadeK.png');
const spadeQ = require('../public/spadeQ.png');

const imageMap = {
  [CardType.back]: back,
  [CardType.spadeA]: spadeA,
  [CardType.spade2]: spade2,
  [CardType.spade3]: spade3,
  [CardType.spade4]: spade4,
  [CardType.spade5]: spade5,
  [CardType.spade6]: spade6,
  [CardType.spade7]: spade7,
  [CardType.spade8]: spade8,
  [CardType.spade9]: spade9,
  [CardType.spade10]: spade10,
  [CardType.spadeJ]: spadeJ,
  [CardType.spadeQ]: spadeQ,
  [CardType.spadeK]: spadeK,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
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
  const { selectedCard } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={selectedCard === CardType.back ? 0.9 : 1}>
      <Image style={styles.image} source={imageMap[selectedCard]} resizeMode='contain' />
    </TouchableOpacity>
  );
};

export default Card;
