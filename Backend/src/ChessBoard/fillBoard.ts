import { Board } from '../Board';
import { Piece } from '../Piece';

export const placePawns = (
  board: Board,
  whitePawn: Piece,
  blackPawn: Piece
): void => {
  for (let j = 0; j < 8; j++) {
    board.placePiece(whitePawn, 8 - 2, j);
    board.placePiece(blackPawn, 1, j);
  }
};
export const placeKing = (board: Board, whiteKing: Piece, blackKing: Piece) => {
  board.placePiece(whiteKing, 7, 4);
  board.placePiece(blackKing, 0, 4);
};
export const placeQueen = (
  board: Board,
  whiteQueen: Piece,
  blackQueen: Piece
) => {
  board.placePiece(whiteQueen, 7, 3);
  board.placePiece(blackQueen, 0, 3);
};
export const placeRooks = (
  board: Board,
  whiteRook: Piece,
  blackRook: Piece
) => {
  board.placePiece(whiteRook, 7, 0);
  board.placePiece(whiteRook, 7, 7);
  board.placePiece(blackRook, 0, 0);
  board.placePiece(blackRook, 0, 7);
};
export const placeBishops = (
  board: Board,
  whiteBishop: Piece,
  blackBishop: Piece
) => {
  board.placePiece(whiteBishop, 7, 5);
  board.placePiece(whiteBishop, 7, 2);
  board.placePiece(blackBishop, 0, 5);
  board.placePiece(blackBishop, 0, 2);
};
export const placeKnights = (
  board: Board,
  whiteKnight: Piece,
  blackKnight: Piece
) => {
  board.placePiece(whiteKnight, 7, 1);
  board.placePiece(whiteKnight, 7, 6);
  board.placePiece(blackKnight, 0, 1);
  board.placePiece(blackKnight, 0, 6);
};
