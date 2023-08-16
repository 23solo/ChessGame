import { Cell } from './Cell';
import { Piece } from './Piece';
import { move } from './moves/move';
import { User } from './user/User';
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
    this.grid[row][col].piece = piece;
    let curr_piece = this.grid[row][col].piece;
    if (curr_piece) {
      curr_piece.position = [row, col];
    }
  }

  updatePiece(move: move, user: User, reverse: boolean = false) {
    if (reverse) {
      let currPiece = this.grid[move.toI][move.toJ].piece;

      if (currPiece && currPiece.position) {
        currPiece.position = [move.currentI, move.currentJ];
        if (currPiece.name == 'King') {
          user.kingPosition = [move.currentI, move.currentJ];
        }
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
      if (currPiece.name == 'King') {
        user.kingPosition = [move.toI, move.toJ];
      }
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
