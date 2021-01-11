import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CardType, WorkContainerProps } from '../../types';
import Cards from '../components/work/Cards';
import Description from '../components/work/Description';
import Header from '../components/work/Header';
import Timer from '../components/work/Timer';

const clubs10 = require('../../static/images/10_of_clubs.png');
const diamonds10 = require('../../static/images/10_of_diamonds.png');
const hearts10 = require('../../static/images/10_of_hearts.png');
const spades10 = require('../../static/images/10_of_spades.png');
const clubs2 = require('../../static/images/2_of_clubs.png');
const diamonds2 = require('../../static/images/2_of_diamonds.png');
const hearts2 = require('../../static/images/2_of_hearts.png');
const spades2 = require('../../static/images/2_of_spades.png');
const clubs3 = require('../../static/images/3_of_clubs.png');
const diamonds3 = require('../../static/images/3_of_diamonds.png');
const hearts3 = require('../../static/images/3_of_hearts.png');
const spades3 = require('../../static/images/3_of_spades.png');
const clubs4 = require('../../static/images/4_of_clubs.png');
const diamonds4 = require('../../static/images/4_of_diamonds.png');
const hearts4 = require('../../static/images/4_of_hearts.png');
const spades4 = require('../../static/images/4_of_spades.png');
const clubs5 = require('../../static/images/5_of_clubs.png');
const diamonds5 = require('../../static/images/5_of_diamonds.png');
const hearts5 = require('../../static/images/5_of_hearts.png');
const spades5 = require('../../static/images/5_of_spades.png');
const clubs6 = require('../../static/images/6_of_clubs.png');
const diamonds6 = require('../../static/images/6_of_diamonds.png');
const hearts6 = require('../../static/images/6_of_hearts.png');
const spades6 = require('../../static/images/6_of_spades.png');
const clubs7 = require('../../static/images/7_of_clubs.png');
const diamonds7 = require('../../static/images/7_of_diamonds.png');
const hearts7 = require('../../static/images/7_of_hearts.png');
const spades7 = require('../../static/images/7_of_spades.png');
const clubs8 = require('../../static/images/8_of_clubs.png');
const diamonds8 = require('../../static/images/8_of_diamonds.png');
const hearts8 = require('../../static/images/8_of_hearts.png');
const spades8 = require('../../static/images/8_of_spades.png');
const clubs9 = require('../../static/images/9_of_clubs.png');
const diamonds9 = require('../../static/images/9_of_diamonds.png');
const hearts9 = require('../../static/images/9_of_hearts.png');
const spades9 = require('../../static/images/9_of_spades.png');
const clubsA = require('../../static/images/ace_of_clubs.png');
const diamondsA = require('../../static/images/ace_of_diamonds.png');
const heartsA = require('../../static/images/ace_of_hearts.png');
const spadesA = require('../../static/images/ace_of_spades2.png');
const jokerB = require('../../static/images/black_joker.png');
const back = require('../../static/images/card_back.png');
const clubsJ = require('../../static/images/jack_of_clubs2.png');
const diamondsJ = require('../../static/images/jack_of_diamonds2.png');
const heartsJ = require('../../static/images/jack_of_hearts2.png');
const spadesJ = require('../../static/images/jack_of_spades2.png');
const clubsK = require('../../static/images/king_of_clubs2.png');
const diamondsK = require('../../static/images/king_of_diamonds2.png');
const heartsK = require('../../static/images/king_of_hearts2.png');
const spadesK = require('../../static/images/king_of_spades2.png');
const clubsQ = require('../../static/images/queen_of_clubs2.png');
const diamondsQ = require('../../static/images/queen_of_diamonds2.png');
const heartsQ = require('../../static/images/queen_of_hearts2.png');
const spadesQ = require('../../static/images/queen_of_spades2.png');
const jokerR = require('../../static/images/red_joker.png');

const imageMap = {
  [CardType.back]: back,
  [CardType.spadesA]: spadesA,
  [CardType.spades2]: spades2,
  [CardType.spades3]: spades3,
  [CardType.spades4]: spades4,
  [CardType.spades5]: spades5,
  [CardType.spades6]: spades6,
  [CardType.spades7]: spades7,
  [CardType.spades8]: spades8,
  [CardType.spades9]: spades9,
  [CardType.spades10]: spades10,
  [CardType.spadesJ]: spadesJ,
  [CardType.spadesQ]: spadesQ,
  [CardType.spadesK]: spadesK,
  [CardType.clubsA]: clubsA,
  [CardType.clubs2]: clubs2,
  [CardType.clubs3]: clubs3,
  [CardType.clubs4]: clubs4,
  [CardType.clubs5]: clubs5,
  [CardType.clubs6]: clubs6,
  [CardType.clubs7]: clubs7,
  [CardType.clubs8]: clubs8,
  [CardType.clubs9]: clubs9,
  [CardType.clubs10]: clubs10,
  [CardType.clubsJ]: clubsJ,
  [CardType.clubsQ]: clubsQ,
  [CardType.clubsK]: clubsK,
  [CardType.heartsA]: heartsA,
  [CardType.hearts2]: hearts2,
  [CardType.hearts3]: hearts3,
  [CardType.hearts4]: hearts4,
  [CardType.hearts5]: hearts5,
  [CardType.hearts6]: hearts6,
  [CardType.hearts7]: hearts7,
  [CardType.hearts8]: hearts8,
  [CardType.hearts9]: hearts9,
  [CardType.hearts10]: hearts10,
  [CardType.heartsJ]: heartsJ,
  [CardType.heartsQ]: heartsQ,
  [CardType.heartsK]: heartsK,
  [CardType.diamondsA]: diamondsA,
  [CardType.diamonds2]: diamonds2,
  [CardType.diamonds3]: diamonds3,
  [CardType.diamonds4]: diamonds4,
  [CardType.diamonds5]: diamonds5,
  [CardType.diamonds6]: diamonds6,
  [CardType.diamonds7]: diamonds7,
  [CardType.diamonds8]: diamonds8,
  [CardType.diamonds9]: diamonds9,
  [CardType.diamonds10]: diamonds10,
  [CardType.diamondsJ]: diamondsJ,
  [CardType.diamondsQ]: diamondsQ,
  [CardType.diamondsK]: diamondsK,
  [CardType.jokerB]: jokerB,
  [CardType.jokerR]: jokerR,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 5,
    alignItems: 'center',
  },
  timer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer_text: {
    width: 235,
    fontSize: 50,
    color: '#1c4abd',
    fontWeight: '800',
    textShadowColor: '#cdcdcd',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
  },
  card_wrap: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf1d2',
  },
  result: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
    fontSize: 60,
    fontWeight: '800',
    color: 'red',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
    transform: [{ rotate: '-15deg' }],
  },
  action_name: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action_name_text: {
    fontSize: 50,
    fontWeight: '800',
    color: '#ff802b',
    textAlign: 'center',
    textShadowColor: '#1c4abd',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
  },
  return_to_start: {
    width: 170,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    borderBottomWidth: 0,
    shadowColor: '#acacac',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  return_to_start_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  footer: {
    height: 70,
  },
  back_arrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  arrow_img: {
    flex: 1,
    width: '30%',
    top: '10%',
  },
});

const WorkContainer = (props: WorkContainerProps) => {
  const { handleReset } = props;
  const [cards, setCards] = useState<number[]>([...Array(54)].map((_, i) => i));
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
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
    handleReset();
    clearInterval(intervalId);
  };

  const handlePressCard = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../static/audio/button-click.wav'));
    await sound.playAsync();
    if (!endTime) {
      const end = Date.now() + 900000;
      setEndTime(end);
      // setTime(Date.now());
      setIntervalId(
        setInterval(() => {
          setTime(Math.min(Date.now(), end));
        }, 30)
      );
    }
    const randomCard = generateRandomCard() as number;
    setCards((prevCards) => prevCards.filter((c) => c !== randomCard));
    setSelectedCard(randomCard);
  };

  useEffect(() => {
    if (!cards.length) clearInterval(intervalId);
  }, [cards, intervalId]);

  return (
    <View style={styles.container}>
      <Header handleClear={handleClear} />
      <View style={styles.content}>
        <Timer time={time} endTime={endTime} />
        <Cards
          cards={cards}
          isEnd={isEnd}
          imageMap={imageMap}
          selectedCard={selectedCard}
          handlePressCard={handlePressCard}
        />
        <Description isEnd={isEnd} selectedCard={selectedCard} handleClear={handleClear} />
      </View>
      <View style={styles.footer}>
        <Text>AD</Text>
      </View>
    </View>
  );
};

export default WorkContainer;
