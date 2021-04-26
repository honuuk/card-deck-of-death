import React from 'react';
import { View } from 'react-native';

import { CardsProps } from '../../../../types';
import cardSourceMap from '../../../utils/cardSourceMap';
import Card from '../Card';
import Result from '../Result';
import S from './style';

const Cards = (props: CardsProps) => {
  const { isEnd, cards, selectedCard, handlePressCard } = props;

  return (
    <View style={S.card_wrap}>
      {isEnd ? (
        <Result type={cards.length ? 'Fail' : 'Success'} />
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
