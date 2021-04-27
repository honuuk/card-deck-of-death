import React from 'react';
import { Text, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';

import S from './style';

const CalendarComponent = () => {
  return (
    <View style={S.container}>
      <CalendarList
        horizontal
        pagingEnabled
        markedDates={{
          '2021-04-20': { marked: true, dotColor: 'red' },
        }}
      />
      <View style={S.recordText}>
        <Text>결과: 실패, 남은 카드: 12장</Text>
      </View>
    </View>
  );
};

export default CalendarComponent;
