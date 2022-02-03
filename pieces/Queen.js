import { linearX, linearY, diagonal } from "../Motion.js";

class Queen {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        };
        this.isSelected = false;
        this.isFirstPosition = true;
        this.color = color;
        chessMatrix[x][y] = this.color;
        const queenDiv = document.createElement("div");
        queenDiv.classList.add("piece" + this.color);
        if (this.color == 1) {
            queenDiv.innerHTML = "&#9813;";
        } else {
            queenDiv.innerHTML = "&#9819;";
        }
        chessBoard[x][y].appendChild(queenDiv);
    }

    availablePosition(chessMatrix) {
        const { x, y } = this.position;
        const posX = linearX(x, y, chessMatrix, this.color);
        const posY = linearY(x, y, chessMatrix, this.color);
        const posXY = diagonal(x, y, chessMatrix, this.color);
        return posX.concat(posX, posY, posXY);
    }
}

export default Queen;