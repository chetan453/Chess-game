import { diagonal } from "../Motion.js";

class Bishop {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        };
        this.isSelected = false;
        this.color = color;
        chessMatrix[x][y] = this.color;
        const bishopDiv = document.createElement("div");
        bishopDiv.classList.add("piece" + this.color);
        if (this.color == 1) {
            bishopDiv.innerHTML = "&#9815;";
        } else {
            bishopDiv.innerHTML = "&#9821;";
        }
        chessBoard[x][y].appendChild(bishopDiv);
    }
    availablePosition(chessMatrix) {
        return diagonal(this.position.x, this.position.y, chessMatrix, this.color);
    }
}

export default Bishop;