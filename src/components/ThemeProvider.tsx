import { MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => (
    <MuiThemeProvider>
        {props.children}
    </MuiThemeProvider>
);

export { ThemeProvider }