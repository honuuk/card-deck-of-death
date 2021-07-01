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
  fontLoaded: boolean;
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
  isEnd: boolean;
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

export interface RecordContainerProps {
  navigation: StackNavigationProp<RootStackParamList, 'Record'>;
}

export interface ResultProps {
  type: 'Success' | 'Fail';
  navigation: StackNavigationProp<RootStackParamList, 'Work'>;
}

export interface Record {
  date?: string;
  result: 'Success' | 'Fail';
  timeRecord: string;
  remainCard: number;
}
