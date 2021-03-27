import { useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { LandingContainerProps } from '../../../types';
import S from './style';

const LandingContainer = (props: LandingContainerProps) => {
  const { navigation } = props;
  const [fontsLoaded] = useFonts({
    DotGothic16: require('../../../assets/fonts/DotGothic16-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={S.container}>
      <TouchableOpacity style={S.button} onPress={() => navigation.navigate('Work')}>
        <Text style={S.buttonTextgmd}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingContainer;
