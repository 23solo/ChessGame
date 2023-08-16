"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeKnights = exports.placeBishops = exports.placeRooks = exports.placeQueen = exports.placeKing = exports.placePawns = void 0;
const Piece_1 = require("../Piece");
const placePawns = (board) => {
    for (let j = 0; j < 8; j++) {
        const whitePawn = new Piece_1.Piece('W', ' ♟︎ ', 'Pawn', [6, j]);
        const blackPawn = new Piece_1.Piece('B', ' ♟︎ ', 'Pawn', [1, j]);
        board.placePiece(whitePawn, 6, j);
        board.placePiece(blackPawn, 1, j);
    }
};
exports.placePawns = placePawns;
const placeKing = (board) => {
    const blackKing = new Piece_1.Piece('B', ' ♔ ', 'King', [0, 4]);
    const whiteKing = new Piece_1.Piece('W', ' ♔ ', 'King', [7, 4]);
    board.placePiece(whiteKing, 7, 4);
    board.placePiece(blackKing, 0, 4);
};
exports.placeKing = placeKing;
const placeQueen = (board) => {
    const blackQueen = new Piece_1.Piece('B', ' ♕ ', 'Queen', [0, 3]);
    const whiteQueen = new Piece_1.Piece('W', ' ♕ ', 'Queen', [7, 3]);
    board.placePiece(whiteQueen, 7, 3);
    board.placePiece(blackQueen, 0, 3);
};
exports.placeQueen = placeQueen;
const placeRooks = (board) => {
    const whiteRook = new Piece_1.Piece('W', ' ♜ ', 'Rook', [7, 0]);
    const blackRook = new Piece_1.Piece('B', ' ♜ ', 'Rook', [7, 7]);
    const whiteRook1 = new Piece_1.Piece('W', ' ♜ ', 'Rook', [0, 0]);
    const blackRook1 = new Piece_1.Piece('B', ' ♜ ', 'Rook', [0, 7]);
    board.placePiece(whiteRook, 7, 0);
    board.placePiece(whiteRook1, 7, 7);
    board.placePiece(blackRook1, 0, 0);
    board.placePiece(blackRook, 0, 7);
};
exports.placeRooks = placeRooks;
const placeBishops = (board) => {
    const whiteBishop = new Piece_1.Piece('W', ' ♝ ', 'Bishop', [7, 5]);
    const blackBishop = new Piece_1.Piece('B', ' ♝ ', 'Bishop', [0, 5]);
    const whiteBishop1 = new Piece_1.Piece('W', ' ♝ ', 'Bishop', [7, 2]);
    const blackBishop1 = new Piece_1.Piece('B', ' ♝ ', 'Bishop', [0, 2]);
    board.placePiece(whiteBishop, 7, 5);
    board.placePiece(whiteBishop1, 7, 2);
    board.placePiece(blackBishop, 0, 5);
    board.placePiece(blackBishop1, 0, 2);
};
exports.placeBishops = placeBishops;
const placeKnights = (board) => {
    const whiteKnight = new Piece_1.Piece('W', ' ♞ ', 'Knight', [7, 1]);
    const whiteKnight1 = new Piece_1.Piece('W', ' ♞ ', 'Knight', [7, 6]);
    const blackKnight = new Piece_1.Piece('B', ' ♞ ', 'Knight', [0, 1]);
    const blackKnight1 = new Piece_1.Piece('B', ' ♞ ', 'Knight', [0, 6]);
    board.placePiece(whiteKnight, 7, 1);
    board.placePiece(whiteKnight1, 7, 6);
    board.placePiece(blackKnight1, 0, 1);
    board.placePiece(blackKnight, 0, 6);
};
exports.placeKnights = placeKnights;
