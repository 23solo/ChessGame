import { move } from './move';
import { Board } from '../Board';
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board: Board, move: move): boolean => {
  while (--move.currentJ > move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validHorizontalRightMove = (board: Board, move: move): boolean => {
  while (++move.currentJ < move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validVerticalDownMove = (board: Board, move: move): boolean => {
  while (++move.currentI < move.toI) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validVerticalTopMove = (board: Board, move: move): boolean => {
  while (--move.currentI < move.toI) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validDiagonalTopLeftMove = (board: Board, move: move): boolean => {
  --move.currentJ;
  --move.currentI;
  while (move.currentJ > move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
    --move.currentJ;
    --move.currentI;
  }
  return true;
};

const validDiagonalTopRightMove = (board: Board, move: move): boolean => {
  ++move.currentJ;
  --move.currentI;
  while (move.currentJ < move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
    ++move.currentJ;
    --move.currentI;
  }
  return true;
};

const validDiagonalDownRightMove = (board: Board, move: move): boolean => {
  ++move.currentJ;
  ++move.currentI;
  while (move.currentJ < move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
    ++move.currentJ;
    ++move.currentI;
  }
  return true;
};

const validDiagonalDownLeftMove = (board: Board, move: move): boolean => {
  --move.currentJ;
  ++move.currentI;
  while (move.currentJ > move.toJ) {
    if (board.grid[move.currentI][move.currentJ].piece) {
      return false;
    }
    --move.currentJ;
    ++move.currentI;
  }
  return true;
};

// Calling the above methods on conditions
const validStraightMove = (board: Board, move: move): boolean => {
  if (move.toI == move.toI) {
    if (move.toJ > move.currentJ) {
      return validHorizontalRightMove(board, move);
    }
    return validHorizontalLeftMove(board, move);
  } else if (move.toJ == move.toJ) {
    if (move.toI > move.currentI) {
      return validVerticalDownMove(board, move);
    }
    return validVerticalTopMove(board, move);
  }
  return false;
};

const validDiagonalMove = (board: Board, move: move): boolean => {
  if (move.currentI < move.toI && move.currentJ < move.toJ) {
    return validDiagonalTopLeftMove(board, move);
  } else if (move.currentI < move.toI && move.currentJ > move.toJ) {
    return validDiagonalTopRightMove(board, move);
  } else if (move.currentI > move.toI && move.currentJ < move.toJ) {
    return validDiagonalDownLeftMove(board, move);
  } else if (move.currentI > move.toI && move.currentJ > move.toJ) {
    return validDiagonalDownRightMove(board, move);
  }
  return false;
};
