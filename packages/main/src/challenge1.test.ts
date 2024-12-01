import { Effect } from 'effect';
import { describe, expect, it } from 'vitest';
import {
  biMapStringArrayToIntegerArray,
  biSort,
  challenge1,
  mapToDistance,
  separateLocationIdLists,
  stringToInteger,
  sum,
  zip,
} from './challenge1';

describe('challenge 1', () => {
  it('should work', async () => {
    const result = await Effect.runPromise(challenge1(Effect.succeed(['2   5', '2   1', '5   14'])));
    expect(result).toEqual(13);
  });

  it('should separateLocationIdLists', () => {
    const result = separateLocationIdLists(['15131   78158', '32438   35057', '12503   57702']);
    expect(result).toEqual([
      ['15131', '32438', '12503'],
      ['78158', '35057', '57702'],
    ]);
  });

  it('should stringToInteger', () => {
    const result = stringToInteger('15131');
    expect(result).toEqual(15131);
  });

  it('should biMapStringArrayToIntegerArray', () => {
    const result = biMapStringArrayToIntegerArray([
      ['15131', '32438', '12503'],
      ['78158', '35057', '57702'],
    ]);
    expect(result).toEqual([
      [15131, 32438, 12503],
      [78158, 35057, 57702],
    ]);
  });

  it('should biSort', () => {
    const result = biSort([
      [15131, 32438, 12503],
      [78158, 35057, 57702],
    ]);
    expect(result).toEqual([
      [12503, 15131, 32438],
      [35057, 57702, 78158],
    ]);
  });

  it('should zip', () => {
    const result = zip([
      [15131, 32438, 12503],
      [78158, 35057, 57702],
    ]);
    expect(result).toEqual([
      [15131, 78158],
      [32438, 35057],
      [12503, 57702],
    ]);
  });

  it('should sum', () => {
    const result = sum([1, 2, 3]);
    expect(result).toEqual(6);
  });

  it('should mapToDistance', () => {
    const result = mapToDistance([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(result).toEqual([1, 1, 1]);
  });
});
