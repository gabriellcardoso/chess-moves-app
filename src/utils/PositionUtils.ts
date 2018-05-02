import { BoardPosition } from "../models/Annotation";

class PositionUtils {

    static getPosition(column: number, row: number): BoardPosition {
        const letter = String.fromCharCode(64 + column);
        return (letter + row) as BoardPosition;
    }

}

export { PositionUtils }