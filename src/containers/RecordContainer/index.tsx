import { useFonts } from '@expo-google-fonts/inter';
import { AdMobBanner } from 'expo-ads-admob';
import React from 'react';
import { Platform, View } from 'react-native';

import { RecordContainerProps } from '../../../types';
import CalendarComponent from '../../components/record/Calendar';
import Header from '../../components/work/Header';
import S from './style';

const RecordContainer = ({ navigation }: RecordContainerProps) => {
  const adUnitId = Platform.select({
    ios: 'ca-app-pub-3940256099942544/2934735716',
    android: 'ca-app-pub-3940256099942544/6300978111',
  });

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

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={S.container}>
      <Header handleGoBack={handleGoBack} />
      <View style={S.contents}>
        <CalendarComponent />
      </View>
      <View style={S.ad}>
        <AdMobBanner
          adUnitID={adUnitId}
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(err) => console.log(err)}
        />
      </View>
    </View>
  );
};

export default RecordContainer;
