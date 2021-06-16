import { useFonts } from '@expo-google-fonts/inter';
import * as Application from 'expo-application';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { WorkContainerProps } from '../../../types';
import Cards from '../../components/work/Cards';
import Description from '../../components/work/Description';
import Header from '../../components/work/Header';
import Timer from '../../components/work/Timer';
import db from '../../db';
import { formatTime, getToday } from '../../utils/date';
import S from './style';

const WorkContainer = (props: WorkContainerProps) => {
  const { navigation } = props;
  const [cards, setCards] = useState<number[]>([...Array(54)].map((_, index) => index));
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

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

  const getDeviceUniqueId = async () => {
    const androidId = Application.androidId;
    if (androidId) return androidId;

    const iosId = await Application.getIosIdForVendorAsync();
    return iosId || '';
  };

  const getRecordData = () => {
    const today = getToday();
    const result = cards.length === 0 ? 'Success' : 'Fail';
    const remainTime = formatTime(endTime - time);
    const remainCard = cards.length;
    return { [today]: { result, remainCard, remainTime } };
  };

  const saveRecord = async () => {
    const deviceUniqueId = await getDeviceUniqueId();
    const data = getRecordData();
    const docRef = db.collection('records').doc(deviceUniqueId);
    await docRef.set(data);
  };

  useEffect(() => {
    if (isEnd) {
      clearInterval(intervalId as NodeJS.Timeout);
      saveRecord();
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
        <Timer time={time} endTime={endTime} />
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
        <Text>AD</Text>
      </View>
    </View>
  );
};

export default WorkContainer;
