"use strict";
const { ChessBoard } = require('./BoardBase/ChessBoard');
const { placePawns, placeRooks, placeKing, placeQueen, placeBishops, placeKnights, } = require('./BoardBase/FillBoard');
const { Piece } = require('./BoardBase/Piece');
const board = new ChessBoard(8);
const whiteKing = new Piece('White', ' ♔ ', 'King');
const whiteQueen = new Piece('White', ' ♕ ', 'Queen');
const whitePawn = new Piece('White', ' ♟︎ ', 'Pawn');
const whiteBishop = new Piece('White', ' ♝ ', 'Bishop');
const whiteKnight = new Piece('White', ' ♞ ', 'Knight');
const whiteRook = new Piece('White', ' ♜ ', 'Rook');
const blackKing = new Piece('Black', ' ♔ ', 'King');
const blackQueen = new Piece('Black', ' ♕ ', 'Queen');
const blackPawn = new Piece('Black', ' ♟︎ ', 'Pawn');
const blackRook = new Piece('Black', ' ♜ ', 'Rook');
const blackBishop = new Piece('Black', ' ♝ ', 'Bishop');
const blackKnight = new Piece('Black', ' ♞ ', 'Knight');
const initializeBoard = () => {
    placePawns(board, whitePawn, blackPawn);
    placeRooks(board, whiteRook, blackRook);
    placeKing(board, whiteKing, blackKing);
    placeQueen(board, whiteQueen, blackQueen);
    placeBishops(board, whiteBishop, blackBishop);
    placeKnights(board, whiteKnight, blackKnight);
    // board.print();
    return board;
};
module.exports = { initializeBoard };