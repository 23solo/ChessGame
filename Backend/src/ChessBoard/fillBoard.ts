import { Board } from '../Board';
import { Piece } from '../Piece';
export const placePawns = (board: Board) => {
  for (let j = 0; j < 8; j++) {
    const whitePawn = new Piece('W', ' ♟︎ ', 'Pawn', [6, j]);
    const blackPawn = new Piece('B', ' ♟︎ ', 'Pawn', [1, j]);
    board.placePiece(whitePawn, 6, j);
    board.placePiece(blackPawn, 1, j);
  }
};
export const placeKing = (board: Board) => {
  const blackKing = new Piece('B', ' ♔ ', 'King', [0, 4]);

  const whiteKing = new Piece('W', ' ♔ ', 'King', [7, 4]);
  board.placePiece(whiteKing, 7, 4);
  board.placePiece(blackKing, 0, 4);
};
export const placeQueen = (board: Board) => {
  const blackQueen = new Piece('B', ' ♕ ', 'Queen', [0, 3]);
  const whiteQueen = new Piece('W', ' ♕ ', 'Queen', [7, 3]);
  board.placePiece(whiteQueen, 7, 3);
  board.placePiece(blackQueen, 0, 3);
};
export const placeRooks = (board: Board) => {
  const whiteRook = new Piece('W', ' ♜ ', 'Rook', [7, 0]);
  const blackRook = new Piece('B', ' ♜ ', 'Rook', [7, 7]);
  const whiteRook1 = new Piece('W', ' ♜ ', 'Rook', [0, 0]);
  const blackRook1 = new Piece('B', ' ♜ ', 'Rook', [0, 7]);
  board.placePiece(whiteRook, 7, 0);
  board.placePiece(whiteRook1, 7, 7);
  board.placePiece(blackRook1, 0, 0);
  board.placePiece(blackRook, 0, 7);
};
export const placeBishops = (board: Board) => {
  const whiteBishop = new Piece('W', ' ♝ ', 'Bishop', [7, 5]);
  const blackBishop = new Piece('B', ' ♝ ', 'Bishop', [0, 5]);
  const whiteBishop1 = new Piece('W', ' ♝ ', 'Bishop', [7, 2]);
  const blackBishop1 = new Piece('B', ' ♝ ', 'Bishop', [0, 2]);

  board.placePiece(whiteBishop, 7, 5);
  board.placePiece(whiteBishop1, 7, 2);
  board.placePiece(blackBishop, 0, 5);
  board.placePiece(blackBishop1, 0, 2);
};
export const placeKnights = (board: Board) => {
  const whiteKnight = new Piece('W', ' ♞ ', 'Knight', [7, 1]);
  const whiteKnight1 = new Piece('W', ' ♞ ', 'Knight', [7, 6]);
  const blackKnight = new Piece('B', ' ♞ ', 'Knight', [0, 1]);
  const blackKnight1 = new Piece('B', ' ♞ ', 'Knight', [0, 6]);
  board.placePiece(whiteKnight, 7, 1);
  board.placePiece(whiteKnight1, 7, 6);
  board.placePiece(blackKnight1, 0, 1);
  board.placePiece(blackKnight, 0, 6);
};
