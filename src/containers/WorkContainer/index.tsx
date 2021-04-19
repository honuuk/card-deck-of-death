import { useFonts } from '@expo-google-fonts/inter';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';

import { WorkContainerProps } from '../../../types';
import Cards from '../../components/work/Cards';
import Description from '../../components/work/Description';
import Header from '../../components/work/Header';
import Timer from '../../components/work/Timer';
import S from './style';

const WorkContainer = (props: WorkContainerProps) => {
  const { navigation } = props;
  const [cards, setCards] = useState<number[]>([...Array(54)].map((_, i) => i));
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);

  const isEnd = (!!endTime && endTime === time) || !cards.length;

  const generateRandomCard = () => {
    const randomCardIndex = Math.floor(Math.random() * cards.length);
    const nextCard = cards[randomCardIndex];
    return nextCard;
  };

  const handleClear = () => {
    setEndTime(0);
    setTime(0);
    setCards([...Array(54)].map((_, i) => i));
    setSelectedCard(null);
    clearInterval(intervalId);
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

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!endTime || isEnd) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => {
                handleClear();
                navigation.dispatch(e.data.action);
              },
            },
          ]
        );
      }),
    [navigation, isEnd, endTime]
  );

  const [fontsLoaded] = useFonts({
    DotGothic16: require('../../../assets/fonts/DotGothic16-Regular.ttf'),
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
