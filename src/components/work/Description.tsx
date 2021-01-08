import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DescriptionProps } from '../../../types';

const styles = StyleSheet.create({
  action_name: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action_name_text: {
    fontSize: 50,
    fontWeight: '800',
    color: '#ff802b',
    textAlign: 'center',
    textShadowColor: '#1c4abd',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
  },
  return_to_start: {
    width: 170,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    borderBottomWidth: 0,
    shadowColor: '#acacac',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  return_to_start_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

const Description = (props: DescriptionProps) => {
  const { isEnd, selectedCard, handleClear } = props;

  const getDescription = (card: number) => {
    const types = ['Squat', 'Squat', 'Left lunge', 'Right lunge'];
    const typeIndex = Math.floor(card / 13);
    const times = Math.min((card % 13) + 1, 11);

    if (typeIndex === 4) return 'Squat 11 times';
    return `${types[typeIndex]} ${times === 1 ? 11 : times} times`;
  };

  return (
    <View style={styles.action_name}>
      {isEnd ? (
        <TouchableOpacity style={styles.return_to_start} onPress={handleClear}>
          <Text style={styles.return_to_start_text}>return to start</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.action_name_text}>
          {selectedCard !== null && getDescription(selectedCard)}
        </Text>
      )}
    </View>
  );
};

export default Description;
