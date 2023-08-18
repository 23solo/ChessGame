"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validKnightMove = exports.validPawnMove = exports.validDiagonalMove = exports.validStraightMove = void 0;
const getMoves_1 = require("./getMoves");
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board, move) => {
    let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
    --currentJ;
    while (currentJ > toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentJ;
    }
    return true;
};
const validHorizontalRightMove = (board, move) => {
    let [currentI, currentJ, _, toJ] = (0, getMoves_1.getMove)(move);
    ++currentJ;
    while (currentJ < toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentJ;
    }
    return true;
};
const validVerticalDownMove = (board, move) => {
    let [currentI, currentJ, toI, _] = (0, getMoves_1.getMove)(move);
    ++currentI;
    while (currentI < toI) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentI;
    }
    return true;
};
const validVerticalTopMove = (board, move) => {
    let [currentI, currentJ, toI, _] = (0, getMoves_1.getMove)(move);
    --currentI;
    while (currentI > toI) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentI;
    }
    return true;
};
const validDiagonalTopLeftMove = (board, move) => {
    let [currentI, currentJ, _, toJ] = (0, getMoves_1.getMove)(move);
    --currentJ;
    --currentI;
    while (currentJ > toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentJ;
        --currentI;
    }
    return true;
};
const validDiagonalTopRightMove = (board, move) => {
    let [currentI, currentJ, _, toJ] = (0, getMoves_1.getMove)(move);
    ++currentJ;
    --currentI;
    while (currentJ < toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentJ;
        --currentI;
    }
    return true;
};
const validDiagonalDownRightMove = (board, move) => {
    let [currentI, currentJ, _, toJ] = (0, getMoves_1.getMove)(move);
    ++currentJ;
    ++currentI;
    while (currentJ < toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentJ;
        ++currentI;
    }
    return true;
};
const validDiagonalDownLeftMove = (board, move) => {
    let [currentI, currentJ, _, toJ] = (0, getMoves_1.getMove)(move);
    --currentJ;
    ++currentI;
    while (currentJ > toJ) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        --currentJ;
        ++currentI;
    }
    return true;
};
// Calling the above methods on conditions
const validStraightMove = (board, move) => {
    let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
    if (toI == currentI) {
        if (toJ > currentJ) {
            return validHorizontalRightMove(board, move);
        }
        return validHorizontalLeftMove(board, move);
    }
    else if (toJ == currentJ) {
        if (toI > currentI) {
            return validVerticalDownMove(board, move);
        }
        return validVerticalTopMove(board, move);
    }
    return false;
};
exports.validStraightMove = validStraightMove;
const validDiagonalMove = (board, move) => {
    let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
    if (currentI > toI && currentJ > toJ) {
        return validDiagonalTopLeftMove(board, move);
    }
    else if (currentI > toI && currentJ < toJ) {
        return validDiagonalTopRightMove(board, move);
    }
    else if (currentI < toI && currentJ > toJ) {
        return validDiagonalDownLeftMove(board, move);
    }
    else if (currentI < toI && currentJ < toJ) {
        return validDiagonalDownRightMove(board, move);
    }
    return false;
};
exports.validDiagonalMove = validDiagonalMove;
const validPawnMove = (board, move) => {
    console.log('CAme here');
    let [currentI, currentJ, toI, _] = (0, getMoves_1.getMove)(move);
    if (currentI > toI) {
        --currentI;
        while (currentI > toI) {
            if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
                return false;
            }
            --currentI;
        }
        return true;
    }
    while (++currentI < toI) {
        if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
            return false;
        }
        ++currentI;
        return true;
    }
    return false;
};
exports.validPawnMove = validPawnMove;
const validKnightMove = (move) => {
    // Check for 8 conditions
    // ToDo: make it more generic
    let [currentI, currentJ, toI, toJ] = (0, getMoves_1.getMove)(move);
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
