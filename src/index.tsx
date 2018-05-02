import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import { ThemeProvider } from './components/ThemeProvider';

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('chess-moves')
);