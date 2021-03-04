import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { CardProps } from '../../../../types';
import S from './style';

const Card = (props: CardProps) => {
  const { source, handlePress } = props;

  return (
    <TouchableOpacity
      style={S.container}
      activeOpacity={handlePress ? 0.9 : 1}
      onPress={handlePress}>
      {source && <Image style={S.image} source={source} resizeMode='contain' />}
    </TouchableOpacity>
  );
};

export default Card;
