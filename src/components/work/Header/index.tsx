import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import { HeaderProps } from '../../../../types';
import S from './style';

const Header = (props: HeaderProps) => {
  const { handleGoBack } = props;
  return (
    <View style={S.header}>
      <TouchableOpacity style={S.back_arrow} onPress={handleGoBack}>
        <Image
          style={S.arrow_img}
          source={require('../../../../static/images/prev_arrow.png')}
          resizeMode='contain'
        />
        <Text style={S.back_text}>back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
