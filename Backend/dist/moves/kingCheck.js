"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInvalidMoveKingInCheck = void 0;
const checkLeftTopDiagonal = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI--, currentJ--;
    while (currentI >= 0 && currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentI--;
        currentJ--;
    }
    return false;
};
const checkRightTopDiagonal = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI--, currentJ++;
    while (currentI >= 0 && currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentI--;
        currentJ++;
    }
    return false;
};
const checkLeftDownDiagonal = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI++, currentJ--;
    while (currentI < 8 && currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentI++;
        currentJ--;
    }
    return false;
};
const checkRightDownDiagonal = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI++, currentJ++;
    while (currentI < 8 && currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            (piece.name == 'Bishop' || piece.name == 'Queen')) {
            console.log('here?');
            return true;
        }
        else if (piece)
            return false;
        currentI++;
        currentJ++;
    }
    return false;
};
const checkRightStraight = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentJ++;
    while (currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentJ++;
    }
    return false;
};
const checkLeftStraight = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentJ--;
    while (currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentJ--;
    }
    return false;
};
const checkTopStraight = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI--;
    while (currentI >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentI--;
    }
    return false;
};
const checkDownStraight = (board, user) => {
    let currentI = user.kingPosition[0], currentJ = user.kingPosition[1];
    currentI++;
    while (currentI < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
            return true;
        else if (piece)
            return false;
        currentI++;
    }
    return false;
};
// const checkKnight = (board: Board, user: User): boolean => {
//   let currentI = user.kingPosition[0],
//     currentJ = user.kingPosition[1];
//   if(Math.abs())
//   return false;
// };
const validDiagonalMove = (board, user) => {
    if (checkLeftTopDiagonal(board, user))
        return true;
    if (checkRightTopDiagonal(board, user))
        return true;
    if (checkLeftDownDiagonal(board, user))
        return true;
    if (checkRightDownDiagonal(board, user))
        return true;
    return false;
};
const validStraightMove = (board, user) => {
    if (checkDownStraight(board, user))
        return true;
    if (checkTopStraight(board, user))
        return true;
    if (checkLeftStraight(board, user))
        return true;
    if (checkRightStraight(board, user))
        return true;
    return false;
};
const isInvalidMoveKingInCheck = (board, user) => {
    if (validDiagonalMove(board, user))
        return true;
    if (validStraightMove(board, user))
        return true;
    return false;
};
exports.isInvalidMoveKingInCheck = isInvalidMoveKingInCheck;
