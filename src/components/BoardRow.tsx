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
        const {
            index,
            knight,
            highlightTiles,
            onSelectTile
        } = this.props;

        const tiles: React.ReactNode[] = [];

        for (let column = 1; column < 9; column++) {
            const letter = String.fromCharCode(64 + column);
            const position = (letter + index) as Annotation;

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

        return (
            <div className="row">
                <LegendTile>{index}</LegendTile>
                {tiles}
                <LegendTile>{index}</LegendTile>
            </div>
        );
    }

}

export { BoardRow }