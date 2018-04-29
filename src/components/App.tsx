import * as React from 'react';

import { Board } from './Board';
import { Annotation } from '../models/Annotation';

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
            highlight: false,
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
            < section className="app" >
                <Board
                    knight={knight}
                    highlightTiles={highlight ? highlightTiles : []}
                    onSelectTile={position => this.handleTileSelect(position)}
                />
            </section >
        );
    }

    private handleTileSelect(position: Annotation) {
        console.log(position);
        this.setState({ knight: position });
    }

}

export { App }