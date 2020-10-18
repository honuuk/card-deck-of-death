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
    setEndTime(Date.now() + 5000);
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
        setTime(Math.min(Date.now(), endTime));
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
          {!(endTime !== 0 && endTime - time === 0) && (
            <Text style={styles.timer_text}>{endTime ? makeTime(endTime - time) : '15:00:00'}</Text>
          )}
        </View>
        <View style={styles.card_wrap}>
          {endTime !== 0 && endTime - time === 0 ? (
            <Text style={styles.result}>Fail</Text>
          ) : (
            <>
              <Card selectedCard={CardType.back} startTimer={startTimer} addCount={addCount} />
              <Card selectedCard={CardType.spadeK} />
            </>
          )}
        </View>
        <View style={styles.action_name}>
          {!(endTime !== 0 && endTime - time === 0) ? (
            <Text style={styles.action_name_text}>Squat 3 times</Text>
          ) : (
            <TouchableOpacity style={styles.return_to_start} onPress={handleClear}>
              <Text style={styles.return_to_start_text}>return to start</Text>
            </TouchableOpacity>
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
