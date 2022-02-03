class Pawn {
    constructor(x, y, color, chessMatrix, chessBoard) {
        this.position = {
            x: x,
            y: y
        };
        this.isSelected = false;
        this.isFirstPosition = true;
        this.color = color;
        chessMatrix[x][y] = this.color;
        const pawnDiv = document.createElement("div");
        pawnDiv.classList.add("piece" + this.color);
        if (this.color == 1) {
            pawnDiv.innerHTML = "&#9817;";
        } else {
            pawnDiv.innerHTML = "&#9823;";
        }
        chessBoard[x][y].appendChild(pawnDiv);
    }

    //To find Movable position for pawn 
    availablePosition(chessMatrix) {
        const positions = new Array();
        const { x, y } = this.position;
        if (this.color == 1) {
            if (this.isFirstPosition) {
                if (x + 1 < 8 && chessMatrix[x + 1][y] === 0) {
                    positions.push({ x: x + 1, y: y });
                    if (x + 2 < 8 && chessMatrix[x + 2][y] === 0) {
                        positions.push({ x: x + 2, y: y });
                    }
                }
            } else {
                if (x + 1 < 8 && chessMatrix[x + 1][y] === 0) {
                    positions.push({ x: x + 1, y: y });
                }
            }
            if (x + 1 < 8 && y + 1 < 8 && chessMatrix[x + 1][y + 1] == 2) {
                positions.push({ x: x + 1, y: y + 1 });
            }
            if (x + 1 < 8 && y - 1 >= 0 && chessMatrix[x + 1][y - 1] == 2) {
                positions.push({ x: x + 1, y: y - 1 });
            }
        } else {
            if (this.isFirstPosition) {
                if (x - 1 >= 0 && chessMatrix[x - 1][y] === 0) {
                    positions.push({ x: x - 1, y: y });
                    if (x - 2 >= 0 && chessMatrix[x - 2][y] === 0) {
                        positions.push({ x: x - 2, y: y });
                    }
                }
            } else {
                if (x - 1 >= 0 && chessMatrix[x - 1][y] === 0) {
                    positions.push({ x: x - 1, y: y });
                }
            }
            if (x - 1 >= 0 && y - 1 >= 0 && chessMatrix[x - 1][y - 1] == 1) {
                positions.push({ x: x - 1, y: y - 1 });
            }
            if (x - 1 >= 0 && y + 1 < 8 && chessMatrix[x - 1][y + 1] == 1) {
                positions.push({ x: x - 1, y: y + 1 });
            }
        }
        return positions;
    }

    //To change the position of pawn


}

export default Pawn;