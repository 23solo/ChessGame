import { Board } from './Board';
import { initializeBoard } from './ChessBoard/initialize';
import { move } from './moves/move';
import { validPieceMove } from './moves/validatePieceMoves';
import { User } from './user/User';

const board: Board = initializeBoard();

const user1: User = {
  name: 'Solo',
  color: 'W',
  canCastleLeft: true,
  canCastleRight: true,
  isKingInCheck: false,
};

const user2: User = {
  name: 'Solo',
  color: 'B',
  canCastleLeft: true,
  canCastleRight: true,
  isKingInCheck: false,
};

let move: move = {
  currentI: 1,
  currentJ: 1,
  toI: 3,
  toJ: 1,
};

if (validPieceMove(move, board)) {
  board.updatePiece(move);
}
