import React from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';

import { DescriptionModalProps } from '../../../../types';
import S from './style';

const DescriptionModal = (props: DescriptionModalProps) => {
  const { isModalOpen, setIsModalOpen, fontLoaded } = props;

  if (!fontLoaded) return null;

  return (
    <Modal
      animationType='fade'
      transparent
      visible={isModalOpen}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
      }}>
      <TouchableOpacity style={S.modalViewDimmed} onPress={() => setIsModalOpen(false)}>
        <View style={S.modalViewTextArea}>
          <View style={S.modalViewHeader}>
            <View style={S.modalViewCloseButton}>
              <Text style={S.modalViewCloseText}>x</Text>
            </View>
          </View>
          <View style={S.modalViewWrap}>
            <View style={S.modalViewA}>
              <Text style={S.disclaimerWorkTitle}>What is Card Squat?</Text>
              <Text style={S.disclaimerWorkText}>
                This exercise method was designed to effectively exercise the lower body without
                exercise equipment in American prisons. Here's how. Flip the card over and perform
                the exercise according to the card's shape and number.
              </Text>
              <Text style={S.disclaimerWorkTitle}>♥ ◇ ♤ ♧ means exercise type.</Text>
              <Text style={S.disclaimerWorkText}>
                ♥ ◇ : Squat{'\n'}♤ : Left Lunge{'\n'}♧ : Right Lunge
              </Text>
              <Text style={S.disclaimerWorkTitle}>Numbers indicate the number of workouts.</Text>
              <Text style={S.disclaimerWorkText}>
                2 ~ 10 : progress by each number
                {'\n'}A, J, Q, K : 11 times
              </Text>
            </View>
            <View style={S.modalViewC}>
              <View style={S.example}>
                <Image
                  style={S.exampleImage}
                  source={require('../../../../static/images/6_of_clubs.png')}
                />
                <Text style={S.exampleText}>Left Lunge 6 times</Text>
              </View>
              <View style={S.example}>
                <Image
                  style={S.exampleImage}
                  source={require('../../../../static/images/jack_of_hearts.png')}
                />
                <Text style={S.exampleText}>Squat 11 times</Text>
              </View>
            </View>
            <Text style={S.disclaimerJoker}>* The Joker is 11 squats.</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DescriptionModal;
