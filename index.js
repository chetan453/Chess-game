//color 1- white 2-black  0 - no piece in the block 

import Pawn from "./pieces/Pawn.js";
import ChessMatrix from "./ChessMatrix.js";
import ChessBoard from "./ChessBoard.js";
import Knight from "./pieces/knight.js";
import Rock from "./pieces/Rock.js";
import Bishop from "./pieces/Bishop.js";
import Queen from "./pieces/Queen.js";
import King from "./pieces/King.js";
var chessBoard = new Array(8);
var matrix = new Array(8);
for (let i = 0; i < 8; i++) {
    chessBoard[i] = new Array(8);
    matrix[i] = new Array(8);
}
const chessMatrix = new ChessMatrix(matrix);
var boardLogic = new ChessBoard();
const board = document.getElementById("board");
// const knight = new Knight()

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        chessBoard[i][j] = document.createElement("div");
        matrix[i][j] = 0;
        if ((i + j) % 2 == 0) {
            chessBoard[i][j].className = "white";
        } else {
            chessBoard[i][j].className = "black";
        }
        chessBoard[i][j].classList.add("block");
        board.appendChild(chessBoard[i][j]);
    }
}
const rock = new Rock(3, 2, 1, chessMatrix.matrix, chessBoard);
boardLogic.board[3][2] = rock;
const bishop = new Bishop(4, 3, 1, chessMatrix.matrix, chessBoard);
boardLogic.board[4][3] = bishop;
const king2 = new King(7, 7, 1, chessMatrix.matrix, chessBoard);
boardLogic.board[7][7] = king2;
const king1 = new King(1, 1, 2, chessMatrix.matrix, chessBoard);
boardLogic.board[1][1] = king1;

console.log(king1.isCheck(boardLogic.board, chessMatrix.matrix));

// boardLogic.startGame(chessMatrix.matrix, chessBoard);

//function to move
const movePiece = (piece, x, y, pieceObj) => {
    const availblocks = chessMatrix.tobeMoved;
    availblocks.map(block => {
        chessBoard[block.x][block.y].classList.remove("available");
    })
    chessBoard[pieceObj.position.x][pieceObj.position.y].removeChild(piece);
    boardLogic.board[pieceObj.position.x][pieceObj.position.y] = null;
    deSelect(pieceObj.position.x, pieceObj.position.y, []);
    if (chessMatrix.matrix[x][y] !== 0) {
        chessBoard[x][y].removeChild(chessBoard[x][y].firstChild);
    }
    boardLogic.changePosition(x, y, chessMatrix.matrix, pieceObj);
    // console.log(pieceObj.position);
    // console.log(piece);
    chessBoard[pieceObj.position.x][pieceObj.position.y].appendChild(piece);
    boardLogic.board[x][y] = pieceObj;
    chessMatrix.movedPositions([]);
}


//function to select a block
const selectBlock = (xsel, ysel, i, j, availPos) => {
    availPos = chessMatrix.tobeMoved;
    if (xsel == -1 && ysel == -1) {
        chessMatrix.select(i, j);
        xsel = i;
        ysel = j;
    } else {
        chessBoard[xsel][ysel].classList.remove("selected");
        availPos.map(pos => {
            chessBoard[pos.x][pos.y].classList.remove("available");
        })
        chessMatrix.select(i, j);
        xsel = i;
        ysel = j;
    }
    if (boardLogic.board[i][j] != null) {
        availPos = [];
        if (boardLogic.board[i][j] instanceof King) {
            const positions = boardLogic.board[i][j].availablePosition(chessMatrix.matrix);
            positions.map(pos => {
                if (King.isSafe(chessMatrix.matrix, boardLogic.board, pos.x, pos.y, chessMatrix.matrix[xsel][ysel])) {
                    availPos.push(pos);
                }
            })
        }
        else {
            availPos = boardLogic.board[i][j].availablePosition(chessMatrix.matrix);
        }

    } else {
        availPos = [];
    }

    chessBoard[xsel][ysel].classList.add("selected");

    availPos.map(pos => {
        // const safe = King.isSafe(chessMatrix.matrix, boardLogic.board, pos.x, pos.y, chessMatrix.matrix[xsel][ysel]);
        // console.log(safe, pos);
        chessBoard[pos.x][pos.y].classList.add("available");
    })
    chessMatrix.movedPositions(availPos);
}

//function to de-select a block
const deSelect = (xsel, ysel, availPos) => {
    chessMatrix.deselect();
    chessBoard[xsel][ysel].classList.remove("selected");
    availPos.map(pos => {
        chessBoard[pos.x][pos.y].classList.remove("available");
    })
    chessMatrix.tobeMoved = [];
    availPos = [];
}

let availPos = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        chessBoard[i][j].addEventListener("click", () => {
            let xsel = chessMatrix.selectedBlock.x, ysel = chessMatrix.selectedBlock.y;
            availPos = chessMatrix.tobeMoved;
            let isMoved = false;
            if (chessMatrix.canMove(i, j)) {
                movePiece(chessBoard[xsel][ysel].firstChild, i, j, boardLogic.board[xsel][ysel]);
                console.log(king1.isCheck(boardLogic.board, chessMatrix.matrix));

                isMoved = true;
                chessMatrix.turnChange();
            }

            if (chessMatrix.turn == chessMatrix.matrix[i][j] || chessMatrix.matrix[i][j] == 0) {
                if (xsel == i && ysel == j) {
                    deSelect(xsel, ysel, availPos);
                } else {
                    if (!isMoved) {
                        selectBlock(xsel, ysel, i, j, availPos);
                    }
                }
            } else {
                deSelect(xsel, ysel, availPos);
            }

        })
    }
}

