import { Board } from '../Board';
import { Piece } from '../Piece';
import { User } from '../user/User';
import { getMove } from './getMoves';
import { isKingInCheck } from './kingCheck';
import { move } from './move';
import { validStraightMove } from './validMoves';

export const updateCastle = (user: User, move: move) => {
  if (user.color == 'W') {
    // if it's a rook
    if (move.currentI == 7 && move.currentJ == 0 && user.canCastleLeft) {
      user.canCastleLeft = false;
    } else if (
      move.currentI == 7 &&
      move.currentJ == 7 &&
      user.canCastleRight
    ) {
      user.canCastleRight = false;
    } else if (
      move.currentI == 7 &&
      move.currentJ == 4 &&
      (user.canCastleLeft || user.canCastleRight)
    ) {
      user.canCastleLeft = false;
      user.canCastleRight = false;
    }
  } else {
    console.log(move.currentI, move.currentJ);
    if (move.currentI == 0 && move.currentJ == 0 && user.canCastleLeft) {
      user.canCastleLeft = false;
    } else if (
      move.currentI == 0 &&
      move.currentJ == 7 &&
      user.canCastleRight
    ) {
      user.canCastleRight = false;
    } else if (
      move.currentI == 0 &&
      move.currentJ == 4 &&
      (user.canCastleLeft || user.canCastleRight)
    ) {
      user.canCastleLeft = false;
      user.canCastleRight = false;
    }
  }
  return;
};

const checkCastle = (
  user: User,
  board: Board,
  move: move,
  j: number,
  castleNumber: number
): boolean => {
  let i = move.currentI;
  const actualToJ = move.toJ;
  const piece: Piece | undefined = board.grid[i][j].piece;
  if (piece && piece.name == 'Rook' && piece.color == user.color) {
    move.toJ = move.currentJ + castleNumber;
    board.updatePiece(move, user);

    if (isKingInCheck(board, user)) {
      // revert the change and return false;
      board.updatePiece(move, user, true);
      return false;
    } else {
      move.toJ = actualToJ;
      move.currentJ += castleNumber;
      board.updatePiece(move, user);
      if (isKingInCheck(board, user)) {
        // revert the change and return false;
        board.updatePiece(move, user, true);
        return false;
      }
      return true;
    }
  }
  return false;
};

export const canKingCastle = (
  board: Board,
  user: User,
  move: move
): boolean => {
  let [currentI, currentJ, toI, toJ] = getMove(move);

  let checkMove: move = {
    currentI,
    currentJ,
    toI,
    toJ,
  };

  if (user.isKingInCheck) return false;
  if (currentJ > toJ && user.canCastleLeft) {
    checkMove.toJ = 1;

    if (!validStraightMove(board, checkMove)) return false;

    if (checkCastle(user, board, move, 0, -1)) {
      //update rook position too
      move.currentJ = 0;
      move.toJ += 1;
      board.updatePiece(move, user);
      return true;
    }
  } else if (currentJ < toJ && user.canCastleRight) {
    checkMove.toJ = 6;
    if (!validStraightMove(board, checkMove)) return false;
    if (checkCastle(user, board, move, 7, 1)) {
      //update rook position too
      move.currentJ = 7;
      move.toJ -= 1;
      board.updatePiece(move, user);
      return true;
    }
  }
  return false;
};
