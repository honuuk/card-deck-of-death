import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { LandingProps } from '../../../types';
import S from './style';

const LandingContainer = (props: LandingProps) => {
  const { handleStart } = props;
  return (
    <View style={S.container}>
      <Button title="Let's work out!" onPress={handleStart} />
    </View>
  );
};

export default LandingContainer;
