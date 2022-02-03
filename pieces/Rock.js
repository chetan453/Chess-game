import { linearX, linearY } from "../Motion.js";
class Rock {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        };
        this.isSelected = false;
        this.color = color;
        chessMatrix[x][y] = this.color;
        const rockdiv = document.createElement("div");
        rockdiv.classList.add("piece" + this.color);
        if (this.color == 1)
            rockdiv.innerHTML = "&#9814;";
        else
            rockdiv.innerHTML = "&#9820;"
        chessBoard[x][y].appendChild(rockdiv);
    }
    availablePosition(chessMatrix) {
        const position = new Array(8);
        const { x, y } = this.position;
        return position.concat(linearX(x, y, chessMatrix, this.color), linearY(x, y, chessMatrix, this.color));
    }
}

export default Rock;