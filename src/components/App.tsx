import * as React from 'react';

import { Board } from './Board';
import { Toggle } from './Toggle';
import { BoardPosition } from '../models/BoardPosition';
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
                <header>
                    <h1>Knight Moves</h1>
                    <p>
                        Knight moves is an application where you can check the possible moves in 2 turns for a knight piece.
                        To start, click/tap anywhere in the chess board to add insert a knight piece.
                        After that, you can move the piece through the chess board by clicking/tapping anywhere.
                    </p>
                    <Toggle
                        label="Show moves"
                        value={showMoves}
                        onToggle={value => this.setState({ showMoves: value })}
                    />
                </header>
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