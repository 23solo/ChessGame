import { Board } from '../Board';
import { Piece } from '../Piece';
import * as fillBoard from './fillBoard';

const board = new Board(8);
const whiteKing = new Piece('White', ' ♔ ', 'King');
const whiteQueen = new Piece('White', ' ♕ ', 'Queen');
const whitePawn = new Piece('White', ' ♟︎ ', 'Pawn');
const whiteBishop = new Piece('White', ' ♝ ', 'Bishop');
const whiteKnight = new Piece('White', ' ♞ ', 'Knight');
const whiteRook = new Piece('White', ' ♜ ', 'Rook');
const blackKing = new Piece('Black', ' ♔ ', 'King');
const blackQueen = new Piece('Black', ' ♕ ', 'Queen');
const blackPawn = new Piece('Black', ' ♟︎ ', 'Pawn');
const blackRook = new Piece('Black', ' ♜ ', 'Rook');
const blackBishop = new Piece('Black', ' ♝ ', 'Bishop');
const blackKnight = new Piece('Black', ' ♞ ', 'Knight');
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
