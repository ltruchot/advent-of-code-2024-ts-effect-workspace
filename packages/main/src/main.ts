import { Effect } from 'effect';

import { challenge1_2 } from './challenge1/challenge1.2';

import { getAocInputLines } from './shared/getAocInput';

async function main() {
  const result = await Effect.runPromise(getAocInputLines(2024, 1).pipe(challenge1_2));

  console.log(result);
}

await main();

