import * as React from 'react';

import { Board } from './Board';
import { Annotation } from '../models/Annotation';
import { ApiClient } from '../utils/ApiClient';

interface AppProps { }

interface AppState {
    knight: Annotation;
    highlight: boolean;
    highlightTiles: Annotation[];
}

class App extends React.Component<AppProps, AppState> {

    componentWillMount(): void {
        this.setState({
            knight: null,
            highlight: true,
            highlightTiles: [] as Annotation[]
        });
    }

    render(): React.ReactElement<any> | false {
        const {
            knight,
            highlight,
            highlightTiles
        } = this.state;

        return (
            <section className="app">
                <Board
                    knight={knight}
                    highlightTiles={highlight ? highlightTiles : []}
                    onSelectTile={position => this.handleTileSelect(position)}
                />
            </section>
        );
    }

    private handleTileSelect(position: Annotation) {
        this.setState({ knight: position });

        ApiClient
            .getKnightMoves(position)
            .then(movements => this.setState({ highlightTiles: movements }))
            .catch(console.log);
    }

}

export { App }