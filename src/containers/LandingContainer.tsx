import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import { LandingProps } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LandingContainer = (props: LandingProps) => {
  const { handleStart } = props;
  return (
    <View style={styles.container}>
      <Button title="Let's work out!" onPress={handleStart} />
    </View>
  );
};

export default LandingContainer;
