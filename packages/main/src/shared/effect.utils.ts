import { Effect } from 'effect';

export function logEffect(a: Effect.Effect<any>) {
  return Effect.tapBoth(a, {
    onFailure: (error) => Effect.sync(() => console.error('Error :', error)),
    onSuccess: (value) => Effect.sync(() => console.log('Success :', value)),
  });
}
