"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeBoard = void 0;
const Board_1 = require("../Board");
const Piece_1 = require("../Piece");
const fillBoard = __importStar(require("./fillBoard"));
const board = new Board_1.Board(8);
const whiteKing = new Piece_1.Piece('W', ' ♔ ', 'King');
const whiteQueen = new Piece_1.Piece('W', ' ♕ ', 'Queen');
const whitePawn = new Piece_1.Piece('W', ' ♟︎ ', 'Pawn');
const whiteBishop = new Piece_1.Piece('W', ' ♝ ', 'Bishop');
const whiteKnight = new Piece_1.Piece('W', ' ♞ ', 'Knight');
const whiteRook = new Piece_1.Piece('W', ' ♜ ', 'Rook');
const blackKing = new Piece_1.Piece('B', ' ♔ ', 'King');
const blackQueen = new Piece_1.Piece('B', ' ♕ ', 'Queen');
const blackPawn = new Piece_1.Piece('B', ' ♟︎ ', 'Pawn');
const blackRook = new Piece_1.Piece('B', ' ♜ ', 'Rook');
const blackBishop = new Piece_1.Piece('B', ' ♝ ', 'Bishop');
const blackKnight = new Piece_1.Piece('B', ' ♞ ', 'Knight');
const initializeBoard = () => {
    fillBoard.placePawns(board, whitePawn, blackPawn);
    fillBoard.placeRooks(board, whiteRook, blackRook);
    fillBoard.placeKing(board, whiteKing, blackKing);
    fillBoard.placeQueen(board, whiteQueen, blackQueen);
    fillBoard.placeBishops(board, whiteBishop, blackBishop);
    fillBoard.placeKnights(board, whiteKnight, blackKnight);
    board.print();
    return board;
};
exports.initializeBoard = initializeBoard;
