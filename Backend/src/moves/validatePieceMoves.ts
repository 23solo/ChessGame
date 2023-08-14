import {
  validDiagonalMove,
  validKnightMove,
  validPawnMove,
  validStraightMove,
} from './validMoves';
import { Piece } from '../Piece';
import { move } from './move';
import { Board } from '../Board';

const validateBasicCheck = (board: Board, move: move): boolean => {
  const piece: Piece | undefined =
    board.grid[move.currentI][move.currentJ].piece;
  if (!piece) {
    return false;
  }
  const toPiece: Piece | undefined = board.grid[move.toI][move.toJ].piece;
  if (toPiece) {
    if (toPiece.name == 'King' || toPiece.color == piece.color) {
      return false;
    }
  }
  return true;
};

export const validPieceMove = (move: move, board: Board): boolean => {
  if (!validateBasicCheck(board, move)) {
    return false;
  }
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
  } else if (piece.name == 'Pawn') {
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
    if (
      Math.abs(move.currentI - move.toI) + Math.abs(move.currentJ - move.toJ) !=
      3
    ) {
      return false;
    }
    return validKnightMove(board, move);
  } else if (piece.name == 'King') {
    let currentJ = move.currentJ,
      currentI = move.toI,
      toJ = move.toJ,
      toI = move.toI;
    if (Math.abs(toI - currentI) > 1 || Math.abs(currentJ - toJ) > 1) {
      return false;
    }
    return true;
  }
  return false;
};
