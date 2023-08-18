import {
  validDiagonalMove,
  validKnightMove,
  validPawnMove,
  validStraightMove,
} from './validMoves';
import { Piece } from '../Piece';
import { move } from './move';
import { Board } from '../Board';
import { User } from '../user/User';
import { canKingCastle } from './castle';
import { getMove } from './getMoves';

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

export const validPieceMove = (
  move: move,
  board: Board,
  user: User
): boolean => {
  if (!validateBasicCheck(board, move)) {
    return false;
  }
  const piece: Piece | undefined =
    board.grid[move.currentI][move.currentJ].piece;
  if (!piece) {
    return false;
  }

  if (piece.name == 'Bishop') {
    if (
      Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)
    ) {
      return validDiagonalMove(board, move);
    }
    return false;
  } else if (piece.name == 'Rook') {
    return validStraightMove(board, move);
  } else if (piece.name == 'Queen') {
    if (
      Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)
    ) {
      return validDiagonalMove(board, move);
    }
    return validStraightMove(board, move);
  } else if (piece.name == 'Pawn') {
    if (move.toI == move.currentI - 2) {
      if (move.currentI != 6) {
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

    return validKnightMove(move);
  } else if (piece.name == 'King') {
    let [currentI, currentJ, toI, toJ] = getMove(move);
    if (toI == currentI && Math.abs(currentJ - toJ) == 2) {
      return canKingCastle(board, user, move);
    }
    if (Math.abs(toI - currentI) > 1 || Math.abs(currentJ - toJ) > 1) {
      return false;
    }
    return true;
  }
  return false;
};
