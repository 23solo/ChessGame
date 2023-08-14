import {
  validDiagonalMove,
  validPawnMove,
  validStraightMove,
} from './validMoves';
import { Piece } from '../Piece';
import { move } from './move';
import { Board } from '../Board';

export const validPieceMove = (move: move, board: Board): boolean => {
  const piece: Piece | undefined =
    board.grid[move.currentI][move.currentJ].piece;
  if (!piece) {
    return false;
  }
  if (piece.name == 'Bishop' || piece.name == 'Queen') {
    if (
      Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)
    ) {
      return validDiagonalMove(board, move);
    }
    return false;
  } else if (piece.name == 'Rook' || piece.name == 'Queen') {
    return validStraightMove(board, move);
  } else if (piece.name == 'Pawn' && piece.color == 'W') {
    if (move.toI == move.currentI - 2) {
      if (move.currentI != 7) {
        return false;
      }
      return validPawnMove(board, move);
    } else if (move.toI == move.currentI + 2) {
      if (move.currentI != 1) {
        return false;
      }
      return validPawnMove(board, move);
    } else if (Math.abs(move.toI - move.currentI) == 1) {
      return true;
    }
    return false;
  } else if (piece.name == 'Knight') {
  } else if (piece.name == 'King') {
  }
  return false;
};
