import { Board } from '../Board';
import { Piece } from '../Piece';
import * as fillBoard from './fillBoard';

const board = new Board(8);
const whiteKing = new Piece('W', ' ♔ ', 'King');
const whiteQueen = new Piece('W', ' ♕ ', 'Queen');
const whitePawn = new Piece('W', ' ♟︎ ', 'Pawn');
const whiteBishop = new Piece('W', ' ♝ ', 'Bishop');
const whiteKnight = new Piece('W', ' ♞ ', 'Knight');
const whiteRook = new Piece('W', ' ♜ ', 'Rook');
const blackKing = new Piece('B', ' ♔ ', 'King');
const blackQueen = new Piece('B', ' ♕ ', 'Queen');
const blackPawn = new Piece('B', ' ♟︎ ', 'Pawn');
const blackRook = new Piece('B', ' ♜ ', 'Rook');
const blackBishop = new Piece('B', ' ♝ ', 'Bishop');
const blackKnight = new Piece('B', ' ♞ ', 'Knight');
export const initializeBoard = () => {
  fillBoard.placePawns(board, whitePawn, blackPawn);
  fillBoard.placeRooks(board, whiteRook, blackRook);
  fillBoard.placeKing(board, whiteKing, blackKing);
  fillBoard.placeQueen(board, whiteQueen, blackQueen);
  fillBoard.placeBishops(board, whiteBishop, blackBishop);
  fillBoard.placeKnights(board, whiteKnight, blackKnight);
  board.print();
  return board;
};
