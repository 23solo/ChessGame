"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPieceMove = void 0;
const validMoves_1 = require("./validMoves");
const castle_1 = require("./castle");
const getMoves_1 = require("./getMoves");
const validateBasicCheck = (board, move, user) => {
    const piece = board.grid[move.currentI][move.currentJ].piece;
    // cell should have piece
    if (!piece) {
        return false;
    }
    // move piece should belong to user
    if (piece && piece.color != user.color) {
        return false;
    }
    const toPiece = board.grid[move.toI][move.toJ].piece;
    // can't remove king
    if (toPiece) {
        if (toPiece.name == 'King' || toPiece.color == piece.color) {
            return false;
        }
    }
    return true;
};
const validPieceMove = (move, board, user) => {
    if (!validateBasicCheck(board, move, user)) {
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
        if (Math.abs(move.toI - move.currentI) == Math.abs(move.toJ - move.currentJ)) {
            return (0, validMoves_1.validDiagonalMove)(board, move);
        }
        return (0, validMoves_1.validStraightMove)(board, move);
    }
    else if (piece.name == 'Pawn') {
        if (Math.abs(move.toJ - move.currentJ) > 1) {
            return false;
        }
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
        else if (move.toI - move.currentI == 1 && user.color == 'B') {
            return true;
        }
        else if (move.currentI - move.toI == 1 && user.color == 'W') {
            return true;
        }
        return false;
    }
    else if (piece.name == 'Knight') {
        if (Math.abs(move.currentI - move.toI) + Math.abs(move.currentJ - move.toJ) !=
            3) {
            return false;
        }
        return (0, validMoves_1.validKnightMove)(move);
    }
    else if (piece.name == 'King') {
        let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
        if (toI == currentI && Math.abs(currentJ - toJ) == 2) {
            // ToDo user is only used here / can optimise
            return (0, castle_1.canKingCastle)(board, user, move);
        }
        if (Math.abs(toI - currentI) > 1 || Math.abs(currentJ - toJ) > 1) {
            return false;
        }
        return true;
    }
    return false;
};
exports.validPieceMove = validPieceMove;
