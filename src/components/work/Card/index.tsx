import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { CardProps } from '../../../../types';
import S from './style';

const Card = (props: CardProps) => {
  const { source, handlePress } = props;

  const renderImage = () => {
    if (!source) return null;
    return <Image style={S.image} source={source} resizeMode='contain' />;
  };

  return (
    <TouchableOpacity
      style={S.container}
      activeOpacity={handlePress ? 0.9 : 1}
      onPress={handlePress}>
      {renderImage()}
    </TouchableOpacity>
  );
};

export default Card;
