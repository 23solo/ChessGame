import { move } from './move';
import { Board } from '../Board';
import { getMove } from './getMoves';
// Move should not be same i, j != toI, toJ toI, toJ should not have king
const validHorizontalLeftMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, toI, toJ] = getMove(move);
  --currentJ;
  while (currentJ > toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentJ;
  }
  return true;
};

const validHorizontalRightMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, _, toJ] = getMove(move);
  ++currentJ;
  while (currentJ < toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentJ;
  }
  return true;
};

const validVerticalDownMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, toI, _] = getMove(move);
  ++currentI;
  while (currentI < toI) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentI;
  }
  return true;
};

const validVerticalTopMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, toI, _] = getMove(move);
  --currentI;
  while (currentI > toI) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentI;
  }

  return true;
};

const validDiagonalTopLeftMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, _, toJ] = getMove(move);
  --currentJ;
  --currentI;
  while (currentJ > toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentJ;
    --currentI;
  }
  return true;
};

const validDiagonalTopRightMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, _, toJ] = getMove(move);
  ++currentJ;
  --currentI;
  while (currentJ < toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentJ;
    --currentI;
  }
  return true;
};

const validDiagonalDownRightMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, _, toJ] = getMove(move);
  ++currentJ;
  ++currentI;
  while (currentJ < toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentJ;
    ++currentI;
  }
  return true;
};

const validDiagonalDownLeftMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, _, toJ] = getMove(move);
  --currentJ;
  ++currentI;
  while (currentJ > toJ) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    --currentJ;
    ++currentI;
  }
  return true;
};

// Calling the above methods on conditions
export const validStraightMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, toI, toJ] = getMove(move);

  if (toI == currentI) {
    if (toJ > currentJ) {
      return validHorizontalRightMove(board, move);
    }
    return validHorizontalLeftMove(board, move);
  } else if (toJ == currentJ) {
    if (toI > currentI) {
      return validVerticalDownMove(board, move);
    }
    return validVerticalTopMove(board, move);
  }

  return false;
};

export const validDiagonalMove = (board: Board, move: move): boolean => {
  let [currentI, currentJ, toI, toJ] = getMove(move);

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
  let [currentI, currentJ, toI, _] = getMove(move);

  if (currentI > toI) {
    --currentI;
    while (currentI > toI) {
      if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
        return false;
      }
      --currentI;
    }
    return true;
  }
  ++currentI;
  while (currentI < toI) {
    if (board.grid[currentI] && board.grid[currentI][currentJ].piece) {
      return false;
    }
    ++currentI;
    return true;
  }
  return false;
};

export const validKnightMove = (move: move): boolean => {
  // Check for 8 conditions
  // ToDo: make it more generic
  let [currentI, currentJ, toI, toJ] = getMove(move);
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
