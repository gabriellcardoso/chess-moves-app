import * as React from 'react';

import { BoardPosition } from '../models/Annotation';
import { PositionUtils } from '../utils/PositionUtils';
import { BoardTile } from './BoardTile';
import { LegendTile } from './LegendTile';

interface BoardRowProps {
    index: number;
    knight: BoardPosition;
    moves: BoardPosition[];
    onSelectTile: (position: BoardPosition) => void;
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
        const tiles: React.ReactElement<any>[] = [];

        for (let column = 1; column < 9; column++) {
            const position = PositionUtils.getPosition(column, row);
            const tile = this.getBoardTile(position);
            tiles.push(tile);
        }

        return tiles;
    }

    private getBoardTile(position: BoardPosition): React.ReactElement<any> {
        const {
            knight,
            moves,
            onSelectTile
        } = this.props;

        return (
            <BoardTile
                key={position}
                position={position}
                knight={knight === position}
                highlight={moves.some(move => move === position)}
                onSelect={onSelectTile}
            />
        );
    }
    
}

export { BoardRow }