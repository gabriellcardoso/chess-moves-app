import { shallow, ShallowWrapper } from 'enzyme';
import { MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';

import { ThemeProvider, ThemeProviderProps } from '../../src/components/ThemeProvider';

describe('Given a ThemeProvider component', () => {

    let component: ShallowWrapper<ThemeProviderProps>;

    beforeEach(() => {
        component = shallow<ThemeProviderProps>(
            <ThemeProvider>
                Teste
            </ThemeProvider>
        );
    });

    describe('when rendering', () => {
        it('should contain a MaterialUI ThemeProvider', () => {
            expect(component.find(MuiThemeProvider).exists()).toEqual(true);
        });
        describe('in the MaterialUI ThemeProvider', () => {
            it('should render the component children', () => {
                expect(component.find(MuiThemeProvider).contains('Teste')).toEqual(true);
            });
        });
    });

});