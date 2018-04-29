import * as React from 'react';

import { Annotation } from '../models/Annotation';
import { KnightPiece } from './KnightPiece';

interface BoardTileProps {
    position: Annotation;
    knight: boolean;
    highlight: boolean;
    onSelect: (position: Annotation) => void;
}

interface BoardTileState { }

class BoardTile extends React.Component<BoardTileProps, BoardTileState> {

    render(): React.ReactElement<any> | false {
        const {
            position,
            knight,
            highlight,
            onSelect
        } = this.props;

        return (
            <div
                className="tile"
                onClick={() => onSelect(position)}
            >
                {position}
                {knight ? <KnightPiece /> : false}
            </div>
        );
    }

}

export { BoardTile }