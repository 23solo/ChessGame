import { Board } from './Board';
import { initializeBoard } from './ChessBoard/initialize';
import { updateCastle } from './moves/castle';
import { isKingInCheck } from './moves/kingCheck';
import { move } from './moves/move';
import { canProtectKing } from './moves/protectKing';
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
  kingCheckedFrom: [-1, -1],
};

const user2: User = {
  name: 'Solo1',
  color: 'B',
  canCastleLeft: true,
  canCastleRight: true,
  isKingInCheck: false,
  kingPosition: [0, 4],
  kingCheckedFrom: [-1, -1],
};

let curr_move: move = {
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
  [1, 6, 2, 6],
  [7, 5, 4, 2],
  [1, 3, 3, 3],
  [4, 4, 3, 3],
  [1, 4, 4, 7],
  [3, 3, 2, 2],
  [1, 1, 2, 2],
  [7, 2, 5, 4],
  [0, 6, 2, 5],
  [7, 1, 6, 3],
  [2, 5, 1, 3],
  [7, 6, 6, 4],
  [4, 7, 6, 5],
  [5, 4, 6, 5],
  [0, 3, 1, 4],
  [3, 7, 3, 4],
  [1, 5, 2, 5],
  [3, 4, 2, 5],
  [1, 4, 5, 4],
  [7, 4, 7, 6],
  [1, 3, 3, 4],
  [2, 5, 3, 4],
  // [0, 4, 0, 5],
  // [3, 5, 2, 5],
  // [2, 6, 3, 6],
  // [2, 5, 3, 6],
  // [1, 7, 3, 7],
  // [3, 6, 4, 7],
  // [2, 0, 4, 2],
  // [6, 3, 4, 2],
  // [0, 4, 0, 6],
  // [6, 4, 5, 5],
  // [2, 6, 3, 6],
  // [6, 7, 5, 7],
  // [3, 6, 4, 6],
  // [5, 7, 4, 6],
];

for (let i = 0; i < moves.length; i++) {
  curr_move.currentI = moves[i][0];
  curr_move.currentJ = moves[i][1];
  curr_move.toI = moves[i][2];
  curr_move.toJ = moves[i][3];
  let base_move: number[] = [
    curr_move.currentI,
    curr_move.currentJ,
    curr_move.toI,
    curr_move.toJ,
  ];
  let user, otherUser: User;
  if (i % 2 == 0) {
    user = user1;
    otherUser = user2;
  } else {
    user = user2;
    otherUser = user2;
  }
  if (validPieceMove(curr_move, board, user)) {
    // if (
    //   user.kingPosition[0] == curr_move.toI &&
    //   user.kingPosition[1] == curr_move.toJ
    // ) {
    //   continue;
    // }
    board.updatePiece(curr_move, user);
    if (isKingInCheck(board, user)) {
      board.updatePiece(curr_move, user, true);
      console.log('Retryyyy king is in check !!!');

      i -= 1; // retry
      break;
    }
    (curr_move.currentI = base_move[0]),
      (curr_move.currentJ = base_move[1]),
      (curr_move.toI = base_move[2]),
      (curr_move.toJ = base_move[3]);
    updateCastle(user, curr_move);
    if (isKingInCheck(board, otherUser)) {
      otherUser.isKingInCheck = true;
      // Check if user has any valid moves to protect his king else declare curr_user as winner
      if (!canProtectKing(board, otherUser)) {
        console.log(
          `Winner Winner chicken Dinner ${user.name} has beat ${otherUser.name}`
        );
        break;
      }
    }
    // if the king was in check before now after valid move it's safe
    if (user.isKingInCheck) {
      user.isKingInCheck = false;
    }
  } else {
    console.log('Retry invalid move!!!');
    i -= 1; // retry invalidPieceMove
    break;
  }
  console.log('\n\n');
  board.print();
}

console.log(user1, user2);
