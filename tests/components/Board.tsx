import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { Board, BoardProps } from '../../src/components/Board';
import { BoardRow } from '../../src/components/BoardRow';
import { LegendRow } from '../../src/components/LegendRow';

describe('Given a Board component', () => {

    let component: ShallowWrapper<BoardProps>;
    let onSelectTileHandler = jest.fn();

    beforeEach(() => {
        component = shallow(
            <Board
                knight="A2"
                moves={['A2', 'C3', 'D4']}
                onSelectTile={onSelectTileHandler}
            />
        );
    });

    describe('when rendering', () => {
        it('should have 2 LegendRow', () => {
            expect(component.find(LegendRow)).toHaveLength(2);
        });
        it('should have 8 BoardRow', () => {
            expect(component.find(BoardRow)).toHaveLength(8);
        });
        it('should have all BoardRow with knight position', () => {
            component.find(BoardRow).forEach(
                boardRow => expect(boardRow.props().knight).toEqual('A2')
            );
        });
        it('should have all BoardRow with knight moves', () => {
            component.find(BoardRow).forEach(
                boardRow => expect(boardRow.props().moves).toEqual(['A2', 'C3', 'D4'])
            );
        });
        it('should have all BoardRow with onSelectTile handler', () => {
            component.find(BoardRow).forEach(
                boardRow => expect(boardRow.props().onSelectTile).toEqual(onSelectTileHandler)
            );
        });
    });

});