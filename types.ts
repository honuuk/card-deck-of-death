import { StackNavigationProp } from '@react-navigation/stack';

export type EventHandler = () => void;

export type RootStackParamList = {
  Landing: undefined;
  Work: undefined;
  Record: undefined;
};

export type LandingContainerProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Landing'>;
};

export type DescriptionModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type WorkContainerProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Work'>;
};

export interface HeaderProps {
  handleGoBack: EventHandler;
}

export interface TimerProps {
  time: number;
  endTime: number;
}

export interface CardsProps {
  isEnd: boolean;
  cards: number[];
  selectedCard: number | null;
  navigation: StackNavigationProp<RootStackParamList, 'Work'>;
  handlePressCard: EventHandler;
}

export interface CardProps {
  source: any;
  handlePress?: EventHandler;
}

export interface DescriptionProps {
  isEnd: boolean;
  selectedCard: number | null;
  handleGoBack: EventHandler;
}

export interface ResultProps {
  type: 'Success' | 'Fail';
  navigation: StackNavigationProp<RootStackParamList, 'Work'>;
}
