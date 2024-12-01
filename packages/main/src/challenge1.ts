import { Array, Effect, Order, Tuple } from 'effect';

export function challenge1(rawInput: Effect.Effect<string[]>) {
  return rawInput.pipe(
    Effect.andThen(separateLocationIdLists),
    Effect.andThen(biMapStringArrayToIntegerArray),
    Effect.andThen(biSort),
    Effect.andThen(zip),
    Effect.andThen(mapToDistance),
    Effect.andThen(sum),
  );
}

// Effect functions

export function separateLocationIdLists(lines: string[]) {
  const lineTuples: readonly [string, string][] = lines.map((line) => line.split('   ') as [string, string]);
  return Array.unzip(lineTuples);
}

export function biMapStringArrayToIntegerArray(tuple: [string[], string[]]) {
  return Tuple.map(tuple, mapStringToIntegerList);
}

export function biSort(tuple: [number[], number[]]) {
  return Tuple.map(tuple, (arr) => Array.sort(Order.number)(arr));
}

// Helper functions

export function stringToInteger(str: string) {
  return parseInt(str, 10);
}

export function mapStringToIntegerList(strs: string[]) {
  return strs.map(stringToInteger);
}

export function zip(tuple: [number[], number[]]): [number, number][] {
  const [left, right] = tuple;
  return Array.zip(left, right);
}

export function subtract(tuple: [number, number]) {
  const [left, right] = tuple;
  return left - right;
}

export function mapToDistance(tuple: [number, number][]) {
  return Array.map(tuple, subtract).map(Math.abs);
}

export function sum(numbers: number[]): number {
  return Array.reduce(numbers, 0, (acc, n) => acc + n);
}

export function logEffect(a: Effect.Effect<any>) {
  return Effect.tapBoth(a, {
    onFailure: (error) => Effect.sync(() => console.error('Erreur :', error)),
    onSuccess: (value) => Effect.sync(() => console.log('Succès :', value)),
  });
}
