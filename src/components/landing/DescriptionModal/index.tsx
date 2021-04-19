import React from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';

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
        <View style={S.modalViewTextArea}>
          <View style={S.modalViewHeader}>
            <TouchableOpacity style={S.modalViewCloseButton} onPress={() => setIsModalOpen(false)}>
              <Text style={S.modalViewCloseText}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={S.modalViewA}>
            <Text style={S.disclaimerWorkTitle}>카드 스쿼트란?</Text>
            <Text>
              이 운동법은 미국 교도소에서 운동기구 없이 효과적으로 하체운동을 하기 위해 고안된
              방법입니다.{'\n'}카드를 뒤집어 카드의 모양과 숫자에 맞게 운동을 실시하면 됩니다.
            </Text>
          </View>
          <View style={S.modalViewB}>
            <View style={S.workOutType}>
              <Text style={S.disclaimerWork}>
                <Text style={S.disclaimerWorkTitle}>♥ ◇ ♤ ♧는 운동종류를 의미합니다.</Text>
                {'\n'}♥ ◇ : 스쿼트{'\n'}♤ : 왼쪽 런지{'\n'}♧ : 오른쪽 런지
              </Text>
            </View>
            <View style={S.workOutCount}>
              <Text style={S.disclaimerWork}>
                <Text style={S.disclaimerWorkTitle}>숫자는 운동횟수를 의미합니다.</Text>
                {'\n'}2 ~ 10 : 각 숫자만큼 진행
                {'\n'}A, J, Q, K : 11회
              </Text>
            </View>
          </View>
          <Text>ex)</Text>
          <View style={S.modalViewC}>
            <View style={S.example}>
              <Image
                style={S.exampleImage}
                source={require('../../../../static/images/6_of_clubs.png')}
              />
              <Text style={S.exampleText}>왼쪽 런지 6회</Text>
            </View>
            <View style={S.example}>
              <Image
                style={S.exampleImage}
                source={require('../../../../static/images/jack_of_hearts.png')}
              />
              <Text style={S.exampleText}>스쿼트 11회</Text>
            </View>
          </View>
          <Text>* 조커는 스쿼트 11회입니다.</Text>
        </View>
      </View>
    </Modal>
  );
};

export default DescriptionModal;
