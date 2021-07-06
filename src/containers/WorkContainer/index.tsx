import { useFonts } from '@expo-google-fonts/inter';
import { AdMobBanner } from 'expo-ads-admob';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';

import { Record, WorkContainerProps } from '../../../types';
import Cards from '../../components/work/Cards';
import Description from '../../components/work/Description';
import Header from '../../components/work/Header';
import Timer from '../../components/work/Timer';
import { formatTime, getToday, timeToInteger } from '../../utils/date';
import { getDeviceCollection } from '../../utils/device';
import S from './style';

const WorkContainer = (props: WorkContainerProps) => {
  const { navigation } = props;
  const [cards, setCards] = useState<number[]>([...Array(54)].map((_, index) => index));
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | number>();

  const adUnitId = Platform.select({
    ios: 'ca-app-pub-3940256099942544/2934735716',
    android: 'ca-app-pub-3940256099942544/6300978111',
  });

  const isEnd = (!!endTime && endTime === time) || cards.length === 0;

  const generateRandomCard = () => {
    const randomCardIndex = Math.floor(Math.random() * cards.length);
    const nextCard = cards[randomCardIndex];
    return nextCard;
  };

  const handleClear = () => {
    setEndTime(0);
    setTime(0);
    setCards([...Array(54)].map((_, index) => index));
    setSelectedCard(null);
    clearInterval(intervalId as NodeJS.Timeout);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../static/audio/button-click.wav')
    );
    await sound.playAsync();
  };

  const startTimer = () => {
    const end = Date.now() + 900000;
    setEndTime(end);
    setIntervalId(
      setInterval(() => {
        setTime(Math.min(Date.now(), end));
      }, 30)
    );
  };

  const handlePressCard = () => {
    playSound();

    if (!endTime) startTimer();

    const randomCard = generateRandomCard();
    setCards((prevCards) => prevCards.filter((c) => c !== randomCard));
    setSelectedCard(randomCard);
  };

  const makeRecord = (): Record => {
    const result = cards.length === 0 ? 'Success' : 'Fail';
    const timeRecord = formatTime(900000 - (endTime - time));
    const remainCard = cards.length;
    return { result, remainCard, timeRecord };
  };

  const compareData = (a: Record, b: Record): Record => {
    if (a.result !== b.result) return a.result === 'Success' ? a : b;
    if (a.result === 'Success')
      return timeToInteger(a.timeRecord) < timeToInteger(b.timeRecord) ? a : b;
    return a.remainCard < b.remainCard ? a : b;
  };

  const checkRecordAndSave = async () => {
    const deviceCollection = await getDeviceCollection();
    const today = getToday();
    const docRef = deviceCollection.doc(today);
    const dbData = (await docRef.get()).data();
    const record = makeRecord();
    const newRecord = dbData ? compareData(record, dbData as Record) : record;
    await docRef.set(newRecord);
  };

  useEffect(() => {
    if (isEnd) {
      clearInterval(intervalId as NodeJS.Timeout);
      checkRecordAndSave();
    }
    navigation.addListener('beforeRemove', () => {
      handleClear();
    });
  }, [isEnd]);

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
      <Header handleGoBack={handleGoBack} />
      <View style={S.content}>
        <Timer isEnd={isEnd} time={time} endTime={endTime} />
        <Cards
          cards={cards}
          isEnd={isEnd}
          selectedCard={selectedCard}
          handlePressCard={handlePressCard}
          navigation={navigation}
        />
        <Description isEnd={isEnd} selectedCard={selectedCard} handleGoBack={handleGoBack} />
      </View>
      <View style={S.footer}>
        <AdMobBanner
          adUnitID={adUnitId}
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(err) => console.log(err)}
        />
      </View>
    </View>
  );
};

export default WorkContainer;
