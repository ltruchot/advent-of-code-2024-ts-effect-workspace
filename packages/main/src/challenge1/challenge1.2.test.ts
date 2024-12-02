import { Effect } from 'effect';
import { describe, expect, it } from 'vitest';
import { challenge1_2, countMemberInArray, mapCounts } from './challenge1.2';

describe('challenge 1.2', () => {
  it('should work', async () => {
    const result = await Effect.runPromise(challenge1_2(Effect.succeed(['1   2', '1   1', '2   3', '3   1'])));
    expect(result).toEqual(9);
  });

  it('should countMemberInArray', () => {
    expect(countMemberInArray(1, [1, 2, 1, 3])).toBe(2);
  });

  it('should mapCounts', () => {
    const result = mapCounts([
      [1, 2, 1, 3],
      [1, 2, 1, 3],
    ]);
    expect(result).toEqual([2, 2, 2, 3]);
  });
});
