import React from 'react';
import { Text, View } from 'react-native';

import { TimerProps } from '../../../../types';
import S from './style';

const Timer = (props: TimerProps) => {
  const { endTime, time } = props;

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
  return (
    <View style={S.timer}>
      {!(endTime !== 0 && endTime - time === 0) && (
        <Text style={S.timer_text}>{endTime ? format(endTime - time) : '15:00:00'}</Text>
      )}
    </View>
  );
};

export default Timer;
