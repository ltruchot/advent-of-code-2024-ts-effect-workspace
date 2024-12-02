import { Array, Effect } from 'effect';

import { biMapStringArrayToIntegerArray, separateLocationIdArrays, sumIntegersArrayMembers } from './challenge1.utils';

export function challenge1_2(rawInput: Effect.Effect<string[]>) {
  return rawInput.pipe(
    Effect.map(separateLocationIdArrays),
    Effect.map(biMapStringArrayToIntegerArray),
    Effect.map(mapCounts),
    Effect.map(sumIntegersArrayMembers),
  );
}

export function countMemberInArray(member: number, arr: number[]) {
  return Array.filter(arr, (m) => m === member).length * member;
}

export function mapCounts([members, arrToSearch]: [number[], number[]]): number[] {
  return members.map((member) => countMemberInArray(member, arrToSearch));
}
