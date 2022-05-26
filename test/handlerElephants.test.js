const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('returns the correct number of elephants when called ', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('returns an array with the correct names when called', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('returns the correct elephants age average when called', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
