import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import { HeaderProps } from '../../../types';

const styles = StyleSheet.create({
  header: {
    flex: 1,
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

const Header = (props: HeaderProps) => {
  const { handleClear } = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back_arrow} onPress={handleClear}>
        <Image
          style={styles.arrow_img}
          source={require('../../../public/prev_arrow.png')}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
