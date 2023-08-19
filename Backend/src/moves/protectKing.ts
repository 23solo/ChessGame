import { Board } from '../Board';
import { Piece } from '../Piece';
import { User } from '../user/User';

const getAllSavingKingPosition = (
  board: Board,
  attackingPiecePosition: [number, number],
  kingPosition: [number, number]
): [number, number][] => {
  let [kingI, kingJ, pieceI, pieceJ] = [
    kingPosition[0],
    kingPosition[1],
    attackingPiecePosition[0],
    attackingPiecePosition[1],
  ];
  let allPositions: [number, number][] = [];
  // is king attacked from diagonal
  if (Math.abs(kingI - pieceI) == Math.abs(kingJ - pieceJ)) {
    if (kingI < pieceI) {
      // check right down diagonal
      if (kingJ < pieceJ) {
        kingJ++, kingI++;
        while (kingI <= pieceI && kingJ <= pieceJ) {
          allPositions.push([kingI, kingJ]);
          kingJ++, kingI++;
        }
      }

      // check left down diagonal
      else if (kingJ > pieceJ) {
        kingI++, kingJ--;
        while (kingI <= pieceI && kingJ >= pieceJ) {
          allPositions.push([kingI, kingJ]);
          kingI++, kingJ--;
        }
      }
    } else {
      if (kingJ < pieceJ) {
        kingJ++, kingI--;
        while (kingI <= pieceI && kingJ <= pieceJ) {
          allPositions.push([kingI, kingJ]);
        }
      }

      // check left down diagonal
      else if (kingJ > pieceJ) {
        kingI--, kingJ--;
        while (kingI <= pieceI && kingJ >= pieceJ) {
          allPositions.push([kingI, kingJ]);
        }
      }
    }
  }
  // is king attacked from straight
  // both on same row
  else if (kingI == pieceI) {
    if (kingJ < pieceJ) {
      kingJ++;
      while (kingJ <= pieceJ) {
        allPositions.push([kingI, kingJ]);
        kingJ++;
      }
    } else {
      kingJ--;
      while (kingJ >= pieceJ) {
        allPositions.push([kingI, kingJ]);
        kingJ--;
      }
    }
  }
  // Both on same column
  else if (kingJ == pieceJ) {
    console.log('Shouuulf ');

    if (kingI < pieceI) {
      kingI++;
      while (kingI <= pieceI) {
        allPositions.push([kingI, kingJ]);
        kingI++;
      }
    } else {
      kingI--;
      while (kingI >= pieceI) {
        allPositions.push([kingI, kingJ]);

        kingI--;
      }
    }
  }

  return allPositions;
};

export const canProtectKing = (board: Board, user: User): boolean => {
  let userPieces: Piece[] = [];

  // ToDO: this can be optimised by keeping track of user pieces from the start
  // add all user pieces to a list
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let curr_piece: Piece | undefined = board.grid[i][j].piece;
      if (curr_piece) {
        userPieces.push(curr_piece);
      }
    }
  }
  // console.log(userPieces);

  // check if any valid king move is possible
  let kingMove: [number, number] = user.kingPosition;
  // if (kingMoveExists) {
  //   return true;
  // }
  // if not knight getAllSavingPositions

  console.log(
    getAllSavingKingPosition(board, user.kingCheckedFrom, user.kingPosition)
  );

  // if knight check if any piece can remove it

  // else return false king is Busted

  return false;
};
