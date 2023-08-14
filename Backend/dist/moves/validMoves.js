"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPawnMove = exports.validDiagonalMove = exports.validStraightMove = void 0;
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board, move) => {
    while (--move.currentJ > move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validHorizontalRightMove = (board, move) => {
    while (++move.currentJ < move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validVerticalDownMove = (board, move) => {
    while (++move.currentI < move.toI) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validVerticalTopMove = (board, move) => {
    while (--move.currentI < move.toI) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validDiagonalTopLeftMove = (board, move) => {
    --move.currentJ;
    --move.currentI;
    while (move.currentJ > move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
        --move.currentJ;
        --move.currentI;
    }
    return true;
};
const validDiagonalTopRightMove = (board, move) => {
    ++move.currentJ;
    --move.currentI;
    while (move.currentJ < move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
        ++move.currentJ;
        --move.currentI;
    }
    return true;
};
const validDiagonalDownRightMove = (board, move) => {
    ++move.currentJ;
    ++move.currentI;
    while (move.currentJ < move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
        ++move.currentJ;
        ++move.currentI;
    }
    return true;
};
const validDiagonalDownLeftMove = (board, move) => {
    --move.currentJ;
    ++move.currentI;
    while (move.currentJ > move.toJ) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
        --move.currentJ;
        ++move.currentI;
    }
    return true;
};
// Calling the above methods on conditions
const validStraightMove = (board, move) => {
    if (move.toI == move.toI) {
        if (move.toJ > move.currentJ) {
            return validHorizontalRightMove(board, move);
        }
        return validHorizontalLeftMove(board, move);
    }
    else if (move.toJ == move.toJ) {
        if (move.toI > move.currentI) {
            return validVerticalDownMove(board, move);
        }
        return validVerticalTopMove(board, move);
    }
    return false;
};
exports.validStraightMove = validStraightMove;
const validDiagonalMove = (board, move) => {
    if (move.currentI < move.toI && move.currentJ < move.toJ) {
        return validDiagonalTopLeftMove(board, move);
    }
    else if (move.currentI < move.toI && move.currentJ > move.toJ) {
        return validDiagonalTopRightMove(board, move);
    }
    else if (move.currentI > move.toI && move.currentJ < move.toJ) {
        return validDiagonalDownLeftMove(board, move);
    }
    else if (move.currentI > move.toI && move.currentJ > move.toJ) {
        return validDiagonalDownRightMove(board, move);
    }
    return false;
};
exports.validDiagonalMove = validDiagonalMove;
const validPawnMove = (board, move) => {
    if (move.currentI > move.toI) {
        while (--move.currentI > move.toI) {
            if (board.grid[move.currentI][move.currentJ].piece) {
                return false;
            }
        }
        return true;
    }
    while (++move.currentI < move.toI) {
        if (board.grid[move.currentI][move.currentJ].piece) {
            return false;
        }
        return true;
    }
    return false;
};
exports.validPawnMove = validPawnMove;
