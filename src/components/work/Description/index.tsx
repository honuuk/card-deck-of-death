import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { DescriptionProps } from '../../../../types';
import S from './style';

const Description = (props: DescriptionProps) => {
  const { isEnd, selectedCard, handleClear } = props;

  const getDescription = (card: number) => {
    const types = ['Squat', 'Squat', 'Left lunge', 'Right lunge'];
    const typeIndex = Math.floor(card / 13);
    const times = Math.min((card % 13) + 1, 11);

    if (typeIndex === 4) return 'Squat 11 times';
    return `${types[typeIndex]} ${times === 1 ? 11 : times} times`;
  };

  return (
    <View style={S.action_name}>
      {isEnd ? (
        <TouchableOpacity style={S.return_to_start} onPress={handleClear}>
          <Text style={S.return_to_start_text}>return to start</Text>
        </TouchableOpacity>
      ) : (
        <Text style={S.action_name_text}>
          {selectedCard !== null && getDescription(selectedCard)}
        </Text>
      )}
    </View>
  );
};

export default Description;
