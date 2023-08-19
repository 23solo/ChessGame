import { Board } from '../Board';
import { kingCheckPosition } from '../KingCheck/checkPosition';
import { Piece } from '../Piece';
import { User } from '../user/User';

const getKingPosition = (user: User): [number, number] => {
  return [user.kingPosition[0], user.kingPosition[1]];
};

const getPiece = (
  board: Board,
  user: User,
  i: number,
  j: number
): Piece | undefined => {
  let [currentI, currentJ] = getKingPosition(user);

  if (board.grid[currentI + i] && board.grid[currentI + i][currentJ + j])
    return board.grid[currentI + i][currentJ + j].piece;
  return undefined;
};

const checkLeftTopDiagonal = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);

  currentI--, currentJ--;
  while (currentI >= 0 && currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;

    if (
      piece &&
      piece.color != user.color &&
      ['Bishop', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI--;
    currentJ--;
  }
  return false;
};

const checkRightTopDiagonal = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentI--, currentJ++;
  while (currentI >= 0 && currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Bishop', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI--;
    currentJ++;
  }
  return false;
};

const checkLeftDownDiagonal = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentI++, currentJ--;
  while (currentI < 8 && currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Bishop', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI++;
    currentJ--;
  }
  return false;
};

const checkRightDownDiagonal = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentI++, currentJ++;
  while (currentI < 8 && currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      (piece.name == 'Bishop' || piece.name == 'Queen')
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI++;
    currentJ++;
  }
  return false;
};

const checkRightStraight = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentJ++;
  while (currentJ < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Rook', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentJ++;
  }
  return false;
};

const checkLeftStraight = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentJ--;
  while (currentJ >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Rook', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentJ--;
  }
  return false;
};

const checkTopStraight = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentI--;
  while (currentI >= 0) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Rook', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI--;
  }
  return false;
};

const checkDownStraight = (board: Board, user: User): boolean => {
  let [currentI, currentJ] = getKingPosition(user);
  currentI++;
  while (currentI < 8) {
    const piece: Piece | undefined = board.grid[currentI][currentJ].piece;
    if (
      piece &&
      piece.color != user.color &&
      ['Rook', 'Queen'].includes(piece.name)
    ) {
      kingCheckPosition(user, piece.position);
      return true;
    } else if (piece) return false;
    currentI++;
  }
  return false;
};

const checkKnight = (board: Board, user: User): boolean => {
  const positions: [number, number][] = [
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
      {
        kingCheckPosition(user, piece.position);
        return true;
      }
    }
  }

  return false;
};

const checkPawn = (board: Board, user: User): boolean => {
  let [currentI] = getKingPosition(user);
  if (user.color == 'B' && currentI != 7) {
    let piece: Piece | undefined = getPiece(board, user, 1, 1);
    if (piece && piece.name == 'Pawn' && piece.color != user.color) {
      kingCheckPosition(user, piece.position);
      return true;
    }
    piece = getPiece(board, user, 1, -1);
    if (piece && piece.name == 'Pawn' && piece.color != user.color) {
      kingCheckPosition(user, piece.position);
      return true;
    }
  } else {
    let piece: Piece | undefined = getPiece(board, user, -1, 1);
    if (piece && piece.name == 'Pawn' && piece.color != user.color) {
      kingCheckPosition(user, piece.position);
      return true;
    }
    piece = getPiece(board, user, -1, -1);
    if (piece && piece.name == 'Pawn' && piece.color != user.color) {
      kingCheckPosition(user, piece.position);
      return true;
    }
  }
  return false;
};

const validDiagonalMove = (board: Board, user: User): boolean => {
  if (checkLeftTopDiagonal(board, user)) return true;
  if (checkRightTopDiagonal(board, user)) return true;
  if (checkLeftDownDiagonal(board, user)) return true;
  if (checkRightDownDiagonal(board, user)) return true;
  return false;
};

const validStraightMove = (board: Board, user: User): boolean => {
  if (checkDownStraight(board, user)) return true;
  if (checkTopStraight(board, user)) return true;
  if (checkLeftStraight(board, user)) return true;
  if (checkRightStraight(board, user)) return true;
  return false;
};

export const isKingInCheck = (board: Board, user: User): boolean => {
  if (validDiagonalMove(board, user)) return true;
  if (validStraightMove(board, user)) return true;
  if (checkPawn(board, user)) return true;
  return checkKnight(board, user);
};
