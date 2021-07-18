import { useFonts } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { LandingContainerProps } from '../../../types';
import DescriptionModal from '../../components/landing/DescriptionModal';
import S from './style';

const LandingContainer = (props: LandingContainerProps) => {
  const { navigation } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Black': require('../../../assets/fonts/NotoSansKR-Black.otf'),
    'NotoSansKR-Bold': require('../../../assets/fonts/NotoSansKR-Bold.otf'),
    'NotoSansKR-Light': require('../../../assets/fonts/NotoSansKR-Light.otf'),
    'NotoSansKR-Medium': require('../../../assets/fonts/NotoSansKR-Medium.otf'),
    'NotoSansKR-Regular': require('../../../assets/fonts/NotoSansKR-Regular.otf'),
    'NotoSansKR-Thin': require('../../../assets/fonts/NotoSansKR-Thin.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={S.container}>
      <DescriptionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        fontLoaded={fontsLoaded}
      />
      <TouchableOpacity style={S.howToIconWrap} onPress={() => setIsModalOpen(true)}>
        <Text style={S.howToIcon}>?</Text>
      </TouchableOpacity>
      <View style={S.TitleWrap}>
        <Animatable.Text style={S.gameTitleCard} animation='bounceIn'>
          Card
        </Animatable.Text>
        <Animatable.Text style={S.gameTitleSquat} animation='bounceIn'>
          Squat
        </Animatable.Text>
        <TouchableOpacity style={S.buttonPlay} onPress={() => navigation.navigate('Work')}>
          <Text style={S.buttonTextgmd}>Play Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.buttonRecord} onPress={() => navigation.navigate('Record')}>
          <Text style={S.buttonTextgmd}>My Records</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingContainer;
