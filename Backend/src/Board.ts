import { Cell } from './Cell';
import { Piece } from './Piece';
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
        let obj: Cell;
        if ((i + j) % 2 == 0) {
          obj = { color: 'white', position: [i, j] };
        } else {
          obj = { color: 'black', position: [i, j] };
        }
        row.push(obj);
      }
      grid.push(row);
    }
    return grid;
  }

  placePiece(piece: Piece, row: number, col: number) {
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
