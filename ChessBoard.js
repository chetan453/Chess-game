import Bishop from "./pieces/Bishop.js";
import King from "./pieces/King.js";
import Knight from "./pieces/knight.js";
import Pawn from "./pieces/Pawn.js";
import Queen from "./pieces/Queen.js";
import Rock from "./pieces/Rock.js";

//color 1-white, 2-black
class ChessBoard {
    constructor() {
        let board = new Array(8);
        for (let i = 0; i < 8; i++) {
            board[i] = new Array(8);
        }
        this.board = board;
        this.selectedPiece = null;
    }
    startGame = (chessMatrix, chessBoard) => {
        //For white
        for (let i = 0; i < 8; i++) {
            this.board[1][i] = new Pawn(1, i, 1, chessMatrix, chessBoard);
        }
        this.board[0][0] = new Rock(0, 0, 1, chessMatrix, chessBoard);
        this.board[0][7] = new Rock(0, 7, 1, chessMatrix, chessBoard);
        this.board[0][1] = new Knight(0, 1, 1, chessMatrix, chessBoard);
        this.board[0][6] = new Knight(0, 6, 1, chessMatrix, chessBoard);
        this.board[0][2] = new Bishop(0, 2, 1, chessMatrix, chessBoard);
        this.board[0][5] = new Bishop(0, 5, 1, chessMatrix, chessBoard);
        this.board[0][3] = new King(0, 3, 1, chessMatrix, chessBoard);
        this.board[0][4] = new Queen(0, 4, 1, chessMatrix, chessBoard);
        //For Black
        for (let i = 0; i < 8; i++) {
            this.board[6][i] = new Pawn(6, i, 2, chessMatrix, chessBoard);
        }
        this.board[7][0] = new Rock(7, 0, 2, chessMatrix, chessBoard);
        this.board[7][7] = new Rock(7, 7, 2, chessMatrix, chessBoard);
        this.board[7][1] = new Knight(7, 1, 2, chessMatrix, chessBoard);
        this.board[7][6] = new Knight(7, 6, 2, chessMatrix, chessBoard);
        this.board[7][2] = new Bishop(7, 2, 2, chessMatrix, chessBoard);
        this.board[7][5] = new Bishop(7, 5, 2, chessMatrix, chessBoard);
        this.board[7][3] = new King(7, 3, 2, chessMatrix, chessBoard);
        this.board[7][4] = new Queen(7, 4, 2, chessMatrix, chessBoard);
    }
    selectpiece = (piece) => {
        this.selectedPiece = piece;
    }
    deselectPiece = () => {
        this.selectedPiece = null;
    }
    changePosition(x, y, chessMatrix, piece) {
        chessMatrix[piece.position.x][piece.position.y] = 0;

        if (piece.isFirstPosition != null) {
            if (piece.isFirstPosition)
                piece.isFirstPosition = false;
        }
        piece.position = { x: x, y: y };
        chessMatrix[x][y] = piece.color;
    }
}

export default ChessBoard;