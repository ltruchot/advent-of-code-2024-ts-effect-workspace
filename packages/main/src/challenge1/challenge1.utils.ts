import { Array, Tuple } from 'effect';

export function separateLocationIdArrays(lines: string[]) {
  const lineTuples: readonly [string, string][] = lines.map((line) => line.split('   ') as [string, string]);
  return Array.unzip(lineTuples);
}

export function sumIntegersArrayMembers(numbers: number[]): number {
  return Array.reduce(numbers, 0, (acc, n) => acc + n);
}

export function stringToInteger(str: string) {
  return parseInt(str, 10);
}

export function mapStringToIntegerList(strs: string[]) {
  return strs.map(stringToInteger);
}

export function biMapStringArrayToIntegerArray(pairOfStringsArrays: [string[], string[]]) {
  return Tuple.map(pairOfStringsArrays, mapStringToIntegerList);
}
