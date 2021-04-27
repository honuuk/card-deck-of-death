import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { ResultProps } from '../../../../types';
import S from './style';

const Result = ({ type, navigation }: ResultProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Record');
    }, 1000);
    return () => clearTimeout(timeout);
  });
  return (
    <View style={S.resultWrap}>
      <Animatable.Text
        style={{ ...S.result, color: type === 'Success' ? 'red' : 'blue' }}
        animation='bounceIn'>
        {type}
      </Animatable.Text>
    </View>
  );
};

export default Result;
