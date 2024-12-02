import { Array, Effect, Order, Tuple } from 'effect';
import { biMapStringArrayToIntegerArray, separateLocationIdArrays, sumIntegersArrayMembers } from './challenge1.utils';

export function challenge1_1(rawInput: Effect.Effect<string[]>) {
  return rawInput.pipe(
    Effect.andThen(separateLocationIdArrays),
    Effect.andThen(biMapStringArrayToIntegerArray),
    Effect.andThen(biSort),
    Effect.andThen(zipPairOfIntegersArrays),
    Effect.andThen(mapPairMembersToDistancesArray),
    Effect.andThen(sumIntegersArrayMembers),
  );
}

export function biSort(pairOfIntegersArrays: [number[], number[]]) {
  return Tuple.map(pairOfIntegersArrays, (arr) => Array.sort(Order.number)(arr));
}

export function zipPairOfIntegersArrays(pairOfIntegersArrays: [number[], number[]]): [number, number][] {
  const [leftArray, rightArray] = pairOfIntegersArrays;
  return Array.zip(leftArray, rightArray);
}

export function subtractPairMembers(pair: [number, number]) {
  const [left, right] = pair;
  return left - right;
}

export function mapPairMembersToDistancesArray(pairs: [number, number][]) {
  return Array.map(pairs, subtractPairMembers).map(Math.abs);
}
