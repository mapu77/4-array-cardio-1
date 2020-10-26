const main = require('../src/main');

describe('filterInventors', () => {
    const testCases = [
        {
            inventors: [{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
                {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
                {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}],
            year: 1500,
            expectedInventors: [{first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}]
        },
        {
            inventors: [{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
                {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
                {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}],
            year: 1600,
            expectedInventors: [{first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}]
        },
        {
            inventors: [{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
                {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
                {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}],
            year: 1800,
            expectedInventors: [{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}]
        }
    ]

    testCases.forEach((testCase) => {
        test(`filters inventors born in ${testCase.year}`, () => {
            let filteredInventors = main.filterInventors(testCase.inventors, testCase.year);
            expect(filteredInventors).toEqual(testCase.expectedInventors)
        })
    })
});