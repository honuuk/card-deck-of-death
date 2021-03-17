import { useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { LandingProps } from '../../../types';
import S from './style';

const LandingContainer = (props: LandingProps) => {
  const { handleStart } = props;
  const [fontsLoaded] = useFonts({
    DotGothic16: require('../../../assets/fonts/DotGothic16-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={S.container}>
      <TouchableOpacity style={S.button} onPress={handleStart}>
        <Text style={S.buttonTextgmd}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingContainer;
