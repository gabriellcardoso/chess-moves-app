import * as React from 'react';

import { BoardRow } from './BoardRow';
import { LegendRow } from './LegendRow';
import { BoardPosition } from '../models/Annotation';

interface BoardProps {
    knight: BoardPosition;
    moves: BoardPosition[];
    onSelectTile: (position: BoardPosition) => void;
}

interface BoardState { }

class Board extends React.Component<BoardProps, BoardState> {

    render(): React.ReactElement<any> | false {
        const boardRows = this.getBoardRows();

        return (
            <section className="board">
                <LegendRow />
                {boardRows}
                <LegendRow />
            </section>
        );
    }

    private getBoardRows(): React.ReactNode {
        const {
            knight,
            moves,
            onSelectTile
        } = this.props;

        const boardRows: React.ReactNode[] = [];

        for (let index = 8; index > 0; index--) {
            boardRows.push(
                <BoardRow
                    key={index}
                    index={index}
                    knight={knight}
                    moves={moves}
                    onSelectTile={onSelectTile}
                />
            );
        }

        return boardRows;
    }

}

export { Board }