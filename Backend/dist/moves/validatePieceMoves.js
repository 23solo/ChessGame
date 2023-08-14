"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPieceMove = void 0;
const validMoves_1 = require("./validMoves");
const validPieceMove = (move, board) => {
    const piece = board.grid[move.currentI][move.currentJ].piece;
    if (!piece) {
        return false;
    }
    if (piece.name == 'Bishop' || piece.name == 'Queen') {
        if (Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)) {
            return (0, validMoves_1.validDiagonalMove)(board, move);
        }
        return false;
    }
    else if (piece.name == 'Rook' || piece.name == 'Queen') {
        return (0, validMoves_1.validStraightMove)(board, move);
    }
    else if (piece.name == 'Pawn' && piece.color == 'W') {
        if (move.toI == move.currentI - 2) {
            if (move.currentI != 7) {
                return false;
            }
            return (0, validMoves_1.validPawnMove)(board, move);
        }
        else if (move.toI == move.currentI + 2) {
            if (move.currentI != 1) {
                return false;
            }
            return (0, validMoves_1.validPawnMove)(board, move);
        }
        else if (Math.abs(move.toI - move.currentI) == 1) {
            return true;
        }
        return false;
    }
    else if (piece.name == 'Knight') {
    }
    else if (piece.name == 'King') {
    }
    return false;
};
exports.validPieceMove = validPieceMove;
