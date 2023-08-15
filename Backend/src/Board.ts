import { Cell } from './Cell';
import { Piece } from './Piece';
import { move } from './moves/move';
export class Board {
  size: number;
  grid: Cell[][];
  constructor(size: number) {
    this.size = size;
    this.grid = this.initializeBoard(size);
  }

  initializeBoard(size: number) {
    const grid = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        let cellObj: Cell;
        if ((i + j) % 2 == 0) {
          cellObj = { color: 'W', position: [i, j] };
        } else {
          cellObj = { color: 'B', position: [i, j] };
        }
        row.push(cellObj);
      }
      grid.push(row);
    }
    return grid;
  }

  placePiece(piece: Piece, row: number, col: number) {
    piece.position = [row, col];
    this.grid[row][col].piece = piece;

    if (row == 1 || 6) console.log(row, col, this.grid[row][col].piece);
  }

  updatePiece(move: move, reverse: boolean = false) {
    if (reverse) {
      this.grid[move.currentI][move.currentJ] = this.grid[move.toI][move.toJ];
      this.grid[move.toI][move.toJ].piece = undefined;
      this.grid[move.currentI][move.currentJ].position = [
        move.currentI,
        move.currentJ,
      ];
      return;
    }
    this.grid[move.toI][move.toJ] = this.grid[move.currentI][move.currentJ];
    this.grid[move.currentI][move.currentJ].piece = undefined;
    this.grid[move.toI][move.toJ].position = [move.toI, move.toJ];
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      let rowStr = '';
      for (let j = 0; j < this.size; j++) {
        const cell = this.grid[i][j];
        rowStr += cell.piece ? cell.piece : ` _ `;
        console.log(cell.piece);
      }
      // console.log(rowStr);cell.piece
    }
  }
}
