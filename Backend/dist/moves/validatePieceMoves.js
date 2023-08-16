"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPieceMove = void 0;
const validMoves_1 = require("./validMoves");
const validateBasicCheck = (board, move) => {
    const piece = board.grid[move.currentI][move.currentJ].piece;
    if (!piece) {
        return false;
    }
    const toPiece = board.grid[move.toI][move.toJ].piece;
    if (toPiece) {
        if (toPiece.name == 'King' || toPiece.color == piece.color) {
            return false;
        }
    }
    return true;
};
const validPieceMove = (move, board) => {
    if (!validateBasicCheck(board, move)) {
        return false;
    }
    const piece = board.grid[move.currentI][move.currentJ].piece;
    if (!piece) {
        return false;
    }
    if (piece.name == 'Bishop') {
        if (Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)) {
            return (0, validMoves_1.validDiagonalMove)(board, move);
        }
        return false;
    }
    else if (piece.name == 'Rook') {
        return (0, validMoves_1.validStraightMove)(board, move);
    }
    else if (piece.name == 'Queen') {
        if ((0, validMoves_1.validDiagonalMove)(board, move))
            return true;
        return (0, validMoves_1.validStraightMove)(board, move);
    }
    else if (piece.name == 'Pawn') {
        if (move.toI == move.currentI - 2) {
            if (move.currentI != 6) {
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
        if (Math.abs(move.currentI - move.toI) + Math.abs(move.currentJ - move.toJ) !=
            3) {
            return false;
        }
        return (0, validMoves_1.validKnightMove)(board, move);
    }
    else if (piece.name == 'King') {
        let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
        if (Math.abs(toI - currentI) > 1 || Math.abs(currentJ - toJ) > 1) {
            return false;
        }
        return true;
    }
    return false;
};
exports.validPieceMove = validPieceMove;
