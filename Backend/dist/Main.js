"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./ChessBoard/initialize");
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
    name: 'Solo',
    color: 'B',
    canCastleLeft: true,
    canCastleRight: true,
    isKingInCheck: false,
    kingPosition: [0, 4],
};
let move1 = {
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
    [1, 5, 2, 5],
];
for (let i = 0; i < moves.length; i++) {
    move1.currentI = moves[i][0];
    move1.currentJ = moves[i][1];
    move1.toI = moves[i][2];
    move1.toJ = moves[i][3];
    let user;
    if (i % 2 == 0) {
        user = user1;
    }
    else {
        user = user2;
    }
    if ((0, validatePieceMoves_1.validPieceMove)(move1, board)) {
        board.updatePiece(move1);
        if ((0, kingCheck_1.isInvalidMoveKingInCheck)(board, user)) {
            board.updatePiece(move1, true);
            console.log('Invalid Move Retry!!!');
        }
    }
    console.log('\n\n');
    board.print();
}
