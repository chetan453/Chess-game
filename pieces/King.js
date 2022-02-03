import { diagonal, linearX, linearY, knightPos, kingPos } from "../Motion.js";
import Bishop from "./Bishop.js";
import Knight from "./knight.js";
import Pawn from "./Pawn.js";
import Queen from "./Queen.js";
import Rock from "./Rock.js";

export default class King {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        };
        this.isSelected = false;
        this.color = color;
        chessMatrix[x][y] = this.color;
        const knightDiv = document.createElement("div");
        knightDiv.classList.add("piece" + this.color);
        if (this.color == 1) {
            knightDiv.innerHTML = "&#9812;";
        } else {
            knightDiv.innerHTML = "&#9818;";
        }
        chessBoard[x][y].appendChild(knightDiv);
    }
    availablePosition(chessMatrix) {
        return kingPos(chessMatrix, this.position.x, this.position.y, this.color);
    }
    static isSafe(chessMatrix, chessBoard, x, y, color) {
        let ans = true;
        const tmp = chessMatrix[x][y];
        chessMatrix[x][y] = 0;
        const kingP = kingPos(chessMatrix, x, y, color);
        kingP.map(pos => {
            if (chessBoard[pos.x][pos.y] instanceof King && chessMatrix[pos.x][pos.y] !== color) {
                ans = false;
                return;
            }

        })
        if (ans == false) {
            return ans;
        }
        const knightP = knightPos(chessMatrix, x, y, color);
        knightP.map(pos => {
            if (chessBoard[pos.x][pos.y] instanceof Knight && chessMatrix[pos.x][pos.y] !== color) {
                ans = false;
                return;
            }
        })
        if (ans == false) {
            return ans;
        }

        const posX = linearX(x, y, chessMatrix, color);

        posX.map(pos => {
            if ((chessBoard[pos.x][pos.y] instanceof Rock || chessBoard[pos.x][pos.y] instanceof Queen) && chessMatrix[pos.x][pos.y] !== color) {
                ans = false;
                return;
            }
        })

        if (ans == false) {
            return ans;
        }
        const posY = linearY(x, y, chessMatrix, color);
        posY.map(pos => {
            if ((chessBoard[pos.x][pos.y] instanceof Rock || chessBoard[pos.x][pos.y] instanceof Queen) && chessMatrix[pos.x][pos.y] !== color) {
                ans = false;
                return;
            }
        })
        if (ans == false) {
            return ans;
        }
        const diagonals = diagonal(x, y, chessMatrix, color);
        diagonals.map(pos => {
            if ((chessBoard[pos.x][pos.y] instanceof Bishop || chessBoard[pos.x][pos.y] instanceof Queen || chessBoard[pos.x][pos.y] instanceof Pawn) && chessMatrix[pos.x][pos.y] !== color) {
                ans = false;
                return;
            }
        })
        chessMatrix[x][y] = tmp;
        return ans;
    }
    isCheck(chessBoard, chessMatrix) {
        return !King.isSafe(chessMatrix, chessBoard, this.position.x, this.position.y, this.color);
    }
}