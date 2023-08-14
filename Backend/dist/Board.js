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
                    cellObj = { color: 'white', position: [i, j] };
                }
                else {
                    cellObj = { color: 'black', position: [i, j] };
                }
                row.push(cellObj);
            }
            grid.push(row);
        }
        return grid;
    }
    placePiece(piece, row, col) {
        piece.position = [row, col];
        this.grid[row][col].piece = piece;
    }
    print() {
        for (let i = 0; i < this.size; i++) {
            let rowStr = '';
            for (let j = 0; j < this.size; j++) {
                const cell = this.grid[i][j];
                rowStr += cell.piece ? cell.piece.symbol : ` _ `;
            }
            console.log(rowStr);
        }
    }
}
exports.Board = Board;
