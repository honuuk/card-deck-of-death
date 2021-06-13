import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { CalendarList, DateObject } from 'react-native-calendars';

import { Record } from '../../../../types';
import db from '../../../db';
import S from './style';

const CalendarComponent = () => {
  const [selectedRecord, setSelectedRecord] = useState<Record>({} as Record);

  const records: Record[] = [
    { date: '2021-04-20', result: 'Fail', remainTime: '00:00:00', remainCard: 12 },
    { date: '2021-04-23', result: 'Success', remainTime: '03:21:14', remainCard: 0 },
  ];
  const markedDates = records.reduce(
    (acc, record) => ({
      ...acc,
      [record.date]: {
        marked: true,
        selected: true,
        selectedColor: 'grey',
        dotColor: record.result === 'Success' ? '#1CD8D2' : '#FF0000',
      },
    }),
    {}
  );

  const handleDatePress = (day: DateObject) => {
    setSelectedRecord(records.find((record) => record.date === day.dateString) || ({} as Record));
  };

  const renderResult = (record: Record) => {
    const { result, remainTime, remainCard } = record;
    if (!result) return null;

    return (
      <View style={S.recordTextWrap}>
        <Text style={S.recordText}>결과: {result}</Text>
        <Text style={S.recordText}>남은 시간: {remainTime}</Text>
        <Text style={S.recordText}>남은 카드: {remainCard}</Text>
      </View>
    );
  };

  const fetchData = async () => {
    try {
      const docRef = db.collection('records').doc('IqgMU6li2kiVzcgfqKdu');
      const data = await docRef.get();
      if (data.exists) console.log(data.data());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={S.container}>
      <CalendarList
        horizontal
        pagingEnabled
        markedDates={markedDates}
        onDayPress={handleDatePress}
      />
      <View style={S.record}>{renderResult(selectedRecord)}</View>
    </View>
  );
};

export default CalendarComponent;
