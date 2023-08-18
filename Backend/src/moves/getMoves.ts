import { move } from './move';

export const getMove = (move: move) => {
  return [move.currentI, move.currentJ, move.toI, move.toJ];
};
