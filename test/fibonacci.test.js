import { fibonacci, fibonacciTailRec } from '../src/fibonacci';


describe('Assertion Test', function () {
    it('fibonacci test', function () {

        let fibo = fibonacci(10);
        expect(fibo).toBe(55);

    });
    it('fibonacciTailRec test', function () {
        let fibo2 = fibonacciTailRec(10);
        expect(fibo2).toBe(55);
    });

});

describe('Matches Variables', function () {

   test('not I in team', ()=> {
       expect('team').not.toMatch(/I/);
   });
    test('there is "stop" on Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];

    test('the shopping list has beer on it', () => {
        expect(shoppingList).toContain('beer');
        expect(new Set(shoppingList)).toContain('beer');
        
    });

});
