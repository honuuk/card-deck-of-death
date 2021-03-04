export type EventHandler = () => void;

export interface LandingProps {
  handleStart: EventHandler;
}

export interface WorkContainerProps {
  handleReset: EventHandler;
}

export interface HeaderProps {
  handleClear: EventHandler;
}

export interface TimerProps {
  time: number;
  endTime: number;
}

export interface CardsProps {
  isEnd: boolean;
  cards: number[];
  selectedCard: number | null;
  handlePressCard: EventHandler;
}

export interface CardProps {
  source: any;
  handlePress?: EventHandler;
}

export interface DescriptionProps {
  isEnd: boolean;
  selectedCard: number | null;
  handleClear: EventHandler;
}
