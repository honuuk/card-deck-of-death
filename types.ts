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
  imageMap: any;
  selectedCard: CardType | null;
  handlePressCard: EventHandler;
}

export interface CardProps {
  source: any;
  handlePress?: EventHandler;
}

export interface DescriptionProps {
  isEnd: boolean;
  selectedCard: CardType | null;
  handleClear: EventHandler;
}

export enum CardType {
  spadesA,
  spades2,
  spades3,
  spades4,
  spades5,
  spades6,
  spades7,
  spades8,
  spades9,
  spades10,
  spadesJ,
  spadesQ,
  spadesK,
  clubsA,
  clubs2,
  clubs3,
  clubs4,
  clubs5,
  clubs6,
  clubs7,
  clubs8,
  clubs9,
  clubs10,
  clubsJ,
  clubsQ,
  clubsK,
  diamondsA,
  diamonds2,
  diamonds3,
  diamonds4,
  diamonds5,
  diamonds6,
  diamonds7,
  diamonds8,
  diamonds9,
  diamonds10,
  diamondsJ,
  diamondsQ,
  diamondsK,
  heartsA,
  hearts2,
  hearts3,
  hearts4,
  hearts5,
  hearts6,
  hearts7,
  hearts8,
  hearts9,
  hearts10,
  heartsJ,
  heartsQ,
  heartsK,
  jokerR,
  jokerB,
  back,
}
