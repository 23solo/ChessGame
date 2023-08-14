"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./ChessBoard/initialize");
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
