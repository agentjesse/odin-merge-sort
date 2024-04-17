// eslint-disable-next-line object-curly-newline
import { mergeSort, sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

test('[3, 2, 1, 13, 8, 5, 0, 1] sorts to [0, 1, 1, 2, 3, 5, 8, 13]', ()=> {
  //use toEqual matcher for recursive comparison of object fields; deep equality.
  expect( mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) ).toEqual( [0, 1, 1, 2, 3, 5, 8, 13] );
} );

/* old jest examples, hidden with this comment block
test('adds 1 + 2 to equal 3 and not 999', () => {
  //matcher for exact equality (Object.is)
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(999);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);     //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/); //string and regex comparison
});
*/

/* test hider comment block, use if needed */

test('capitalize string start', ()=> {
  expect( capitalize('perry') ).toMatch('Perry'); //string and string
});

test('reverse string', ()=> {
  expect( reverseString('hello') ).toMatch('olleh'); //string and string
});

test('calculator tests', ()=> {
  expect( calculator.add(1, 2) ).toBe(3);
  expect( calculator.subtract(1, 2) ).toBe(-1);
  expect( calculator.divide(1, 2) ).toBeCloseTo(0.5);
  expect( calculator.multiply(1, 2) ).toBe(2);
});

test('caesarCipher fn', ()=> {
  expect( caesarCipher('abc', 3) ).toMatch('def');
  expect( caesarCipher('Z', 3) ).toMatch('C');
  expect( caesarCipher('A', 3) ).toMatch('D');
  expect( caesarCipher('z', 3) ).toMatch('c');
  expect( caesarCipher('a', 3) ).toMatch('d');
  expect( caesarCipher('Hi, Jerry!', 3) ).toMatch('Kl, Mhuub!');
});

test('analyze array fn', ()=> {
  const analyzationObj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect( analyzationObj.average ).toBe(4);
  expect( analyzationObj.min ).toBe(1);
  expect( analyzationObj.max ).toBe(8);
  expect( analyzationObj.length ).toBe(6);
});
