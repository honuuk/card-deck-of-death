export type EventHandler = () => void;

export interface LandingProps {
  handleStart: EventHandler;
}

export interface WorkProps {
  handleReset: EventHandler;
}

export interface CardProps {
  selectedCard: CardType;
  startTimer?: EventHandler;
  addCount?: EventHandler;
}

export enum CardType {
  spadeA,
  spade2,
  spade3,
  spade4,
  spade5,
  spade6,
  spade7,
  spade8,
  spade9,
  spade10,
  spadeJ,
  spadeQ,
  spadeK,
  back,
}
