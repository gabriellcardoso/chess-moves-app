import { PositionUtils } from '../../src/utils/PositionUtils';

describe('Given PositionUtils', () => {

    describe('when getting position to column and a row', () => {
        const validSuit = [
            { column: 1, row: 1, annotation: 'A1' },
            { column: 2, row: 2, annotation: 'B2' },
            { column: 3, row: 3, annotation: 'C3' },
            { column: 4, row: 4, annotation: 'D4' },
            { column: 5, row: 5, annotation: 'E5' },
            { column: 6, row: 6, annotation: 'F6' },
            { column: 7, row: 7, annotation: 'G7' },
            { column: 8, row: 8, annotation: 'H8' }
        ];
        const errorSuit = [
            { column: 0, row: 1 },
            { column: 1, row: 0 },
            { column: 9, row: 8 },
            { column: 8, row: 9 },
        ];

        validSuit.map(test =>
            describe(`to column ${test.column} and row ${test.row}`, () => {
                it(`should return ${test.annotation}`, () => {
                    expect(PositionUtils.getPosition(test.column, test.row)).toMatch(test.annotation);
                });
            })
        );

        errorSuit.map(test =>
            describe(`to column ${test.column} and row ${test.row}`, () => {
                it('should throw an error', () => {
                    expect(() => PositionUtils.getPosition(test.column, test.row)).toThrowError('PositionUtils.getPosition: column and row values should be between 1 and 8.');
                });
            })
        );
    });

});