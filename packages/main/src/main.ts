import { Effect } from 'effect';

import { challenge1 } from './challenge1';

import { getAocInputLines } from './getAocInput';

async function main() {
  const result = await Effect.runPromise(getAocInputLines(2024, 1).pipe(challenge1));

  console.log(result);
}

await main();

