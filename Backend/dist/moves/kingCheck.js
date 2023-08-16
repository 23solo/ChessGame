"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKingInCheck = void 0;
const getKingPosition = (user) => {
    return [user.kingPosition[0], user.kingPosition[1]];
};
const getPiece = (board, user, i, j) => {
    let [currentI, currentJ] = getKingPosition(user);
    if (board.grid[currentI + i] && board.grid[currentI + i][currentJ + j])
        return board.grid[currentI + i][currentJ + j].piece;
    return undefined;
};
const checkLeftTopDiagonal = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI--, currentJ--;
    while (currentI >= 0 && currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Bishop', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentI--;
        currentJ--;
    }
    return false;
};
const checkRightTopDiagonal = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI--, currentJ++;
    while (currentI >= 0 && currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Bishop', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentI--;
        currentJ++;
    }
    return false;
};
const checkLeftDownDiagonal = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI++, currentJ--;
    while (currentI < 8 && currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Bishop', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentI++;
        currentJ--;
    }
    return false;
};
const checkRightDownDiagonal = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI++, currentJ++;
    while (currentI < 8 && currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            (piece.name == 'Bishop' || piece.name == 'Queen')) {
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
    let [currentI, currentJ] = getKingPosition(user);
    currentJ++;
    while (currentJ < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Rook', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentJ++;
    }
    return false;
};
const checkLeftStraight = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentJ--;
    while (currentJ >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Rook', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentJ--;
    }
    return false;
};
const checkTopStraight = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI--;
    while (currentI >= 0) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Rook', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentI--;
    }
    return false;
};
const checkDownStraight = (board, user) => {
    let [currentI, currentJ] = getKingPosition(user);
    currentI++;
    while (currentI < 8) {
        const piece = board.grid[currentI][currentJ].piece;
        if (piece &&
            piece.color != user.color &&
            ['Rook', 'Queen'].includes(piece.name))
            return true;
        else if (piece)
            return false;
        currentI++;
    }
    return false;
};
const checkKnight = (board, user) => {
    const positions = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    for (const [x, y] of positions) {
        const piece = getPiece(board, user, x, y);
        if (piece && piece.name === 'Knight' && piece.color !== user.color) {
            return true;
        }
    }
    return false;
};
const checkPawn = (board, user) => {
    let [currentI] = getKingPosition(user);
    if (user.color == 'B' && currentI != 7) {
        let piece = getPiece(board, user, 1, 1);
        if (piece && piece.name == 'Pawn' && piece.color != user.color)
            return true;
        piece = getPiece(board, user, 1, -1);
        if (piece && piece.name == 'Pawn' && piece.color != user.color)
            return true;
    }
    else {
        let piece = getPiece(board, user, -1, 1);
        if (piece && piece.name == 'Pawn' && piece.color != user.color)
            return true;
        piece = getPiece(board, user, -1, -1);
        if (piece && piece.name == 'Pawn' && piece.color != user.color)
            return true;
    }
    return false;
};
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
const isKingInCheck = (board, user, isOppKingCheck = false) => {
    if (validDiagonalMove(board, user))
        return true;
    if (validStraightMove(board, user))
        return true;
    if (isOppKingCheck) {
        if (checkPawn(board, user))
            return true;
        return checkKnight(board, user);
    }
    return false;
};
exports.isKingInCheck = isKingInCheck;
