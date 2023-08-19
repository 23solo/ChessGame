"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canProtectKing = void 0;
const kingCheck_1 = require("./kingCheck");
const validatePieceMoves_1 = require("./validatePieceMoves");
const getMove = (fromPosition, toPosition, checkKing = true) => {
    let toI = fromPosition[0] + toPosition[0], toJ = fromPosition[1] + toPosition[1];
    if (checkKing) {
        return {
            currentI: fromPosition[0],
            currentJ: fromPosition[1],
            toI: toI,
            toJ: toJ,
        };
    }
    return {
        currentI: fromPosition[0],
        currentJ: fromPosition[1],
        toI: toPosition[0],
        toJ: toPosition[1],
    };
};
const checkPieceBlock = (allBlockPosition, board, user, userPieces) => {
    for (let curr_position in allBlockPosition) {
        for (let curr_piece in userPieces) {
            let checkMove = getMove(userPieces[curr_piece].position, allBlockPosition[curr_position], false);
            if (checkValidMove(checkMove, board, user)) {
                return true;
            }
        }
    }
    return false;
};
const checkValidMove = (checkMove, board, user) => {
    if ((0, validatePieceMoves_1.validPieceMove)(checkMove, board, user)) {
        board.updatePiece(checkMove, user);
        if ((0, kingCheck_1.isKingInCheck)(board, user)) {
            // revert the move
            board.updatePiece(checkMove, user, true);
            return false;
        }
        else {
            // revert your move and return true that valid move exists
            board.updatePiece(checkMove, user, true);
            return true;
        }
    }
};
const canRemoveKnight = (board, user, userPieces) => {
    for (let i in userPieces) {
        let checkMove = getMove(userPieces[i].position, user.kingCheckedFrom);
        if (checkValidMove(checkMove, board, user)) {
            return true;
        }
    }
    return false;
};
const basicCheck = (toIndex) => {
    const i = toIndex[0], j = toIndex[1];
    if (i >= 8 || i < 0) {
        return false;
    }
    else if (j >= 8 || j < 0) {
        return false;
    }
    return true;
};
const getAllSavingKingPosition = (board, attackingPiecePosition, kingPosition) => {
    let [kingI, kingJ, pieceI, pieceJ] = [
        kingPosition[0],
        kingPosition[1],
        attackingPiecePosition[0],
        attackingPiecePosition[1],
    ];
    let allPositions = [];
    // is king attacked from diagonal
    if (Math.abs(kingI - pieceI) == Math.abs(kingJ - pieceJ)) {
        if (kingI < pieceI) {
            // check right down diagonal
            if (kingJ < pieceJ) {
                kingJ++, kingI++;
                while (kingI <= pieceI && kingJ <= pieceJ) {
                    allPositions.push([kingI, kingJ]);
                    kingJ++, kingI++;
                }
            }
            // check left down diagonal
            else if (kingJ > pieceJ) {
                kingI++, kingJ--;
                while (kingI <= pieceI && kingJ >= pieceJ) {
                    allPositions.push([kingI, kingJ]);
                    kingI++, kingJ--;
                }
            }
        }
        else {
            if (kingJ < pieceJ) {
                kingJ++, kingI--;
                while (kingI <= pieceI && kingJ <= pieceJ) {
                    allPositions.push([kingI, kingJ]);
                }
            }
            // check left down diagonal
            else if (kingJ > pieceJ) {
                kingI--, kingJ--;
                while (kingI <= pieceI && kingJ >= pieceJ) {
                    allPositions.push([kingI, kingJ]);
                }
            }
        }
    }
    // is king attacked from straight
    // both on same row
    else if (kingI == pieceI) {
        if (kingJ < pieceJ) {
            kingJ++;
            while (kingJ <= pieceJ) {
                allPositions.push([kingI, kingJ]);
                kingJ++;
            }
        }
        else {
            kingJ--;
            while (kingJ >= pieceJ) {
                allPositions.push([kingI, kingJ]);
                kingJ--;
            }
        }
    }
    // Both on same column
    else if (kingJ == pieceJ) {
        if (kingI < pieceI) {
            kingI++;
            while (kingI <= pieceI) {
                allPositions.push([kingI, kingJ]);
                kingI++;
            }
        }
        else {
            kingI--;
            while (kingI >= pieceI) {
                allPositions.push([kingI, kingJ]);
                kingI--;
            }
        }
    }
    return allPositions;
};
const canKingMove = (board, user) => {
    let allKingMoves = [
        [1, 0],
        [0, 1],
        [1, -1],
        [0, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1],
        [1, 1],
    ];
    for (let i in allKingMoves) {
        let checkMove;
        checkMove = getMove(user.kingPosition, allKingMoves[i]);
        if (basicCheck([checkMove.toI, checkMove.toJ])) {
            if (checkValidMove(checkMove, board, user)) {
                return true;
            }
        }
    }
    return false;
};
const canProtectKing = (board, user) => {
    let userPieces = [];
    const attackingPiece = board.grid[user.kingCheckedFrom[0]][user.kingCheckedFrom[1]].piece;
    // ToDO: this can be optimised by keeping track of user pieces from the start
    // add all user pieces to a list
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let curr_piece = board.grid[i][j].piece;
            if (curr_piece) {
                userPieces.push(curr_piece);
            }
        }
    }
    // check if any valid king move is possible
    if (canKingMove(board, user)) {
        return true;
    }
    // If it's knight then it can't be blocked
    if (attackingPiece && attackingPiece.name == 'Knight') {
        // check if any piece can remove knight
        if (canRemoveKnight(board, user, userPieces)) {
            return true;
        }
        return false;
    }
    // if not knight getAllSavingPositions
    let allBlockPosition = getAllSavingKingPosition(board, user.kingCheckedFrom, user.kingPosition);
    if (checkPieceBlock(allBlockPosition, board, user, userPieces)) {
        return true;
    }
    // if knight check if any piece can remove it
    // else return false king is Busted
    return false;
};
exports.canProtectKing = canProtectKing;
