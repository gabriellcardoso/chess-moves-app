# chess-moves-app
A web application to show chess pieces possible moves. At this moment, the users only can check the possible moves from the knight piece.

## Getting Started

### Prerequisites

This application uses [NodeJS] and [NPM]. You will need to have both installed in your computer before installing and running the application. Besides that, you will need to have [chess-move-server] running in your computer.

### Installing

This application uses external libraries. They are all contained in *npm packages*. So you will have to download the npm packages used in the project to install it. To download the *npm packages*, open a CLI in your application folder and run the command:

```
$ npm install
```

## Running

If everything went fine when installing the application, you can run the application now. To run the application, open the CLI in the project folder and run the command:

```
$ npm start
```

After running the command, the application will start. By default, it will start on your port `8080`. Now with the application running, you can access it in any browser at ([localhost]).

## Testing

To run the application unit tests, you need to open the CLI in the project folder and run the command:

```
$ npm test
```

## Built With

- [Typescript]
- [Webpack]
- [React]
- [Redux]
- [Jest]

## Authors

- **Gabriel Cardoso** - [gabriellcardoso]

## License

This project is licensed under the MIT License - see the [LICENSE.md] file for details

[NodeJS]: https://nodejs.org/en/
[NPM]: https://www.npmjs.com/
[chess-move-server]: https://github.com/gabriellcardoso/chess-moves-server
[localhost]: http://localhost:8080
[Typescript]: https://www.typescriptlang.org/
[Webpack]: https://webpack.js.org/
[React]: https://reactjs.org/
[Redux]: https://redux.js.org/
[Jest]: https://facebook.github.io/jest/
[gabriellcardoso]: https://github.com/gabriellcardoso
[LICENSE.md]: LICENSE.md
