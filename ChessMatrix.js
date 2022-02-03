//color 1-white, 2-black

class ChessMatrix {
    constructor(matrix) {
        this.matrix = matrix;
        this.selectedBlock = {
            x: -1,
            y: -1
        }
        this.tobeMoved = [];
        this.turn = 1;
    }
    select = (x, y) => {
        this.selectedBlock = { x: x, y: y };
    }
    deselect = () => {
        this.selectedBlock = {
            x: -1,
            y: -1
        };
    }
    movedPositions = (positions) => {
        this.tobeMoved = positions;
    }
    canMove = (x, y) => {
        let ans = false;
        this.tobeMoved.map(pos => {
            if (pos.x == x && pos.y == y) {
                ans = true;
            }
        })
        return ans;
    }
    turnChange = () => {
        if (this.turn == 1) {
            this.turn = 2;
        } else {
            this.turn = 1;
        }
    }
}

export default ChessMatrix;