import { Board } from './Board';
import { initializeBoard } from './ChessBoard/initialize';
import { isKingInCheck } from './moves/kingCheck';
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
  name: 'Solo1',
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

// let moves = [
//   [6, 4, 4, 4],
//   [1, 4, 3, 4],
//   [6, 3, 4, 3],
//   [3, 4, 4, 3],
//   [7, 3, 4, 3],
//   [0, 1, 2, 2],
//   [4, 3, 3, 4],
//   [0, 5, 1, 4],
//   [3, 4, 3, 7],
//   [1, 6, 2, 6],
//   [7, 5, 4, 2],
//   [1, 3, 3, 3],
//   [4, 4, 3, 3],
//   [1, 4, 4, 7],
//   [3, 3, 2, 2],
//   [1, 1, 2, 2],
//   [7, 2, 5, 4],
//   [0, 6, 2, 5],
//   [7, 1, 6, 3],
//   [2, 5, 1, 3],
//   [7, 6, 6, 4],
//   [4, 7, 6, 5],
//   [5, 4, 6, 5],
//   [0, 3, 1, 4],
//   [3, 7, 3, 4],
//   [1, 5, 2, 5],
//   [3, 4, 2, 5],
//   [1, 4, 6, 4],
//   [7, 4, 6, 4],
//   [0, 2, 2, 0],
//   [2, 5, 1, 5],
//   [0, 4, 0, 3],
//   [6, 4, 5, 5],
//   [2, 6, 3, 6],
//   [6, 7, 5, 7],
//   [3, 6, 4, 6],
//   [5, 7, 4, 6],
// ];

// for (let i = 0; i < moves.length; i++) {
//   move1.currentI = moves[i][0];
//   move1.currentJ = moves[i][1];
//   move1.toI = moves[i][2];
//   move1.toJ = moves[i][3];
//   let user, otherUser: User;
//   if (i % 2 == 0) {
//     user = user1;
//     otherUser = user2;
//   } else {
//     user = user2;
//     otherUser = user2;
//   }
//   if (validPieceMove(move1, board)) {
//     console.log('Yaha?', move1);

//     board.updatePiece(move1, user);
//     if (isKingInCheck(board, user)) {
//       board.updatePiece(move1, user, true);
//       console.log('Invalid Move Retry!!!');
//       i -= 1; // retry
//       break;
//     }
//     if (isKingInCheck(board, otherUser)) {
//       otherUser.isKingInCheck = true;
//     }
//     // if the king was in check before now after valid move it's safe
//     if (user.isKingInCheck) {
//       user.isKingInCheck = false;
//     }
//   } else {
//     console.log('Retry!!!');
//     i -= 1; // retry invalidPieceMove
//     break;
//   }
//   console.log('\n\n');
//   board.print();
// }
