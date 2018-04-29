import * as React from 'react';

import { Annotation } from '../models/Annotation';
import { BoardTile } from './BoardTile';
import { LegendTile } from './LegendTile';

interface BoardRowProps {
    index: number;
    knight: Annotation;
    highlightTiles: Annotation[];
    onSelectTile: (position: Annotation) => void;
}

interface BoardRowState { }

class BoardRow extends React.Component<BoardRowProps, BoardRowState> {

    render(): React.ReactElement<any> | false {
        const { index } = this.props;
        const tiles = this.getBoardTiles(index);

        return (
            <div className="row">
                <LegendTile>{index}</LegendTile>
                {tiles}
                <LegendTile>{index}</LegendTile>
            </div>
        );
    }

    private getBoardTiles(row: number): React.ReactNode {
        const {
            knight,
            highlightTiles,
            onSelectTile
        } = this.props;

        const tiles: React.ReactElement<any>[] = [];

        for (let column = 1; column < 9; column++) {
            const position = this.getPosition(column, row);
            tiles.push(
                <BoardTile
                    key={position}
                    position={position}
                    knight={knight === position}
                    highlight={highlightTiles.some(tile => position === tile)}
                    onSelect={onSelectTile}
                />
            );
        }

        return tiles;
    }

    private getPosition(column: number, row: number): Annotation {
        const letter = String.fromCharCode(64 + column);
        return (letter + row) as Annotation;
    }
}

export { BoardRow }