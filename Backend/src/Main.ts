import { Board } from './Board';
import { initializeBoard } from './ChessBoard/initialize';
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
