jest.mock('../../src/config');
jest.unmock('../../src/utils/ApiClient');

import { Config } from '../../src/config';
import { ApiClient } from '../../src/utils/ApiClient';
import { BoardPosition } from '../../src/models/BoardPosition';

describe('Given an ApiClient', () => {

    let promise: Promise<BoardPosition[]>;

    describe('when getting knight moves', () => {
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(
                () => Promise.resolve(mockResponse(200, null, ['A1', 'A2', 'B3']))
            );
            promise = ApiClient.getKnightMoves('A5');
        });
        it('should request to GET knight moves API', () => {
            expect(window.fetch).toHaveBeenCalledWith('http://test.com/knight/A5/moves/');
        });
        describe('if the request succeed', () => {
            it('should resolve promise with moves', () => {
                promise.then(moves => expect(moves).toEqual(['A1', 'A2', 'B3']));
            });
        });
        describe('if the request fails', () => {
            beforeEach(() => {
                window.fetch = jest.fn().mockImplementation(
                    () => Promise.resolve(mockResponse(400, 'Bad Request', null))
                );
                promise = ApiClient.getKnightMoves('A5');
            });
            it('should reject promise with response status text', () => {
                promise.catch(error => expect(error).toEqual(new Error('Bad Request')));
            });
        });
    });

});

function mockResponse(status, statusText, body) {
    return {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        },
        json: jest.fn().mockReturnValue(body)
    };
}