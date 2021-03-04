import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import { HeaderProps } from '../../../../types';
import S from './style';

const Header = (props: HeaderProps) => {
  const { handleClear } = props;
  return (
    <View style={S.header}>
      <TouchableOpacity style={S.back_arrow} onPress={handleClear}>
        <Image
          style={S.arrow_img}
          source={require('../../../../static/images/prev_arrow.png')}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
