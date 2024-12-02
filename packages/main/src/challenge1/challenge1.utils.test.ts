import { describe, expect, it } from 'vitest';
import { biMapStringArrayToIntegerArray, separateLocationIdArrays, stringToInteger, sumIntegersArrayMembers } from './challenge1.utils';

describe('challenge 1 utils', () => {
  it('should separateLocationIdArrays', () => {
    const result = separateLocationIdArrays(['15131   78158', '32438   35057', '12503   57702']);
    expect(result).toEqual([
      ['15131', '32438', '12503'],
      ['78158', '35057', '57702'],
    ]);
  });

  it('should sumIntegersArrayMembers', () => {
    const result = sumIntegersArrayMembers([1, 2, 3]);
    expect(result).toEqual(6);
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
});
