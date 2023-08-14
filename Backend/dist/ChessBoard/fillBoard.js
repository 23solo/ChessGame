"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeKnights = exports.placeBishops = exports.placeRooks = exports.placeQueen = exports.placeKing = exports.placePawns = void 0;
const placePawns = (board, whitePawn, blackPawn) => {
    for (let j = 0; j < 8; j++) {
        board.placePiece(whitePawn, 8 - 2, j);
        board.placePiece(blackPawn, 1, j);
    }
};
exports.placePawns = placePawns;
const placeKing = (board, whiteKing, blackKing) => {
    board.placePiece(whiteKing, 7, 4);
    board.placePiece(blackKing, 0, 4);
};
exports.placeKing = placeKing;
const placeQueen = (board, whiteQueen, blackQueen) => {
    board.placePiece(whiteQueen, 7, 3);
    board.placePiece(blackQueen, 0, 3);
};
exports.placeQueen = placeQueen;
const placeRooks = (board, whiteRook, blackRook) => {
    board.placePiece(whiteRook, 7, 0);
    board.placePiece(whiteRook, 7, 7);
    board.placePiece(blackRook, 0, 0);
    board.placePiece(blackRook, 0, 7);
};
exports.placeRooks = placeRooks;
const placeBishops = (board, whiteBishop, blackBishop) => {
    board.placePiece(whiteBishop, 7, 5);
    board.placePiece(whiteBishop, 7, 2);
    board.placePiece(blackBishop, 0, 5);
    board.placePiece(blackBishop, 0, 2);
};
exports.placeBishops = placeBishops;
const placeKnights = (board, whiteKnight, blackKnight) => {
    board.placePiece(whiteKnight, 7, 1);
    board.placePiece(whiteKnight, 7, 6);
    board.placePiece(blackKnight, 0, 1);
    board.placePiece(blackKnight, 0, 6);
};
exports.placeKnights = placeKnights;
