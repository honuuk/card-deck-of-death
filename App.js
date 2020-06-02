import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Landing from './components/Landing';
import Work from './components/Work';

export default function App() {
  const [next, setNext] = useState('');
  const [isStart, setIsStart] = useState(false);
  return (
    <View style={styles.container}>
      { isStart
        ? <Work next={next} setNext={setNext} />
        : <Landing handlePress={() => setIsStart(true)} />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
