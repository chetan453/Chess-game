export const linearX = (x, y, chessMatrix, color) => {
    let positions = new Array();
    let posX = [];

    for (let i = x - 1; i >= 0; i--) {
        if (chessMatrix[i][y] === 0) {
            posX.push({ x: i, y });
        } else {
            if (chessMatrix[i][y] !== color) {
                posX.push({ x: i, y })
            }
            break;
        }
    }
    for (let i = x + 1; i < 8; i++) {
        if (chessMatrix[i][y] === 0) {
            posX.push({ x: i, y });
        } else {
            if (chessMatrix[i][y] !== color) {
                posX.push({ x: i, y })
            }
            break;
        }
    }

    return posX;
}

export const linearY = (x, y, chessMatrix, color) => {
    let posY = [];
    for (let i = y - 1; i >= 0; i--) {
        if (chessMatrix[x][i] === 0) {
            posY.push({ x, y: i });
        } else {
            if (chessMatrix[x][i] !== color) {
                posY.push({ x, y: i })
            }
            break;
        }
    }
    for (let i = y + 1; i < 8; i++) {
        if (chessMatrix[x][i] === 0) {
            posY.push({ x, y: i });
        } else {
            if (chessMatrix[x][i] !== color) {
                posY.push({ x, y: i })
            }
            break;
        }
    }
    return posY;
}

export const diagonal = (x, y, chessMatrix, color) => {
    const pos = [];
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessMatrix[i][j] === 0) {
            pos.push({ x: i, y: j });
        } else {
            if (chessMatrix[i][i] !== color) {
                pos.push({ x: i, y: j });
            }
            break;
        }
    }
    for (let i = x + 1, j = y + 1; i < 8 && j < 8; i++, j++) {
        if (chessMatrix[i][j] === 0) {
            pos.push({ x: i, y: j });
        } else {
            if (chessMatrix[i][j] !== color) {
                pos.push({ x: i, y: j });
            }
            break;
        }
    }
    for (let i = x - 1, j = y + 1; i >= 0 && j < 8; j++, i--) {
        if (chessMatrix[i][j] === 0) {
            pos.push({ x: i, y: j });
        } else {
            if (chessMatrix[i][j] !== color) {
                pos.push({ x: i, y: j });
            }
            break;
        }
    }
    for (let i = x + 1, j = y - 1; i < 8 && j >= 0; j--, i++) {
        if (chessMatrix[i][j] === 0) {
            pos.push({ x: i, y: j });
        } else {
            if (chessMatrix[i][j] !== color) {
                pos.push({ x: i, y: j });
            }
            break;
        }
    }
    return pos;
}

export const knightPos = (chessMatrix, x, y, color) => {
    const positions = [];

    for (let i = -2; i <= 2; i++) {
        if (i == 0) {
            i++;
        }
        const j = 3 - Math.abs(i);
        if (x + i >= 0 && x + i < 8 && y - j >= 0 && chessMatrix[x + i][y - j] != color) {
            positions.push({
                x: x + i,
                y: y - j
            })
        }
        if (x + i >= 0 && x + i < 8 && y + j < 8 && chessMatrix[x + i][y + j] != color) {
            positions.push({
                x: x + i,
                y: y + j
            })
        }
    }
    return positions;
}

export const kingPos = (chessMatrix, x, y, color) => {
    const positions = [];
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i >= 0 && i < 8 && j >= 0 && j < 8) {
                if (chessMatrix[i][j] != color) {
                    positions.push({ x: i, y: j });
                }
            }
        }
    }

    return positions;
}