import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import { CardType, WorkProps } from '../types';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 7,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  timer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  timer_text: {
    fontSize: 40,
    textAlign: 'center',
  },
  card_wrap: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  action_name: {
    flex: 1,
    width: '100%',
    backgroundColor: 'orange',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
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

const cardSet = [
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  [10, 10],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
];

const end = [];
const type = ['스쿼트', '스쿼트', '스쿼트', '왼쪽 런지', '오른쪽 런지'];

const Work = (props: WorkProps) => {
  const { handleReset } = props;
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(cardSet);
  const [next, setNext] = useState('');
  // const [end, setEnd] = useState([]);
  const handleClear = () => {
    setCards(cardSet);
    setCount(0);
    setNext('');
    handleReset();
  };
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
          <Text style={styles.timer_text}>00:00:00</Text>
        </View>
        <View style={styles.card_wrap}>
          <Card selectedCard={CardType.back} />
          <Card selectedCard={CardType.spadeA} />
        </View>
        <View style={styles.action_name}>
          <Text>molar</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>AD</Text>
      </View>
    </View>
  );
};

export default Work;
