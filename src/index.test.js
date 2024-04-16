/* eslint-disable no-undef */
import { mergeSort, sum } from './index.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('[3, 2, 1, 13, 8, 5, 0, 1] sorts to [0, 1, 1, 2, 3, 5, 8, 13]', ()=> {
  //can use toStrictEqual to compare objects (like arrays) with deep equality.
  expect( mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) ).toStrictEqual( [0, 1, 1, 2, 3, 5, 8, 13] );
} );
