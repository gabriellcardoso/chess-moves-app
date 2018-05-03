import * as React from 'react';

import { BoardPosition } from '../models/BoardPosition';
import { KnightPiece } from './KnightPiece';

interface BoardTileProps {
    position: BoardPosition;
    knight: boolean;
    highlight: boolean;
    onSelect: (position: BoardPosition) => void;
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

        const className = this.getClassName();

        return (
            <div
                className={className}
                onClick={() => this.handleSelect(position)}
            >
                {knight ? <KnightPiece /> : false}
            </div>
        );
    }

    private handleSelect(position: BoardPosition): void {
        const {
            knight,
            onSelect
        } = this.props;

        if (!knight) {
            onSelect(position);
        }
    }

    private getClassName(): string {
        const classNames = ['tile'];

        if (this.props.highlight) {
            classNames.push('highlight');
        }

        return classNames.join(' ');
    }

}

export { BoardTile, BoardTileProps };