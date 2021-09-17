import { useFonts } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { LandingContainerProps } from '../../../types';
import DescriptionModal from '../../components/landing/DescriptionModal';
import { playClickSound } from '../../utils/playSound';
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

  const handleButtonPress = (component: 'Work' | 'Record') => () => {
    playClickSound();
    navigation.navigate(component);
  };

  const handleDescriptionPress = () => {
    playClickSound();
    setIsModalOpen(true);
  };

  return (
    <View style={S.container}>
      <DescriptionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        fontLoaded={fontsLoaded}
      />
      <TouchableOpacity style={S.howToIconWrap} onPress={handleDescriptionPress}>
        <Text style={S.howToIcon}>?</Text>
      </TouchableOpacity>
      <View style={S.emptySpace} />
      <View style={S.titleWrap}>
        <Animatable.Text style={S.gameTitleCard} animation='bounceIn'>
          Card
        </Animatable.Text>
        <Animatable.Text style={S.gameTitleSquat} animation='bounceIn'>
          Squat
        </Animatable.Text>
      </View>
      <TouchableOpacity style={S.playButton} onPress={handleButtonPress('Work')}>
        <Text style={S.playButtonTextgmd}>Play Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={S.recordButton} onPress={handleButtonPress('Record')}>
        <Text style={S.recordButtonTextgmd}>My Records</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingContainer;
