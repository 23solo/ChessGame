"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(size) {
        this.size = size;
        this.grid = this.initializeBoard(size);
    }
    initializeBoard(size) {
        const grid = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                let cellObj;
                if ((i + j) % 2 == 0) {
                    cellObj = { color: 'W', position: [i, j] };
                }
                else {
                    cellObj = { color: 'B', position: [i, j] };
                }
                row.push(cellObj);
            }
            grid.push(row);
        }
        return grid;
    }
    placePiece(piece, row, col) {
        this.grid[row][col].piece = piece;
        let curr_piece = this.grid[row][col].piece;
        if (curr_piece) {
            curr_piece.position = [row, col];
        }
        // if (row == 1 || 6) console.log(row, col, this.grid[row][col].piece);
    }
    updatePiece(move, reverse = false) {
        if (reverse) {
            let currPiece = this.grid[move.toI][move.toJ].piece;
            if (currPiece && currPiece.position) {
                currPiece.position = [move.currentI, move.currentJ];
            }
            this.grid[move.currentI][move.currentJ].position = [
                move.currentI,
                move.currentJ,
            ];
            this.grid[move.currentI][move.currentJ].piece = currPiece;
            this.grid[move.toI][move.toJ].piece = undefined;
            return;
        }
        let currPiece = this.grid[move.currentI][move.currentJ].piece;
        if (currPiece && currPiece.position) {
            currPiece.position = [move.toI, move.toJ];
        }
        this.grid[move.toI][move.toJ].piece = currPiece;
        this.grid[move.currentI][move.currentJ].piece = undefined;
    }
    print() {
        for (let i = 0; i < this.size; i++) {
            let rowStr = '';
            for (let j = 0; j < this.size; j++) {
                const cell = this.grid[i][j];
                rowStr += cell.piece ? ` ${cell.piece.symbol} ` : `  _  `;
                // console.log(cell);
            }
            console.log(rowStr);
            console.log();
        }
    }
}
exports.Board = Board;
