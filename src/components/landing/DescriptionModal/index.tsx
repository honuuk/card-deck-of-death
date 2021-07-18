import React from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';

import { DescriptionModalProps } from '../../../../types';
import S from './style';

const DescriptionModal = (props: DescriptionModalProps) => {
  const { isModalOpen, setIsModalOpen, fontLoaded } = props;

  if (!fontLoaded) return null;

  return (
    <Modal
      transparent
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)}>
      <TouchableOpacity activeOpacity={1} style={S.modalViewDimmed} onPress={() => setIsModalOpen(false)}>
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
                This workout was used in American prisons to exercise the lower body effectively
                without any equipment. To start, flip the card over and perform according to the
                card's shape and number.
              </Text>
              <Text style={S.disclaimerWorkTitle}>♥ ◇ ♤ ♧ means types of workout.</Text>
              <Text style={S.disclaimerWorkText}>
                ♥ ◇ : Squat{'\n'}♤ : Left Lunge{'\n'}♧ : Right Lunge
              </Text>
              <Text style={S.disclaimerWorkTitle}>
                Numbers on the card indicates the number of workouts.
              </Text>
              <Text style={S.disclaimerWorkText}>
                2 ~ 10 : perform per number
                {'\n'}A, J, Q, K : 11 times
              </Text>
            </View>
            <View style={S.modalViewC}>
              <View style={S.example}>
                <Image
                  style={S.exampleImage}
                  source={require('../../../../static/images/6_of_clubs.png')}
                />
                <Text style={S.exampleText}>6 times of left lunges</Text>
              </View>
              <View style={S.example}>
                <Image
                  style={S.exampleImage}
                  source={require('../../../../static/images/jack_of_hearts.png')}
                />
                <Text style={S.exampleText}>11 times of squats</Text>
              </View>
            </View>
            <Text style={S.disclaimerJoker}>* Joker means 11 times of squats</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DescriptionModal;
