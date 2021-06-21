import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { CalendarList, DateObject } from 'react-native-calendars';

import { Record } from '../../../../types';
import { getDeviceCollection } from '../../../utils/device';
import S from './style';

const CalendarComponent = () => {
  const [selectedRecord, setSelectedRecord] = useState<Record>({} as Record);
  const [records, setRecords] = useState<Record[]>([]);

  const makeMarkedDates = (records: Record[]) => {
    return records.reduce(
      (acc, record) => ({
        ...acc,
        [record.date as string]: {
          marked: true,
          selected: selectedRecord.date === record.date,
          selectedColor: selectedRecord.result === 'Success' ? '#1CD8D2' : '#FF0000',
          dotColor: record.result === 'Success' ? '#1CD8D2' : '#FF0000',
        },
      }),
      {}
    );
  };

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
      const deviceCollection = await getDeviceCollection();
      const snapshot = await deviceCollection.get();
      const data = snapshot.docs.map((doc) => ({ ...(doc.data() as Record), date: doc.id }));
      setRecords(data);
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
        markedDates={makeMarkedDates(records)}
        onDayPress={handleDatePress}
      />
      <View
        style={{
          ...S.record,
          backgroundColor: selectedRecord.result === 'Success' ? '#1CD8D2' : '#FF0000',
        }}>
        {renderResult(selectedRecord)}
      </View>
    </View>
  );
};

export default CalendarComponent;
