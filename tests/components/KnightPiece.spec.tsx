import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { KnightPiece } from '../../src/components/KnightPiece';

describe('Given a KnightPiece component', () => {

    let component: ShallowWrapper;

    beforeEach(() => {
        component = shallow(<KnightPiece />);
    });

    describe('when rendering', () => {
        it('should have a span.knight.piece', () => {
            expect(component.find('span.knight.piece').exists()).toEqual(true);
        });
        it('should the span contains Knight as text', () => {
            expect(component.find('span.knight.piece').contains('Knight')).toEqual(true);
        });
    });

});