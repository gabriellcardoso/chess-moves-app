import { BoardPosition } from '../models/BoardPosition';

const getPositionError = 'PositionUtils.getPosition: column and row values should be between 1 and 8.';

class PositionUtils {

    static getPosition(column: number, row: number): BoardPosition {
        const isInvalidColumn = column < 1 || column > 8;
        const isInvalidRow = row < 1 || row > 8;

        if (isInvalidColumn || isInvalidRow) {
            throw new Error(getPositionError);
        }

        const letter = String.fromCharCode(64 + column);
        return (letter + row) as BoardPosition;
    }

}

export { PositionUtils };