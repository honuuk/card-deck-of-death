import { padZero } from './string';

export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
};

export const formatTime = (t: number): string => {
  let leftTime: number = t;
  const min = Math.floor(leftTime / 60000);
  leftTime = leftTime % 60000;
  const sec = Math.floor(leftTime / 1000);
  leftTime = leftTime % 1000;
  const ms = Math.floor(leftTime / 10);

  return [min, sec, ms].map(padZero).join(':');
};

export const timeToInteger = (time: string): number => {
  const [min, sec, ms] = time.split(':').map(parseInt);
  return ms * 10 + sec * 1000 + min * 60000;
};
