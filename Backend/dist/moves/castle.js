"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canKingCastle = exports.updateCastle = void 0;
const getMoves_1 = require("./getMoves");
const kingCheck_1 = require("./kingCheck");
const validMoves_1 = require("./validMoves");
const updateCastle = (user, move) => {
    if (user.color == 'W') {
        // if it's a rook
        if (move.currentI == 7 && move.currentJ == 0 && user.canCastleLeft) {
            user.canCastleLeft = false;
        }
        else if (move.currentI == 7 &&
            move.currentJ == 7 &&
            user.canCastleRight) {
            user.canCastleRight = false;
        }
        else if (move.currentI == 7 &&
            move.currentJ == 4 &&
            (user.canCastleLeft || user.canCastleRight)) {
            user.canCastleLeft = false;
            user.canCastleRight = false;
        }
    }
    else {
        console.log(move.currentI, move.currentJ);
        if (move.currentI == 0 && move.currentJ == 0 && user.canCastleLeft) {
            user.canCastleLeft = false;
        }
        else if (move.currentI == 0 &&
            move.currentJ == 7 &&
            user.canCastleRight) {
            user.canCastleRight = false;
        }
        else if (move.currentI == 0 &&
            move.currentJ == 4 &&
            (user.canCastleLeft || user.canCastleRight)) {
            user.canCastleLeft = false;
            user.canCastleRight = false;
        }
    }
    return;
};
exports.updateCastle = updateCastle;
const checkCastle = (user, board, move, j, castleNumber) => {
    let i = move.currentI;
    const actualToJ = move.toJ;
    const piece = board.grid[i][j].piece;
    if (piece && piece.name == 'Rook' && piece.color == user.color) {
        move.toJ = move.currentJ + castleNumber;
        board.updatePiece(move, user);
        if ((0, kingCheck_1.isKingInCheck)(board, user)) {
            // revert the change and return false;
            board.updatePiece(move, user, true);
            return false;
        }
        else {
            move.toJ = actualToJ;
            move.currentJ += castleNumber;
            board.updatePiece(move, user);
            if ((0, kingCheck_1.isKingInCheck)(board, user)) {
                // revert the change and return false;
                board.updatePiece(move, user, true);
                return false;
            }
            return true;
        }
    }
    return false;
};
const canKingCastle = (board, user, move) => {
    let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
    let checkMove = {
        currentI,
        currentJ,
        toI,
        toJ,
    };
    if (user.isKingInCheck)
        return false;
    if (currentJ > toJ && user.canCastleLeft) {
        checkMove.toJ = 1;
        if (!(0, validMoves_1.validStraightMove)(board, checkMove))
            return false;
        if (checkCastle(user, board, move, 0, -1)) {
            //update rook position too
            move.currentJ = 0;
            move.toJ += 1;
            board.updatePiece(move, user);
            return true;
        }
    }
    else if (currentJ < toJ && user.canCastleRight) {
        checkMove.toJ = 6;
        if (!(0, validMoves_1.validStraightMove)(board, checkMove))
            return false;
        if (checkCastle(user, board, move, 7, 1)) {
            //update rook position too
            move.currentJ = 7;
            move.toJ -= 1;
            board.updatePiece(move, user);
            return true;
        }
    }
    return false;
};
exports.canKingCastle = canKingCastle;
