import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateObject } from 'react-native-calendars';

import { Record } from '../../../../types';
import { getToday } from '../../../utils/date';
import { getDeviceCollection } from '../../../utils/device';
import S from './style';

const colorMap = {
  Success: '#1CD8D2',
  Fail: '#FF0000',
};

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
          selectedColor: colorMap[record.result],
          dotColor: colorMap[record.result],
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
        <Text style={S.recordTextHeader}>Today's best record</Text>
        <Text style={S.recordText}>
          Result: <Text style={S.recordValue}> {result}</Text>
        </Text>
        <Text style={S.recordText}>
          Remaining time: <Text style={S.recordValue}>{remainTime}</Text>
        </Text>
        <Text style={S.recordText}>
          Remaining card: <Text style={S.recordValue}>{remainCard}</Text>
        </Text>
      </View>
    );
  };

  const fetchData = async () => {
    try {
      const deviceCollection = await getDeviceCollection();
      const snapshot = await deviceCollection.get();
      const data = snapshot.docs.map((doc) => ({ ...(doc.data() as Record), date: doc.id }));
      const todayRecord = data.find((record) => record.date === getToday());
      if (todayRecord) setSelectedRecord(todayRecord);
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
      <Calendar markedDates={makeMarkedDates(records)} onDayPress={handleDatePress} />
      <View
        style={{
          ...S.record,
          backgroundColor: colorMap[selectedRecord.result],
        }}>
        {renderResult(selectedRecord)}
      </View>
    </View>
  );
};

export default CalendarComponent;
