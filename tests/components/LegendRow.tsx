import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { LegendRow } from '../../src/components/LegendRow';
import { LegendTile } from '../../src/components/LegendTile';

describe('Given a LegendRow component', () => {

    let component: ShallowWrapper;

    beforeEach(() => {
        component = shallow(<LegendRow />);
    });

    describe('when rendering', () => {
        it('should have a div.legend-row', () => {
            expect(component.find('div.legend-row').exists()).toEqual(true);
        });
        it('should have 8 legend tiles inside the div.legend-row', () => {
            expect(component.find('div.legend-row').find(LegendTile)).toHaveLength(8);
        });
        it('should have a legend tile with A', () => {
            expect(component.find(LegendTile).contains('A')).toEqual(true);
        });
        it('should have a legend tile with B', () => {
            expect(component.find(LegendTile).contains('B')).toEqual(true);
        });
        it('should have a legend tile with C', () => {
            expect(component.find(LegendTile).contains('C')).toEqual(true);
        });
        it('should have a legend tile with D', () => {
            expect(component.find(LegendTile).contains('D')).toEqual(true);
        });
        it('should have a legend tile with E', () => {
            expect(component.find(LegendTile).contains('E')).toEqual(true);
        });
        it('should have a legend tile with F', () => {
            expect(component.find(LegendTile).contains('F')).toEqual(true);
        });
        it('should have a legend tile with G', () => {
            expect(component.find(LegendTile).contains('G')).toEqual(true);
        });
        it('should have a legend tile with H', () => {
            expect(component.find(LegendTile).contains('H')).toEqual(true);
        });
    });

});