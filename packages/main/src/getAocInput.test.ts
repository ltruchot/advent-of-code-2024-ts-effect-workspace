import { beforeAll, describe, expect, it, vi } from 'vitest';
import { getAocInputLines } from './getAocInput';

describe('getAocInputLines', () => {
  beforeAll(() => {
    const mockFetch = vi.spyOn(global, 'fetch');
    mockFetch.mockResolvedValue({
      text: () => Promise.resolve('15131   78158\n32438   35057\n12503   57702'),
      status: 200,
      ok: true,
    } as Response);
  });
  it('should return the input for a given year and day', async () => {
    const input = await getAocInputLines(2024, 1);
    expect(input).toBeDefined();
    expect(input).toEqual(['15131   78158', '32438   35057', '12503   57702']);
  });
});
