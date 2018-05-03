import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BoardTile, BoardTileProps } from '../../src/components/BoardTile';
import { KnightPiece } from '../../src/components/KnightPiece';

describe('Given a BoardTile component', () => {

    let component: ShallowWrapper<BoardTileProps>;
    let onSelectHandler = jest.fn();

    beforeEach(() => {
        onSelectHandler.mockClear();
        component = createBoardTile(true, false, onSelectHandler);
    });

    describe('when rendering', () => {
        describe('and knight is equal to true', () => {
            beforeEach(() => {
                component = createBoardTile(true, false, onSelectHandler);
            });
            it('should has a knight piece', () => {
                expect(component.find(KnightPiece).exists()).toEqual(true);
            });
        });
        describe('and knight is equal to false', () => {
            beforeEach(() => {
                component = createBoardTile(false, false, onSelectHandler);
            });
            it('should not have a knight piece', () => {
                expect(component.find(KnightPiece).exists()).toEqual(false);
            });
        });
        describe('and highlighted is equal to true', () => {
            beforeEach(() => {
                component = createBoardTile(false, true, onSelectHandler);
            });
            it('should not be highlighted', () => {
                expect(component.find('div.tile').hasClass('highlight')).toEqual(true);
            });
        });
        describe('and highlighted is equal to false', () => {
            beforeEach(() => {
                component = createBoardTile(false, false, onSelectHandler);
            });
            it('should not be highlighted', () => {
                expect(component.find('div.tile').hasClass('highlight')).toEqual(false);
            });
        });
    });

    describe('when clicking on tile', () => {
        describe('and it already has a knight', () => {
            beforeEach(() => {
                component = createBoardTile(true, false, onSelectHandler);
                component.find('div.tile').simulate('click');
            });
            it('should not call onSelectHandler', () => {
                expect(onSelectHandler).not.toHaveBeenCalled();
            });
        });
        describe('and it doesnt have a knight piece', () => {
            beforeEach(() => {
                component = createBoardTile(false, false, onSelectHandler);
                component.find('div.tile').simulate('click');
            });
            it('should call onSelectHandler with tile position', () => {
                expect(onSelectHandler).toHaveBeenCalledWith('A1');
            });
        });
    });

});

function createBoardTile(knight: boolean, highlight: boolean, onSelectHandler: jest.Mock): ShallowWrapper<BoardTileProps> {
    return shallow(
        <BoardTile
            position="A1"
            knight={knight}
            highlight={highlight}
            onSelect={onSelectHandler}
        />
    );
}
