import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { LegendTile, LegendTileProps } from '../../src/components/LegendTile';

describe('Given a LegendTile component', () => {

    let component: ShallowWrapper<LegendTileProps>;

    beforeEach(() => {
        component = shallow<LegendTileProps>(
            <LegendTile>
                A1
            </LegendTile>
        );
    });

    describe('when rendering', () => {
        it('should have a div.legend-tile', () => {
            expect(component.find('div.legend-tile').exists()).toEqual(true);
        });
        it('should have a span.legend', () => {
            expect(component.find('span.legend').exists()).toEqual(true);
        });
        it('should render its children inside span.legend', () => {
            expect(component.find('span.legend').contains('A1')).toEqual(true);
        });
    });

});