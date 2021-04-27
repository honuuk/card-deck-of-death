import React from 'react';
import { Text, View } from 'react-native';

import CalendarComponent from '../../components/record/Calendar';
import S from './style';

const RecordContainer = () => {
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Text>header</Text>
      </View>
      <View style={S.contents}>
        <CalendarComponent />
      </View>
      <View style={S.ad}>
        <Text>ad</Text>
      </View>
    </View>
  );
};

export default RecordContainer;
