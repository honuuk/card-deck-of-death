import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Landing from './components/Landing';
import Work from './components/Work';
import { EventHandler } from './types';

export default function App() {
  const [isStart, setIsStart] = useState(false);

  const handleStart: EventHandler = () => setIsStart(true);
  const handleReset: EventHandler = () => setIsStart(false);

  return (
    <View style={styles.container}>
      {isStart ? <Work handleReset={handleReset} /> : <Landing handleStart={handleStart} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
