import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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

const Work = (props: WorkProps) => {
  const { handleReset } = props;
  const [endTime, setEndTime] = useState(0);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  const handleClear = () => {
    setCount(0);
    setEndTime(0);
    setTime(0);
    handleReset();
  };

  const startTimer = () => {
    if (endTime) return;
    setEndTime(Date.now() + 900000);
    setTime(Date.now());
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const padZero = (t: number) => {
    const stringNum = t.toString();
    return stringNum.length === 1 ? '0' + stringNum : stringNum;
  };

  const makeTime = (t: number) => {
    let leftTime: number = t;
    const min = Math.floor(leftTime / 60000);
    leftTime = leftTime % 60000;
    const sec = Math.floor(leftTime / 1000);
    leftTime = leftTime % 1000;
    const ms = Math.floor(leftTime / 10);

    return [min, sec, ms].map(padZero).join(':');
  };

  useEffect(() => {
    if (time !== 0) {
      const timer = setInterval(() => {
        setTime(Date.now());
      }, 30);
      return () => clearInterval(timer);
    }
  }, [time]);

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
          <Text style={styles.timer_text}>{endTime ? makeTime(endTime - time) : '15:00:00'}</Text>
        </View>
        <View style={styles.card_wrap}>
          <Card selectedCard={CardType.back} startTimer={startTimer} addCount={addCount} />
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
