import { Board } from '../Board';
import * as fillBoard from './fillBoard';

const board = new Board(8);

export const initializeBoard = () => {
  fillBoard.placePawns(board);
  fillBoard.placeRooks(board);
  fillBoard.placeKing(board);
  fillBoard.placeQueen(board);
  fillBoard.placeBishops(board);
  fillBoard.placeKnights(board);
  board.print();
  return board;
};
