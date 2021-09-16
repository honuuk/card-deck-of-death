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
      <TouchableOpacity
        style={S.modalViewDimmed}
        activeOpacity={1}
        onPress={() => setIsModalOpen(false)}>
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
              <Text style={S.disclaimerWorkTitle}>
                <Image style={S.cardIcon} source={require('../../../../static/images/heart.png')} />
                <Image
                  style={S.cardIcon}
                  source={require('../../../../static/images/diamond.png')}
                />
                <Image style={S.cardIcon} source={require('../../../../static/images/spade.png')} />
                <Image style={S.cardIcon} source={require('../../../../static/images/club.png')} />
                {/* ♥ ◇ ♤ ♧  */}
                means types of workout.
              </Text>
              <Text style={S.disclaimerWorkText}>
                <Image
                  style={S.cardIconSmall}
                  source={require('../../../../static/images/heart.png')}
                />
                <Image
                  style={S.cardIconSmall}
                  source={require('../../../../static/images/diamond.png')}
                />
                : Squat
              </Text>
              <Text style={S.disclaimerWorkText}>
                <Image
                  style={S.cardIconSmall}
                  source={require('../../../../static/images/spade.png')}
                />
                : Left Lunge
              </Text>
              <Text style={S.disclaimerWorkText}>
                <Image
                  style={S.cardIconSmall}
                  source={require('../../../../static/images/club.png')}
                />
                : Right Lunge
              </Text>
              <Text style={S.disclaimerWorkTitle}>
                Numbers on the card indicates the number of workouts.
              </Text>
              <Text style={S.disclaimerWorkText}>2 ~ 10 : perform per number</Text>
              <Text style={S.disclaimerWorkText}>A, J, Q, K : 11 times</Text>
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
