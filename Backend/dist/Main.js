"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./ChessBoard/initialize");
const validatePieceMoves_1 = require("./moves/validatePieceMoves");
const board = (0, initialize_1.initializeBoard)();
const user1 = {
    name: 'Solo',
    color: 'W',
    canCastleLeft: true,
    canCastleRight: true,
    isKingInCheck: false,
};
const user2 = {
    name: 'Solo',
    color: 'B',
    canCastleLeft: true,
    canCastleRight: true,
    isKingInCheck: false,
};
let move = {
    currentI: 1,
    currentJ: 1,
    toI: 3,
    toJ: 1,
};
if ((0, validatePieceMoves_1.validPieceMove)(move, board)) {
    board.updatePiece(move);
}
