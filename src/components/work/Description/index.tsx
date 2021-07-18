import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { DescriptionProps } from '../../../../types';
import S from './style';

const Description = (props: DescriptionProps) => {
  const { isEnd, selectedCard, handleGoBack } = props;

  const getType = (card: number) => {
    const types = ['Left lunge', 'Squat', 'Squat', 'Right lunge'];
    const typeIndex = Math.floor(card / 13);

    if (typeIndex === 4) return 'Squat';
    return types[typeIndex];
  };

  const getTimes = (card: number) => {
    const typeIndex = Math.floor(card / 13);
    const times = Math.min((card % 13) + 1, 11);

    if (typeIndex === 4) return '11 times';
    return `${times === 1 ? 11 : times} times`;
  };

  return (
    <View style={S.action_name}>
      {!isEnd && (
        <>
          <Text style={S.action_name_text}>{selectedCard !== null && `${getTimes(selectedCard)} of`}</Text>
          <Text style={S.action_name_text}>{selectedCard !== null && getType(selectedCard)}</Text>
        </>
      )}
    </View>
  );
};

export default Description;
