"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./ChessBoard/initialize");
const castle_1 = require("./moves/castle");
const kingCheck_1 = require("./moves/kingCheck");
const validatePieceMoves_1 = require("./moves/validatePieceMoves");
const board = (0, initialize_1.initializeBoard)();
const user1 = {
    name: 'Solo',
    color: 'W',
    canCastleLeft: true,
    canCastleRight: true,
    isKingInCheck: false,
    kingPosition: [7, 4],
};
const user2 = {
    name: 'Solo1',
    color: 'B',
    canCastleLeft: true,
    canCastleRight: true,
    isKingInCheck: false,
    kingPosition: [0, 4],
};
let curr_move = {
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
    // [0, 2, 2, 0],
    // [2, 5, 3, 5],
    // [1, 3, 2, 5],
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
    let base_move = [
        curr_move.currentI,
        curr_move.currentJ,
        curr_move.toI,
        curr_move.toJ,
    ];
    let user, otherUser;
    if (i % 2 == 0) {
        user = user1;
        otherUser = user2;
    }
    else {
        user = user2;
        otherUser = user2;
    }
    if ((0, validatePieceMoves_1.validPieceMove)(curr_move, board, user)) {
        // if (
        //   user.kingPosition[0] == curr_move.toI &&
        //   user.kingPosition[1] == curr_move.toJ
        // ) {
        //   continue;
        // }
        board.updatePiece(curr_move, user);
        if ((0, kingCheck_1.isKingInCheck)(board, user)) {
            board.updatePiece(curr_move, user, true);
            console.log('Retryyyy king is in check !!!');
            i -= 1; // retry
            break;
        }
        (curr_move.currentI = base_move[0]),
            (curr_move.currentJ = base_move[1]),
            (curr_move.toI = base_move[2]),
            (curr_move.toJ = base_move[3]);
        (0, castle_1.updateCastle)(user, curr_move);
        if ((0, kingCheck_1.isKingInCheck)(board, otherUser)) {
            otherUser.isKingInCheck = true;
        }
        // if the king was in check before now after valid move it's safe
        if (user.isKingInCheck) {
            user.isKingInCheck = false;
        }
    }
    else {
        console.log('Retry invalid move!!!');
        i -= 1; // retry invalidPieceMove
        break;
    }
    console.log('\n\n');
    board.print();
}
console.log(user1, user2);
