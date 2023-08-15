import { Board } from '../Board';
import { Piece } from '../Piece';
import { User } from '../user/User';

const validLeftTopDiagonal = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI--, currentJ--;
  while (currentI >= 0 && currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
      return true;
    else if (piece) return false;
    currentI--;
    currentJ--;
  }
  return false;
};

const validRightTopDiagonal = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI--, currentJ++;
  while (currentI >= 0 && currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
      return true;
    else if (piece) return false;
    currentI--;
    currentJ++;
  }
  return false;
};

const validLeftDownDiagonal = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI++, currentJ--;
  while (currentI < 8 && currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
      return true;
    else if (piece) return false;
    currentI++;
    currentJ--;
  }
  return false;
};

const validRightDownDiagonal = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI++, currentJ++;
  while (currentI < 8 && currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Bishop', 'Queen'])
      return true;
    else if (piece) return false;
    currentI++;
    currentJ++;
  }
  return false;
};

const validRightStraight = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentJ++;
  while (currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
      return true;
    else if (piece) return false;
    currentJ++;
  }
  return false;
};

const validLeftStraight = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentJ--;
  while (currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
      return true;
    else if (piece) return false;
    currentJ--;
  }
  return false;
};

const validTopStraight = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI--;
  while (currentI >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
      return true;
    else if (piece) return false;
    currentI--;
  }
  return false;
};

const validDownStraight = (board: Board, user: User): boolean => {
  let currentI = user.kingPosition[0],
    currentJ = user.kingPosition[1];
  currentI++;
  while (currentI < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (piece && piece.color != user.color && piece.name in ['Rook', 'Queen'])
      return true;
    else if (piece) return false;
    currentI++;
  }
  return false;
};

const validDiagonalMove = (board: Board, user: User): boolean => {
  if (validLeftTopDiagonal(board, user)) return true;
  if (validRightTopDiagonal(board, user)) return true;
  if (validLeftDownDiagonal(board, user)) return true;
  if (validRightDownDiagonal(board, user)) return true;
  return false;
};
const validStraightMove = (board: Board, user: User): boolean => {
  if (validDownStraight(board, user)) return true;
  if (validTopStraight(board, user)) return true;
  if (validLeftStraight(board, user)) return true;
  if (validRightStraight(board, user)) return true;
  return false;
};

export const isInvalidMoveKingInCheck = (board: Board, user: User): boolean => {
  if (validDiagonalMove(board, user)) return true;
  if (validStraightMove(board, user)) return true;
  return false;
};
