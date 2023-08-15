import { Board } from './Board';
import { initializeBoard } from './ChessBoard/initialize';
import { isInvalidMoveKingInCheck } from './moves/kingCheck';
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
  kingPosition: [7, 4],
};

const user2: User = {
  name: 'Solo',
  color: 'B',
  canCastleLeft: true,
  canCastleRight: true,
  isKingInCheck: false,
  kingPosition: [0, 4],
};

let move1: move = {
  currentI: 1,
  currentJ: 1,
  toI: 3,
  toJ: 1,
};

let moves = [
  [6, 4, 4, 4],
  [1, 4, 3, 4],
  [6, 3, 4, 3],
  [3, 4, 4, 3],
  [7, 3, 4, 3],
  [0, 1, 2, 2],
  [4, 3, 3, 4],
  [0, 5, 1, 4],
  [3, 4, 3, 7],
];

for (let i = 0; i < moves.length; i++) {
  move1.currentI = moves[i][0];
  move1.currentJ = moves[i][1];
  move1.toI = moves[i][2];
  move1.toJ = moves[i][3];
  let user: User;
  if (i % 2 == 0) {
    user = user1;
  } else {
    user = user2;
  }
  if (validPieceMove(move1, board)) {
    console.log('Came in');
    board.updatePiece(move1);
    if (isInvalidMoveKingInCheck(board, user)) {
      board.updatePiece(move1, true);
    }
  }
}
