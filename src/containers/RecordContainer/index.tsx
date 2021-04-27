import React from 'react';
import { Text, View } from 'react-native';

import S from './style';

const RecordContainer = () => {
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Text>header</Text>
      </View>
      <View style={S.contents}>
        <Text>contents</Text>
      </View>
      <View style={S.ad}>
        <Text>ad</Text>
      </View>
    </View>
  );
};

export default RecordContainer;
