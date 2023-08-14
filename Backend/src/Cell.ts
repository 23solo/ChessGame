import { Piece } from './Piece';

export type Cell = {
  color: string;
  position?: [number, number];
  piece?: Piece;
};
