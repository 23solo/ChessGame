"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validKnightMove = exports.validPawnMove = exports.validDiagonalMove = exports.validStraightMove = void 0;
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ;
    while (--currentJ > toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validHorizontalRightMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ;
    while (++currentJ < toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validVerticalDownMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toI = move.toI;
    while (++currentI < toI) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validVerticalTopMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toI = move.toI;
    while (--currentI < toI) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
    }
    return true;
};
const validDiagonalTopLeftMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    --currentJ;
    --currentI;
    while (currentJ > toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentJ;
        --currentI;
    }
    return true;
};
const validDiagonalTopRightMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    ++currentJ;
    --currentI;
    while (currentJ < toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentJ;
        --currentI;
    }
    return true;
};
const validDiagonalDownRightMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    ++currentJ;
    ++currentI;
    while (currentJ < toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentJ;
        ++currentI;
    }
    return true;
};
const validDiagonalDownLeftMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    --currentJ;
    ++currentI;
    while (currentJ > toJ) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentJ;
        ++currentI;
    }
    return true;
};
// Calling the above methods on conditions
const validStraightMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    if (toI == toI) {
        if (toJ > currentJ) {
            return validHorizontalRightMove(board, move);
        }
        return validHorizontalLeftMove(board, move);
    }
    else if (toJ == toJ) {
        if (toI > currentI) {
            return validVerticalDownMove(board, move);
        }
        return validVerticalTopMove(board, move);
    }
    return false;
};
exports.validStraightMove = validStraightMove;
const validDiagonalMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    if (currentI < toI && currentJ < toJ) {
        return validDiagonalTopLeftMove(board, move);
    }
    else if (currentI < toI && currentJ > toJ) {
        return validDiagonalTopRightMove(board, move);
    }
    else if (currentI > toI && currentJ < toJ) {
        return validDiagonalDownLeftMove(board, move);
    }
    else if (currentI > toI && currentJ > toJ) {
        return validDiagonalDownRightMove(board, move);
    }
    return false;
};
exports.validDiagonalMove = validDiagonalMove;
const validPawnMove = (board, move) => {
    let currentJ = move.currentJ, currentI = move.toI, toI = move.toI;
    if (currentI > toI) {
        while (--currentI > toI) {
            if (board.grid[currentI][currentJ].piece) {
                return false;
            }
        }
        return true;
    }
    while (++currentI < toI) {
        if (board.grid[currentI][currentJ].piece) {
            return false;
        }
        return true;
    }
    return false;
};
exports.validPawnMove = validPawnMove;
const validKnightMove = (board, move) => {
    // Check for 8 conditions
    let currentJ = move.currentJ, currentI = move.toI, toJ = move.toJ, toI = move.toI;
    if (currentI + 2 == toI && currentJ + 1 == toJ) {
        return true;
    }
    if (currentI + 2 == toI && currentJ - 1 == toJ) {
        return true;
    }
    if (currentI - 2 == toI && currentJ + 1 == toJ) {
        return true;
    }
    if (currentI - 2 == toI && currentJ - 1 == toJ) {
        return true;
    }
    if (currentI + 1 == toI && currentJ + 2 == toJ) {
        return true;
    }
    if (currentI + 1 == toI && currentJ - 2 == toJ) {
        return true;
    }
    if (currentI - 1 == toI && currentJ + 2 == toJ) {
        return true;
    }
    if (currentI - 1 == toI && currentJ - 2 == toJ) {
        return true;
    }
    return false;
};
exports.validKnightMove = validKnightMove;
