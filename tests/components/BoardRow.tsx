import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { BoardRow, BoardRowProps } from '../../src/components/BoardRow';
import { BoardTile } from '../../src/components/BoardTile';
import { LegendTile } from '../../src/components/LegendTile';

describe('Given a BoardRow component', () => {

    let component: ShallowWrapper<BoardRowProps>;
    let onSelectTileHandler = jest.fn();

    beforeEach(() => {
        component = shallow(
            <BoardRow
                index={2}
                knight="A2"
                moves={['C2', 'D2', 'E4']}
                onSelectTile={onSelectTileHandler}
            />
        );
    });

    describe('when rendering', () => {
        it('should have a div.row', () => {
            expect(component.find('div.row').exists()).toEqual(true);
        });
        it('should have 2 legend tiles with row index', () => {
            expect(component.find(LegendTile)).toHaveLength(2);
        });
        it('should have row index as legend tiles text', () => {
            expect(component.find(LegendTile).contains('2'));
        });
        it('should have 8 board tiles', () => {
            expect(component.find(BoardTile)).toHaveLength(8);
        });
        it('should have a board tile for column A', () => {
            expect(component.find(BoardTile).at(0).props().position).toEqual('A2');
        });
        it('should have a board tile for column B', () => {
            expect(component.find(BoardTile).at(1).props().position).toEqual('B2');
        });
        it('should have a board tile for column C', () => {
            expect(component.find(BoardTile).at(2).props().position).toEqual('C2');
        });
        it('should have a board tile for column D', () => {
            expect(component.find(BoardTile).at(3).props().position).toEqual('D2');
        });
        it('should have a board tile for column E', () => {
            expect(component.find(BoardTile).at(4).props().position).toEqual('E2');
        });
        it('should have a board tile for column F', () => {
            expect(component.find(BoardTile).at(5).props().position).toEqual('F2');
        });
        it('should have a board tile for column G', () => {
            expect(component.find(BoardTile).at(6).props().position).toEqual('G2');
        });
        it('should have a board tile for column H', () => {
            expect(component.find(BoardTile).at(7).props().position).toEqual('H2');
        });
        it('should set knight to true in the board tile in knight position', () => {
            expect(component.find(BoardTile).at(0).props().knight).toEqual(true);
        });
        it('should set highlight to true in the board tiles in moves', () => {
            expect(component.find(BoardTile).at(2).props().highlight).toEqual(true);
            expect(component.find(BoardTile).at(3).props().highlight).toEqual(true);
        });
        it('should set all board tiles onSelect with own onSelect', () => {
            component.find(BoardTile).forEach(
                boardTile => expect(boardTile.props().onSelect).toEqual(onSelectTileHandler)
            );
        });
    });

});