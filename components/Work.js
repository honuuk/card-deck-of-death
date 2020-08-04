import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Button } from 'react-native-elements';

let cards = [
  [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
  [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
  [10, 10],
  [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
  [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
];
let end = [];
const type = ['스쿼트', '스쿼트', '스쿼트', '왼쪽 런지', '오른쪽 런지'];

const Work = ({ setIsStart }) => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  // const [end, setEnd] = useState([]);
  const handleClear = () => {
    cards = [
      [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
      [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
      [10, 10],
      [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
      [2,3,4,5,6,7,8,9,10,10, 10, 10, 11],
    ];
    setCount(0);
    setNext('');
    setIsStart(false);
  }
  const handleNext = () => {
    if (next === 'Finish!') {
      handleClear();
      return; 
    }
    setCount(count + 1);
    const isEmpty = cards[0].length === 0 && cards[1].length === 0 && cards[2].length === 0 && cards[3].length === 0 && cards[4].length === 0;
    if (isEmpty) setNext('Finish!');
    else {
      let nextType = Math.floor(Math.random() * 6);
      while (nextType >= 5 || end.includes(nextType)) {
        nextType = Math.floor(Math.random() * 6);
      }
      const length = cards[nextType].length;
      let cardIndex = Math.floor(Math.random() * length);
      while (cardIndex >= length) {console.log('hi', cardIndex, length);cardIndex = Math.floor(Math.random() * length);}
      const card = cards[nextType][cardIndex];
      cards[nextType].splice(cardIndex, 1);
      if (cards[nextType].length === 0) {
        end.push(nextType);
      }
      setNext(`${type[nextType]}: ${card}회`);
    }
  };
  return (
    <>
      <View style={styles.header}>
        <Text style={{ color: 'red', fontSize: 18 }} >남은 카드 : {Math.max(54 - count, 0)}</Text>
      </View>
      <View style={styles.content}>
        <Text style={{ color: '#888', fontSize: 40 }} >{next}</Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="next"
          onPress={handleNext}
        />
        <Button
          title="clear"
          onPress={handleClear}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#fff',
    paddingTop: 'auto',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

export default Work;
