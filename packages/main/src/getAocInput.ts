export async function getAocInputLines(year: number, day: number): Promise<string[]> {
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const sessionId = process.env.AOC_SESSION_ID;
  const response = await fetch(url, { headers: { Cookie: `session=${sessionId}` } });
  return response
    .text()
    .then((text) => text.trim())
    .then((text) => text.split('\n'));
}
