jest.mock('../../src/utils/ApiClient.ts');

import { mount, ReactWrapper } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { App, AppProps, AppState } from '../../src/components/App';
import { Board } from '../../src/components/Board';
import { Toggle } from '../../src/components/Toggle';
import { ApiClient } from '../../src/utils/ApiClient';


describe('Given an App component', () => {

    let component: ReactWrapper<AppProps, AppState>;
    let muiTheme = getMuiTheme();

    const mountOptions = {
        context: { muiTheme },
        childContextTypes: { muiTheme: PropTypes.object.isRequired }
    };

    beforeEach(() => {
        component = mount<AppProps, AppState>(<App />, mountOptions);
    });

    describe('when mounting', () => {
        it('should have a section.app', () => {
            expect(component.find('section.app').exists()).toEqual(true);
        });
        it('should have a header', () => {
            expect(component.find('section.app').find('header').exists()).toEqual(true);
        });
        describe('the header', () => {
            it('should have Knight moves as title', () => {
                expect(component.find('header').find('h1').contains('Knight Moves')).toEqual(true);
            });
            it('should have a Toggle labeled show moves', () => {
                expect(component.find('header').find('p').contains(`Knight moves is an application where you can check the possible moves in 2 turns for a knight piece. To start, click/tap anywhere in the chess board to add insert a knight piece. After that, you can move the piece through the chess board by clicking/tapping anywhere.`)).toEqual(true);
            });
        });
        it('should set knight state as null', () => {
            expect(component.state().knight).toBeNull();
        });
        it('should set show moves state as true', () => {
            expect(component.state().showMoves).toEqual(true);
        });
        it('should set moves as an empty array', () => {
            expect(component.state().moves).toEqual([]);
        });
    });

    describe('when toggling Toggle component', () => {
        beforeEach(() => {
            component.setState({ moves: ['A1', 'B2', 'C3'] });
        });
        describe('to true', () => {
            beforeEach(() => {
                component.setState({ showMoves: false });
                component.find(Toggle).props().onToggle(true);
                component.update();
            });
            it('should set show moves state to true', () => {
                expect(component.state().showMoves).toEqual(true);
            });
            it('should set board moves with its own moves', () => {
                expect(component.find(Board).props().moves).toEqual(['A1', 'B2', 'C3']);
            });
        });
        describe('to false', () => {
            beforeEach(() => {
                component.setState({ showMoves: true });
                component.find(Toggle).props().onToggle(false);
                component.update();
            });
            it('should set show moves state to true', () => {
                expect(component.state().showMoves).toEqual(false);
            });
            it('should set board moves with its own moves', () => {
                expect(component.find(Board).props().moves).not.toEqual(['A1', 'B2', 'C3']);
            });
        });
    });

    describe('when selecting tile on Board component', () => {
        let getKnightMoves: jest.SpyInstance;
        beforeEach(() => {
            getKnightMoves = jest.spyOn(ApiClient, 'getKnightMoves');
            component.find(Board).props().onSelectTile('A2');
        });
        it('should set knight position to selected tile', () => {
            expect(component.state().knight).toEqual('A2');
        });
        it('should request knight moves from API', () => {
            expect(getKnightMoves).toHaveBeenCalledWith('A2');
        });
        describe('and knight moves request is successful', () => {
            beforeEach(() => {
                getKnightMoves.mockClear();
                getKnightMoves.mockResolvedValue(['A2', 'B3', 'C4']);
                component.find(Board).props().onSelectTile('A2');
            });
            it('should set moves with response', () => {
                expect(component.state().moves).toEqual(['A2', 'B3', 'C4']);
            });
        });
    });

});