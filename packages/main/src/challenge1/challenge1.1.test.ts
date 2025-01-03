import { Effect } from 'effect';
import { describe, expect, it } from 'vitest';
import { biSort, challenge1_1, mapPairMembersToDistancesArray, zipPairOfIntegersArrays } from './challenge1.1';

describe('challenge 1', () => {
  it('should work', async () => {
    const result = await Effect.runPromise(challenge1_1(Effect.succeed(['2   5', '2   1', '5   14'])));
    expect(result).toEqual(13);
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

  it('should zipPairOfIntegersArrays', () => {
    const result = zipPairOfIntegersArrays([
      [15131, 32438, 12503],
      [78158, 35057, 57702],
    ]);
    expect(result).toEqual([
      [15131, 78158],
      [32438, 35057],
      [12503, 57702],
    ]);
  });

  it('should mapPairMembersToDistancesArray', () => {
    const result = mapPairMembersToDistancesArray([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(result).toEqual([1, 1, 1]);
  });
});
