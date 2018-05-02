import * as React from 'react';

import { Board } from './Board';
import { BoardPosition } from '../models/Annotation';
import { ApiClient } from '../utils/ApiClient';

interface AppProps { }

interface AppState {
    knight: BoardPosition;
    moves: BoardPosition[];
    showMoves: boolean;
}

class App extends React.Component<AppProps, AppState> {

    componentWillMount(): void {
        this.setInitialState();
    }

    render(): React.ReactElement<any> | false {
        const {
            knight,
            moves,
            showMoves
        } = this.state;

        return (
            <section className="app">
                <Board
                    knight={knight}
                    moves={showMoves ? moves : []}
                    onSelectTile={position => this.handleSelectTile(position)}
                />
            </section>
        );
    }

    private setInitialState(): void {
        this.setState({
            knight: null,
            showMoves: true,
            moves: [] as BoardPosition[]
        });
    }

    private handleSelectTile(position: BoardPosition): void {
        this.setKnightPosition(position);

        ApiClient
            .getKnightMoves(position)
            .then(moves => this.setMoves(moves))
            .catch(console.log);
    }


    private setMoves(moves: BoardPosition[]): void {
        return this.setState({ moves });
    }

    private setKnightPosition(position: BoardPosition): void {
        this.setState({ knight: position });
    }
}

export { App }