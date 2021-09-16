import { Audio } from 'expo-av';

export const playClickSound = async () => {
  const { sound } = await Audio.Sound.createAsync(require('../../static/audio/click.wav'));
  await sound.playAsync();
};

export const playCardClickSound = async () => {
  const { sound } = await Audio.Sound.createAsync(require('../../static/audio/card-click.wav'));
  await sound.playAsync();
};
