import React from 'react';
import { Text, View } from 'react-native';

import { CardsProps } from '../../../../types';
import cardSourceMap from '../../../utils/cardSourceMap';
import Card from '../Card';
import S from './style';

const Cards = (props: CardsProps) => {
  const { isEnd, cards, selectedCard, handlePressCard } = props;

  return (
    <View style={S.card_wrap}>
      {isEnd ? (
        <Text style={S.result}>{cards.length ? 'Fail' : 'Success'}</Text>
      ) : (
        <>
          <Card source={cards.length && cardSourceMap[54]} handlePress={handlePressCard} />
          <Card source={selectedCard !== null && cardSourceMap[selectedCard]} />
        </>
      )}
    </View>
  );
};

export default Cards;
