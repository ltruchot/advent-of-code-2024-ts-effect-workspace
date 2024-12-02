import { Effect } from 'effect';

export type AocInputError = FetchError | InvalidSessionError | NetworkError;

export interface FetchError extends Error {
  _tag: 'UnknownError' | 'InvalidSessionError' | 'NetworkError';
  error?: unknown;
}

export interface UnknownError extends FetchError {
  _tag: 'UnknownError';
  error: unknown;
}

export interface InvalidSessionError extends FetchError {
  _tag: 'InvalidSessionError';
}

export interface NetworkError extends FetchError {
  _tag: 'NetworkError';
}

export function getAocInputLines(year: number, day: number) {
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const sessionId = import.meta.env.VITE_AOC_SESSION_ID;

  if (!sessionId) {
    return Effect.fail({ _tag: 'InvalidSessionError', message: 'No session ID' } as InvalidSessionError);
  }

  return Effect.tryPromise({
    try: async () => {
      const response = await fetch(url, {
        headers: { Cookie: `session=${sessionId}` },
      });
      if (!response.ok) {
        throw { _tag: 'NetworkError', message: `Network error: ${response.statusText}` } as NetworkError;
      }

      const text = await response.text();
      return text.trim().split('\n');
    },
    catch: (error): FetchError =>
      ({
        _tag: 'UnknownError',
        message: 'Unknown error',
        error,
      }) as FetchError,
  });
}
