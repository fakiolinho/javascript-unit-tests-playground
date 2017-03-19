import filtered from './reduce';

describe('test filtered method', () => {
  it('should return object keys bigger than 1', () => {
    expect(filtered({1: 5, 3: 6})).toEqual({3: 6});
  });
});
