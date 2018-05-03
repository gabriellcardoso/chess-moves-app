import { shallow, ShallowWrapper } from 'enzyme';
import MuiToggle from 'material-ui/Toggle';
import * as React from 'react';

import { Toggle, ToggleProps } from '../../src/components/Toggle';

describe('Given a Toggle component', () => {

    let component: ShallowWrapper<ToggleProps>;
    let onToggleHandler = jest.fn();

    beforeEach(() => {
        onToggleHandler.mockClear();
        component = shallow<ToggleProps>(
            <Toggle
                label="Show moves"
                value={true}
                onToggle={onToggleHandler}
            />
        );
    });

    describe('when rendering', () => {
        it('should contain a MaterialUI Toggle', () => {
            expect(component.find(MuiToggle).exists()).toEqual(true);
        });
        describe('the Material UI Toggle', () => {
            it('should have className toggle', () => {
                expect(component.find(MuiToggle).hasClass('toggle')).toEqual(true);
            });
            it('should receive value as toggled props', () => {
                expect(component.find(MuiToggle).props().toggled).toEqual(true);
            });
        });
    });

    describe('when changing value', () => {
        describe('to true', () => {
            beforeEach(() => {
                component.setProps({ value: true });
            });
            it('should change Material UI Toggle toggled to true', () => {
                expect(component.find(MuiToggle).props().toggled).toEqual(true);
            });
        });
        describe('to false', () => {
            beforeEach(() => {
                component.setProps({ value: false });
            });
            it('should change Material UI Toggle toggled to true', () => {
                expect(component.find(MuiToggle).props().toggled).toEqual(false);
            });
        });
    });

    describe('when Material UI Toggle toggles', () => {
        describe('to true', () => {
            beforeEach(() => {
                component.find(MuiToggle).props().onToggle(null, true);
            });
            it('should call onToggle with true', () => {
                expect(onToggleHandler).toHaveBeenCalledWith(true);
            });
        });
        describe('to false', () => {
            beforeEach(() => {
                component.find(MuiToggle).props().onToggle(null, false);
            });
            it('should call onToggle with false', () => {
                expect(onToggleHandler).toHaveBeenCalledWith(false);
            });
        });
    });

})