import React from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';

import { DescriptionModalProps } from '../../../../types';
import S from './style';

const DescriptionModal = (props: DescriptionModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  return (
    <Modal
      animationType='fade'
      transparent
      visible={isModalOpen}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
      }}>
      <View style={S.modalViewDimmed}>
        <TouchableOpacity style={S.modalViewTextArea} onPress={() => setIsModalOpen(false)}>
          <Text style={S.modalViewClose}>x</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DescriptionModal;
