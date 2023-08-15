import { move } from './move';
import { Board } from '../Board';
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ;
  while (--currentJ > toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validHorizontalRightMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ;
  while (++currentJ < toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validVerticalDownMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toI = move.toI;
  while (++currentI < toI) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validVerticalTopMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toI = move.toI;
  while (--currentI < toI) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
  }
  return true;
};

const validDiagonalTopLeftMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ,
    toI = move.toI;
  --currentJ;
  --currentI;
  while (currentJ > toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentJ;
    --currentI;
  }
  return true;
};

const validDiagonalTopRightMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ,
    toI = move.toI;
  ++currentJ;
  --currentI;
  while (currentJ < toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentJ;
    --currentI;
  }
  return true;
};

const validDiagonalDownRightMove = (board: Board, move: move): boolean => {
  console.log('HERE');

  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ,
    toI = move.toI;
  ++currentJ;
  ++currentI;
  while (currentJ < toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentJ;
    ++currentI;
  }
  return true;
};

const validDiagonalDownLeftMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ,
    toI = move.toI;
  --currentJ;
  ++currentI;
  while (currentJ > toJ) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentJ;
    ++currentI;
  }
  return true;
};

// Calling the above methods on conditions
export const validStraightMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.toI,
    toJ = move.toJ,
    toI = move.toI;
  if (toI == toI) {
    if (toJ > currentJ) {
      return validHorizontalRightMove(board, move);
    }
    return validHorizontalLeftMove(board, move);
  } else if (toJ == toJ) {
    if (toI > currentI) {
      return validVerticalDownMove(board, move);
    }
    return validVerticalTopMove(board, move);
  }
  return false;
};

export const validDiagonalMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.currentI,
    toJ = move.toJ,
    toI = move.toI;

  if (currentI > toI && currentJ > toJ) {
    return validDiagonalTopLeftMove(board, move);
  } else if (currentI > toI && currentJ < toJ) {
    return validDiagonalTopRightMove(board, move);
  } else if (currentI < toI && currentJ > toJ) {
    return validDiagonalDownLeftMove(board, move);
  } else if (currentI < toI && currentJ < toJ) {
    return validDiagonalDownRightMove(board, move);
  }
  return false;
};

export const validPawnMove = (board: Board, move: move): boolean => {
  let currentJ = move.currentJ,
    currentI = move.currentI,
    toI = move.toI;
  if (currentI > toI) {
    while (--currentI > toI) {
      if (board.grid[currentI][currentJ].piece) {
        return false;
      }
    }
    return true;
  }
  while (++currentI < toI) {
    if (board.grid[currentI][currentJ].piece) {
      return false;
    }
    return true;
  }
  return false;
};

export const validKnightMove = (board: Board, move: move): boolean => {
  // Check for 8 conditions
  let currentJ = move.currentJ,
    currentI = move.currentI,
    toJ = move.toJ,
    toI = move.toI;
  if (currentI + 2 == toI && currentJ + 1 == toJ) {
    return true;
  }
  if (currentI + 2 == toI && currentJ - 1 == toJ) {
    return true;
  }
  if (currentI - 2 == toI && currentJ + 1 == toJ) {
    return true;
  }
  if (currentI - 2 == toI && currentJ - 1 == toJ) {
    return true;
  }
  if (currentI + 1 == toI && currentJ + 2 == toJ) {
    return true;
  }
  if (currentI + 1 == toI && currentJ - 2 == toJ) {
    return true;
  }
  if (currentI - 1 == toI && currentJ + 2 == toJ) {
    return true;
  }
  if (currentI - 1 == toI && currentJ - 2 == toJ) {
    return true;
  }

  return false;
};
