import { knightPos } from '../Motion.js';
class Knight {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        }
        this.color = color;
        chessMatrix[x][y] = this.color;
        const knightDiv = document.createElement("div");
        knightDiv.classList.add("piece" + this.color);
        if (this.color == 1) {
            knightDiv.innerHTML = "&#9816;";
        } else {
            knightDiv.innerHTML = "&#9822;";
        }
        chessBoard[x][y].appendChild(knightDiv);
    }

    //
    availablePosition(chessMatrix) {
        return knightPos(chessMatrix, this.position.x, this.position.y, this.color);
    }
}

export default Knight;