import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { CardType, WorkProps } from '../types';
import Card from './Card';

const clubs10 = require('../public/10_of_clubs.png');
const diamonds10 = require('../public/10_of_diamonds.png');
const hearts10 = require('../public/10_of_hearts.png');
const spades10 = require('../public/10_of_spades.png');
const clubs2 = require('../public/2_of_clubs.png');
const diamonds2 = require('../public/2_of_diamonds.png');
const hearts2 = require('../public/2_of_hearts.png');
const spades2 = require('../public/2_of_spades.png');
const clubs3 = require('../public/3_of_clubs.png');
const diamonds3 = require('../public/3_of_diamonds.png');
const hearts3 = require('../public/3_of_hearts.png');
const spades3 = require('../public/3_of_spades.png');
const clubs4 = require('../public/4_of_clubs.png');
const diamonds4 = require('../public/4_of_diamonds.png');
const hearts4 = require('../public/4_of_hearts.png');
const spades4 = require('../public/4_of_spades.png');
const clubs5 = require('../public/5_of_clubs.png');
const diamonds5 = require('../public/5_of_diamonds.png');
const hearts5 = require('../public/5_of_hearts.png');
const spades5 = require('../public/5_of_spades.png');
const clubs6 = require('../public/6_of_clubs.png');
const diamonds6 = require('../public/6_of_diamonds.png');
const hearts6 = require('../public/6_of_hearts.png');
const spades6 = require('../public/6_of_spades.png');
const clubs7 = require('../public/7_of_clubs.png');
const diamonds7 = require('../public/7_of_diamonds.png');
const hearts7 = require('../public/7_of_hearts.png');
const spades7 = require('../public/7_of_spades.png');
const clubs8 = require('../public/8_of_clubs.png');
const diamonds8 = require('../public/8_of_diamonds.png');
const hearts8 = require('../public/8_of_hearts.png');
const spades8 = require('../public/8_of_spades.png');
const clubs9 = require('../public/9_of_clubs.png');
const diamonds9 = require('../public/9_of_diamonds.png');
const hearts9 = require('../public/9_of_hearts.png');
const spades9 = require('../public/9_of_spades.png');
const clubsA = require('../public/ace_of_clubs.png');
const diamondsA = require('../public/ace_of_diamonds.png');
const heartsA = require('../public/ace_of_hearts.png');
const spadesA = require('../public/ace_of_spades2.png');
const jokerB = require('../public/black_joker.png');
const back = require('../public/card_back.png');
const clubsJ = require('../public/jack_of_clubs2.png');
const diamondsJ = require('../public/jack_of_diamonds2.png');
const heartsJ = require('../public/jack_of_hearts2.png');
const spadesJ = require('../public/jack_of_spades2.png');
const clubsK = require('../public/king_of_clubs2.png');
const diamondsK = require('../public/king_of_diamonds2.png');
const heartsK = require('../public/king_of_hearts2.png');
const spadesK = require('../public/king_of_spades2.png');
const clubsQ = require('../public/queen_of_clubs2.png');
const diamondsQ = require('../public/queen_of_diamonds2.png');
const heartsQ = require('../public/queen_of_hearts2.png');
const spadesQ = require('../public/queen_of_spades2.png');
const jokerR = require('../public/red_joker.png');

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

const Work = (props: WorkProps) => {
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

  const padZero = (t: number) => {
    const stringNum = t.toString();
    return ('0' + stringNum).slice(-2);
  };

  const format = (t: number) => {
    let leftTime: number = t;
    const min = Math.floor(leftTime / 60000);
    leftTime = leftTime % 60000;
    const sec = Math.floor(leftTime / 1000);
    leftTime = leftTime % 1000;
    const ms = Math.floor(leftTime / 10);

    return [min, sec, ms].map(padZero).join(':');
  };

  const getDescription = (card: number) => {
    const types = ['Squat', 'Squat', 'Left lunge', 'Right lunge'];
    const typeIndex = Math.floor(card / 13);
    const times = Math.min((card % 13) + 1, 11);

    if (typeIndex === 4) return 'Squat 11 times';
    return `${types[typeIndex]} ${times === 1 ? 11 : times} times`;
  };

  const handleClear = () => {
    setEndTime(0);
    setTime(0);
    setCards([...Array(54)].map((_, i) => i));
    setSelectedCard(null);
    handleReset();
    clearInterval(intervalId);
  };

  const handlePressCard = () => {
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
      <View style={styles.header}>
        <TouchableOpacity style={styles.back_arrow} onPress={handleClear}>
          <Image
            style={styles.arrow_img}
            source={require('../public/prev_arrow.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.timer}>
          {!(endTime !== 0 && endTime - time === 0) && (
            <Text style={styles.timer_text}>{endTime ? format(endTime - time) : '15:00:00'}</Text>
          )}
        </View>
        <View style={styles.card_wrap}>
          {isEnd ? (
            <Text style={styles.result}>{cards.length ? 'Fail' : 'Success'}</Text>
          ) : (
            <>
              <Card
                source={cards.length && imageMap[CardType.back]}
                handlePress={handlePressCard}
              />
              <Card source={selectedCard !== null && imageMap[selectedCard]} />
            </>
          )}
        </View>
        <View style={styles.action_name}>
          {isEnd ? (
            <TouchableOpacity style={styles.return_to_start} onPress={handleClear}>
              <Text style={styles.return_to_start_text}>return to start</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.action_name_text}>
              {selectedCard !== null && getDescription(selectedCard)}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <Text>AD</Text>
      </View>
    </View>
  );
};

export default Work;
